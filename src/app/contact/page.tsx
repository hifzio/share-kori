import type { Metadata } from "next";
import { Bug, Flag, Mail, ShieldQuestion, Trash2 } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Contact Us" };

const TOPICS = [
  { icon: Bug, title: "Technical problem", desc: "Something is broken or confusing" },
  { icon: Flag, title: "Report a user or post", desc: "No-shows, harassment, misuse" },
  { icon: ShieldQuestion, title: "Privacy question", desc: "How your data is used" },
  { icon: Trash2, title: "Delete my data", desc: "Remove your account and data" },
];

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <LegalPage
      page="contact"
      numbered={false}
      intro="We read every message. Tell us what happened and we will get back to you by email."
      title="Contact Us"
      updated="October 2026"
    >
      <section>
        <h2>What can we help with?</h2>
        <ul className="!mt-3 grid list-none gap-2 sm:grid-cols-2">
          {TOPICS.map(({ icon: I, title, desc }) => (
            <li key={title} className="!ml-0 flex list-none items-start gap-3 rounded-xl bg-line/5 p-3">
              <I className="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" aria-hidden />
              <span>
                <span className="block text-sm font-bold text-fg">{title}</span>
                <span className="block text-xs text-slate-400">{desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Email us</h2>
        {email ? (
          <a
            href={`mailto:${email}`}
            className="mt-1 flex h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 text-base font-extrabold text-white transition active:scale-[0.98]"
          >
            <Mail className="h-5 w-5" aria-hidden />
            {email}
          </a>
        ) : (
          <p>Contact details are not configured yet.</p>
        )}
        <p className="mt-3 text-sm text-slate-400">
          Include the email you signed in with and, if relevant, the route and time of the ride. Never send
          passwords or sign-in codes.
        </p>
      </section>
    </LegalPage>
  );
}
