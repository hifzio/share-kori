"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Languages, Moon, Sun, X } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import { useTheme } from "@/components/ThemeProvider";
import { LEGAL_PAGES } from "@/lib/legal";

function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex rounded-xl bg-line/5 p-1 ring-1 ring-line/10">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => value !== o.value && onChange(o.value)}
          className={`h-9 rounded-lg px-3.5 text-sm font-bold transition ${
            value === o.value ? "bg-indigo-600 text-white shadow" : "text-slate-400"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function MenuSheet({ onClose }: { onClose: () => void }) {
  const { t, lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[57] flex items-end justify-center sm:items-center sm:p-4">
      <button type="button" aria-label={t("close")} onClick={onClose} className="absolute inset-0 animate-fade-in bg-black/70" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
        className="relative sheet-frame max-h-[90dvh] animate-sheet-up overflow-y-auto rounded-t-[28px] border-t border-indigo-400/30 bg-zinc-950 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl sm:rounded-[28px] sm:border"
      >
        <div className="mx-auto h-1.5 w-12 rounded-full bg-line/20" aria-hidden />
        <div className="flex items-center justify-between pb-3 pt-3">
          <h2 id="menu-title" className="text-xl font-extrabold text-fg">
            {t("menu")}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("close")}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-slate-300 active:scale-95"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{t("settings")}</h3>
        <div className="divide-y divide-line/10 rounded-2xl border border-line/10 bg-zinc-900 px-4">
          <div className="flex min-h-[60px] items-center justify-between gap-3">
            <span className="flex items-center gap-3 text-sm font-bold text-fg">
              <Languages className="h-5 w-5 text-indigo-300" aria-hidden />
              {t("language")}
            </span>
            <Segmented
              label={t("language")}
              value={lang}
              onChange={toggleLang}
              options={[
                { value: "bn", label: "বাংলা" },
                { value: "en", label: "English" },
              ]}
            />
          </div>
          <div className="flex min-h-[60px] items-center justify-between gap-3">
            <span className="flex items-center gap-3 text-sm font-bold text-fg">
              {theme === "dark" ? <Moon className="h-5 w-5 text-indigo-300" aria-hidden /> : <Sun className="h-5 w-5 text-indigo-300" aria-hidden />}
              {t("appearance")}
            </span>
            <Segmented
              label={t("appearance")}
              value={theme}
              onChange={toggleTheme}
              options={[
                { value: "light", label: t("themeLight") },
                { value: "dark", label: t("themeDark") },
              ]}
            />
          </div>
        </div>

        <h3 className="mb-2 mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">{t("helpLegal")}</h3>
        <ul className="divide-y divide-line/10 overflow-hidden rounded-2xl border border-line/10 bg-zinc-900">
          {LEGAL_PAGES.map(({ key, href, icon: Icon, title, desc }) => (
            <li key={key}>
              <Link href={href} className="flex min-h-[60px] items-center gap-3 px-4 py-2.5 transition active:bg-zinc-800">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-400/15 text-indigo-300">
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-fg">{title}</span>
                  <span className="block truncate text-xs text-slate-400">{desc}</span>
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-center text-xs text-slate-600">{t("appName")} · {t("tagline")}</p>
      </div>
    </div>
  );
}
