const UTM_STORAGE_KEY = "crew_utm_params";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

// Landing-page UTM params can get lost by the time the user opens the
// booking widget from another page, so we stash them for the session.
export const captureUtmParams = (): void => {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }

  if (Object.keys(found).length === 0) return;

  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
  } catch {
    // sessionStorage unavailable (private mode, etc.) — ignore.
  }
};

const getStoredUtmParams = (): UtmParams => {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
};

// Altegio's booking widget reads utm_source/utm_medium/utm_campaign off its
// own URL and stores them as the record's attraction source in the CRM.
export const appendUtmParams = (url: string): string => {
  const utm = getStoredUtmParams();
  const entries = Object.entries(utm).filter(([, value]) => Boolean(value));
  if (entries.length === 0) return url;

  try {
    const target = new URL(url);
    for (const [key, value] of entries) {
      target.searchParams.set(key, value as string);
    }
    return target.toString();
  } catch {
    return url;
  }
};
