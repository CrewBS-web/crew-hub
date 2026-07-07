"use client";

import { useCallback, useEffect, useState } from "react";

declare global {
  interface Window {
    yWidget?: {
      href?: string;
      show?: (url?: string) => void;
    };
    fbq?: (...args: unknown[]) => void;
  }
}

type UseAltegBookingOptions = {
  fallbackUrl?: string;
  pollMs?: number;
};

export const useAltegBooking = (options?: UseAltegBookingOptions) => {
  const fallbackUrl = options?.fallbackUrl ?? "https://b816066.alteg.io/";
  const pollMs = options?.pollMs ?? 200;

  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isReady = () => typeof window.yWidget?.show === "function";

    if (isReady()) {
      setIsWidgetReady(true);
      return;
    }

    const intervalId = window.setInterval(() => {
      if (isReady()) {
        setIsWidgetReady(true);
        window.clearInterval(intervalId);
      }
    }, pollMs);

    return () => window.clearInterval(intervalId);
  }, [pollMs]);

  const openBooking = useCallback(
    (url?: string) => {
      if (typeof window === "undefined") return;

      window.fbq?.("track", "Schedule");

      const widget = window.yWidget;
      const targetUrl = url ?? widget?.href ?? fallbackUrl;

      if (typeof widget?.show === "function") {
        // This matches the widget behavior: overlay on desktop, redirect on mobile.
        widget.show(targetUrl);
        return;
      }

      // Fallback: navigate to the same URL in the same tab.
      window.location.href = targetUrl;
    },
    [fallbackUrl]
  );

  return { isWidgetReady, openBooking };
};
