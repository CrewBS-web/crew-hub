import crypto from "crypto";

import { META_PIXEL_ID } from "@/lib/constants";

const GRAPH_API_VERSION = "v21.0";

const hash = (value: string) =>
  crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");

type ScheduleEventInput = {
  eventId: string;
  eventTime: number;
  client: {
    id: number;
    phone?: string;
    firstName?: string;
    lastName?: string;
  };
};

export async function sendScheduleEvent({
  eventId,
  eventTime,
  client
}: ScheduleEventInput) {
  const accessToken = process.env.META_CONVERSIONS_API_ACCESS_TOKEN;

  if (!accessToken) {
    console.warn(
      "META_CONVERSIONS_API_ACCESS_TOKEN is not set, skipping Meta CAPI event"
    );
    return;
  }

  const userData: Record<string, string[]> = {
    external_id: [hash(String(client.id))]
  };

  if (client.phone) userData.ph = [hash(client.phone.replace(/\D/g, ""))];
  if (client.firstName) userData.fn = [hash(client.firstName)];
  if (client.lastName) userData.ln = [hash(client.lastName)];

  const body = {
    data: [
      {
        event_name: "Schedule",
        event_time: eventTime,
        event_id: eventId,
        action_source: "system_generated",
        user_data: userData
      }
    ],
    ...(process.env.META_TEST_EVENT_CODE
      ? { test_event_code: process.env.META_TEST_EVENT_CODE }
      : {})
  };

  const response = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${META_PIXEL_ID}/events`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(body)
    }
  );

  if (!response.ok) {
    console.error("Meta CAPI request failed", response.status, await response.text());
  }
}
