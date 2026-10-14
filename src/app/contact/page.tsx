import type { Metadata } from "next";
import { Bug, Flag, Mail, ShieldQuestion, Trash2 } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Contact Us" };

const ICONS = [Bug, Flag, ShieldQuestion, Trash2];

const COPY = {
  en: {
    title: "Contact Us",
    intro: "We read every message. Tell us what happened and we will get back to you by email.",
    help: "What can we help with?",
    topics: [
      ["Technical problem", "Something is broken or confusing"],
      ["Report a user or post", "No-shows, harassment, misuse"],
      ["Privacy question", "How your data is used"],
      ["Delete my data", "Remove your account and data"],
    ],
    email: "Email us",
    unset: "Contact details are not configured yet.",
    note: "Include the email you signed in with and, if relevant, the route and time of the ride. Never send passwords or sign-in codes.",
  },
  bn: {
    title: "যোগাযোগ",
    intro: "আমরা প্রতিটি বার্তা পড়ি। কী হয়েছে জানান, আমরা ইমেইলে উত্তর দেব।",
    help: "আমরা কীভাবে সাহায্য করতে পারি?",
    topics: [
      ["কারিগরি সমস্যা", "কিছু কাজ করছে না বা বিভ্রান্তিকর"],
      ["ব্যবহারকারী বা পোস্ট রিপোর্ট", "না আসা, হয়রানি, অপব্যবহার"],
      ["গোপনীয়তা প্রশ্ন", "আপনার তথ্য কীভাবে ব্যবহৃত হয়"],
      ["আমার তথ্য মুছুন", "অ্যাকাউন্ট ও তথ্য সরিয়ে ফেলুন"],
    ],
    email: "ইমেইল করুন",
    unset: "যোগাযোগের তথ্য এখনো সেট করা হয়নি।",
    note: "যে ইমেইল দিয়ে সাইন ইন করেছেন সেটি এবং প্রযোজ্য হলে রাইডের রুট ও সময় লিখুন। পাসওয়ার্ড বা সাইন-ইন কোড কখনো পাঠাবেন না।",
  },
} as const;

function body(c: (typeof COPY)[keyof typeof COPY]) {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <>
      <section>
        <h2>{c.help}</h2>
        <ul className="!mt-3 grid list-none gap-2 sm:grid-cols-2">
          {c.topics.map(([title, desc], i) => {
            const I = ICONS[i];
            return (
              <li key={title} className="!ml-0 flex list-none items-start gap-3 rounded-xl bg-line/5 p-3">
                <I className="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" aria-hidden />
                <span>
                  <span className="block text-sm font-bold text-fg">{title}</span>
                  <span className="block text-xs text-slate-400">{desc}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2>{c.email}</h2>
        {email ? (
          <a
            href={`mailto:${email}`}
            className="mt-1 flex h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-base font-extrabold text-white transition active:scale-[0.98]"
          >
            <Mail className="h-5 w-5" aria-hidden />
            {email}
          </a>
        ) : (
          <p>{c.unset}</p>
        )}
        <p className="mt-3 text-sm text-slate-400">{c.note}</p>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <LegalPage
      page="contact"
      numbered={false}
      content={{
        en: { title: COPY.en.title, intro: COPY.en.intro, body: body(COPY.en) },
        bn: { title: COPY.bn.title, intro: COPY.bn.intro, body: body(COPY.bn) },
      }}
    />
  );
}
