export type AltegioWebhookStatus = "create" | "update" | "delete";

export type AltegioRecordPayload = {
  resource: string;
  status: AltegioWebhookStatus;
  data: {
    id: number;
    datetime: string;
    create_date: string;
    // true when the record was created through the online booking widget,
    // false/absent when it was created by an administrator in Altegio.
    online?: boolean;
    client?: {
      id: number;
      name?: string;
      surname?: string;
      phone?: string;
    };
  };
};

// Keys whose values are personal data and must never reach the logs.
const PII_KEY = /name|phone|email|comment|address|birth|card|passport/i;

/**
 * Deep copy of a webhook payload with personal data replaced by "***".
 * Safe to log and to share with third parties.
 */
export function redactPayload(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(redactPayload);

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, v]) => [
        key,
        PII_KEY.test(key) && v !== null && typeof v !== "object"
          ? "***"
          : redactPayload(v)
      ])
    );
  }

  return value;
}

/**
 * Only records created by the client through the booking widget are
 * conversions. Records created by an administrator are not.
 */
export function isOnlineRecord(data: AltegioRecordPayload["data"]) {
  return data.online === true;
}
