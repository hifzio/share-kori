"use client";

export function RetryButton() {
  return (
    <button
      type="button"
      onClick={() => window.location.assign("/")}
      className="mt-6 h-14 rounded-2xl bg-indigo-600 px-8 text-base font-extrabold text-white active:scale-95"
    >
      Try again / আবার চেষ্টা করুন
    </button>
  );
}
