import type { Metadata } from "next";
import { RetryButton } from "@/components/RetryButton";
import { WifiOff } from "lucide-react";

export const metadata: Metadata = { title: "Offline", robots: { index: false } };

export default function OfflinePage() {
  return (
    <main className="app-frame min-h-app flex flex-col items-center justify-center px-6 text-center">
      <WifiOff className="h-14 w-14 text-amber-300" aria-hidden />
      <h1 className="mt-5 text-2xl font-extrabold text-fg">You are offline</h1>
      <p className="mt-2 text-base text-slate-300">ইন্টারনেট সংযোগ নেই। সংযোগ ফিরলে আবার চেষ্টা করুন।</p>
      <p className="mt-1 text-sm text-slate-400">Live requests need a connection.</p>
      <RetryButton />
    </main>
  );
}
