import { NextRequest, NextResponse } from "next/server";

import {
  type AltegioRecordPayload,
  isOnlineRecord,
  redactPayload
} from "@/lib/altegio-webhook";
import { sendScheduleEvent } from "@/lib/meta-conversions-api";

// Altegio does not sign these requests — the endpoint is unauthenticated by
// product decision (revisit if fake "create" events become a problem).
export async function POST(request: NextRequest) {
  let payload: AltegioRecordPayload;

  try {
    payload = await request.json();
    if (!payload || typeof payload !== "object") throw new Error("not an object");
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Personal data is masked; these logs double as sample payloads for the
  // ad team (online booking vs. admin booking vs. cancellation).
  console.log("[altegio-webhook] payload", JSON.stringify(redactPayload(payload)));

  const { resource, status, data } = payload;

  // Only newly created online bookings count as a "Schedule" conversion.
  // Updates and deletes (cancellations) and admin-created records are skipped.
  if (
    resource === "record" &&
    status === "create" &&
    typeof data?.id === "number" &&
    data.client &&
    isOnlineRecord(data)
  ) {
    const eventTime = Math.floor(
      new Date(data.create_date || data.datetime).getTime() / 1000
    );

    await sendScheduleEvent({
      // One record = one event. Must match the event_id sent from GTM so Meta
      // can deduplicate.
      eventId: `rec_${data.id}`,
      eventTime,
      client: {
        id: data.client.id,
        phone: data.client.phone,
        firstName: data.client.name,
        lastName: data.client.surname
      }
    });
  } else {
    console.log("[altegio-webhook] skipped", {
      resource,
      status,
      recordId: data?.id,
      online: data?.online,
      hasClient: Boolean(data?.client)
    });
  }

  return NextResponse.json({ received: true });
}
