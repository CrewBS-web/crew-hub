import { NextRequest, NextResponse } from "next/server";

import { sendScheduleEvent } from "@/lib/meta-conversions-api";

type AltegioWebhookStatus = "create" | "update" | "delete";

type AltegioRecordPayload = {
  resource: string;
  status: AltegioWebhookStatus;
  data: {
    id: number;
    datetime: string;
    create_date: string;
    client?: {
      id: number;
      name?: string;
      surname?: string;
      phone?: string;
    };
  };
};

// Altegio does not sign these requests — the endpoint is unauthenticated by
// product decision (revisit if fake "create" events become a problem).
export async function POST(request: NextRequest) {
  let payload: AltegioRecordPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // TEMP DEBUG — remove once Meta CAPI event confirmed firing from real Altegio payloads.
  console.log("[altegio-webhook] payload", JSON.stringify(payload));

  if (
    payload.resource === "record" &&
    payload.status === "create" &&
    payload.data?.client
  ) {
    const eventTime = Math.floor(
      new Date(payload.data.create_date || payload.data.datetime).getTime() /
        1000
    );

    await sendScheduleEvent({
      eventId: `altegio-record-${payload.data.id}-create`,
      eventTime,
      client: {
        id: payload.data.client.id,
        phone: payload.data.client.phone,
        firstName: payload.data.client.name,
        lastName: payload.data.client.surname
      }
    });
  } else {
    // TEMP DEBUG — remove alongside the payload log above.
    console.log("[altegio-webhook] skipped, condition not met", {
      resource: payload.resource,
      status: payload.status,
      hasClient: Boolean(payload.data?.client)
    });
  }

  return NextResponse.json({ received: true });
}
