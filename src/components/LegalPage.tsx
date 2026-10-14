"use client";

import Link from "next/link";
import { ArrowLeft, ChevronRight, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { useLang } from "@/components/LangProvider";
import { LEGAL_PAGES } from "@/lib/legal";
import type { LegalKey } from "@/lib/legal";
import type { Lang } from "@/types";

export interface LegalContent {
  title: string;
  intro?: string;
  body: ReactNode;
}

interface LegalPageProps {
  page: LegalKey;
  /** English and Bengali versions; the reader's saved app language picks one. */
  content: Record<Lang, LegalContent>;
  /** Number each section card (policies yes, FAQ/contact no). */
  numbered?: boolean;
}

const UI = {
  en: { back: "Back to ShareKori", updated: "Last updated October 2026", more: "More help & legal", nav: "Related pages" },
  bn: { back: "ShareKori-তে ফিরুন", updated: "সর্বশেষ হালনাগাদ: অক্টোবর ২০২৬", more: "আরও সহায়তা ও আইনি", nav: "সম্পর্কিত পাতা" },
} as const;

const NUMBERED =
  "[&>section]:[counter-increment:sec] [&>section>h2]:flex [&>section>h2]:items-center [&>section>h2]:gap-3 " +
  "[&>section>h2]:before:content-[counter(sec)] [&>section>h2]:before:flex [&>section>h2]:before:h-7 [&>section>h2]:before:w-7 " +
  "[&>section>h2]:before:shrink-0 [&>section>h2]:before:items-center [&>section>h2]:before:justify-center " +
  "[&>section>h2]:before:rounded-lg [&>section>h2]:before:bg-indigo-400/15 [&>section>h2]:before:text-xs " +
  "[&>section>h2]:before:font-extrabold [&>section>h2]:before:text-indigo-300";

export function LegalPage({ page, content, numbered = true }: LegalPageProps) {
  const { lang, toggleLang } = useLang();
  const ui = UI[lang];
  const { title, intro, body } = content[lang];
  const Icon = LEGAL_PAGES.find((p) => p.key === page)!.icon;
  const related = LEGAL_PAGES.filter((p) => p.key !== page);
  return (
    <div className="app-frame min-h-app bg-zinc-950">
      <header className="sticky top-0 z-30 border-b border-line/10 bg-navy-950/85 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
        <div className="flex h-14 items-center justify-between gap-2 px-3">
          <Link
            href="/"
            className="inline-flex h-11 min-w-0 items-center gap-2 rounded-xl pr-3 text-sm font-bold text-fg transition active:bg-line/5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-line/5 ring-1 ring-line/10">
              <ArrowLeft className="h-[18px] w-[18px]" aria-hidden />
            </span>
            <span className="truncate">{ui.back}</span>
          </Link>
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language / ভাষা পরিবর্তন"
            className="flex h-10 shrink-0 items-center rounded-xl bg-line/5 px-3 text-sm font-bold text-fg ring-1 ring-line/10 transition active:scale-95"
          >
            {lang === "bn" ? "English" : "বাংলা"}
          </button>
        </div>
      </header>

      <main className="px-5 pb-16 pt-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-400/15 text-indigo-300 ring-1 ring-indigo-400/25">
            <Icon className="h-6 w-6" aria-hidden />
          </span>
          <div className="min-w-0">
            <h1 className="text-[28px] font-extrabold leading-tight tracking-tight text-fg">{title}</h1>
            <p className="mt-1 text-xs font-medium text-slate-500">{ui.updated}</p>
          </div>
        </div>
        {intro && (
          <p className="mt-4 rounded-2xl bg-emerald-400/10 p-4 text-[15px] leading-relaxed text-slate-200 ring-1 ring-emerald-400/20">
            {intro}
          </p>
        )}

        <div
          className={`mt-6 space-y-3 text-[15px] leading-relaxed text-slate-300 [counter-reset:sec]
            [&>section]:rounded-2xl [&>section]:border [&>section]:border-line/10 [&>section]:bg-zinc-900 [&>section]:p-5
            [&_h2]:mb-2 [&_h2]:text-[17px] [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-fg
            [&_b]:font-semibold [&_b]:text-fg
            [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_li]:marker:text-indigo-300 [&_li+li]:mt-1.5
            ${numbered ? NUMBERED : ""}`}
        >
          {body}
        </div>

        <nav aria-label={ui.nav} className="mt-10">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">{ui.more}</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {related.map(({ key, href, icon: I, ...tx }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="flex min-h-[60px] items-center gap-3 rounded-2xl border border-line/10 bg-zinc-900 px-4 py-3 transition active:scale-[0.98] active:bg-zinc-800"
                >
                  <I className="h-5 w-5 shrink-0 text-indigo-300" aria-hidden />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-fg">{tx[lang].title}</span>
                    <span className="block truncate text-xs text-slate-400">{tx[lang].desc}</span>
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mt-8 text-center text-xs text-slate-600">© {new Date().getFullYear()} ShareKori</p>
      </main>
    </div>
  );
}

export function ContactLine() {
  const { lang } = useLang();
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  if (!email) return null;
  return (
    <section>
      <h2>{lang === "bn" ? "যোগাযোগ" : "Contact"}</h2>
      <p>{lang === "bn" ? "প্রশ্ন, অভিযোগ বা ডেটা মুছে ফেলার অনুরোধ:" : "Questions, reports or deletion requests:"}</p>
      <a
        href={`mailto:${email}`}
        className="mt-3 inline-flex h-12 items-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-bold text-white transition active:scale-95"
      >
        <Mail className="h-4 w-4" aria-hidden />
        {email}
      </a>
    </section>
  );
}
