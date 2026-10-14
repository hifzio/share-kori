"use client";

import { DatabaseZap } from "lucide-react";
import { useLang } from "@/components/LangProvider";

export function SetupNotice() {
  const { t } = useLang();
  return (
    <div className="app-frame min-h-app flex flex-col items-center justify-center px-6 text-center">
      <DatabaseZap className="h-14 w-14 text-indigo-300" aria-hidden />
      <h1 className="mt-5 text-2xl font-extrabold text-fg">{t("setupTitle")}</h1>
      <p className="mt-2 text-base leading-relaxed text-slate-300">{t("setupBody")}</p>
    </div>
  );
}
