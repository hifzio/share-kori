"use client";

import { useEffect } from "react";
import { log } from "@/lib/logger";

/** Registers the service worker in production builds only (a worker in `next dev` caches stale code). */
export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then(() => log.success("pwa", "Service worker ready: the app can open offline"))
      .catch((e: Error) => log.warn("pwa", `Service worker not registered: ${e.message}`));
  }, []);
  return null;
}
