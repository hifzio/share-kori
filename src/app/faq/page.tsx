import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "FAQ" };

const FAQS: { q: string; a: string }[] = [
  {
    q: "How does matching work?",
    a: "Pick your route and post that you are waiting at a landmark. Someone else heading the same way can join your post. Once matched, you each see the other's phone number so you can meet at the landmark.",
  },
  {
    q: "How is the fare calculated?",
    a: "It is not. ShareKori does not set or collect fares. Agree the total rickshaw fare and how to split it with the other person before you board.",
  },
  {
    q: "How long does my post stay live?",
    a: "15 minutes. After that it expires, but it stays in your ride history. You can remove a live post earlier at any time.",
  },
  {
    q: "What if the other person does not show up?",
    a: "Wait at the landmark for a short while, then cancel the match. Cancellations after a match are counted on profiles, so reliable people stand out. You can report no-shows and misuse using the contact details below.",
  },
  {
    q: "Who can see my phone number?",
    a: "Only the one person you are matched with, and only after the match. It never appears on your profile.",
  },
  {
    q: "Is ShareKori free?",
    a: "Yes. Browsing is free and you sign in once to post or join a ride.",
  },
  {
    q: "How do I delete my account and data?",
    a: "Contact us using the details below from the email you signed up with, and we will delete your account and data.",
  },
  {
    q: "Is it safe?",
    a: "Meet only at the public landmark, trust your judgement, and do not board if something feels wrong. See the Acceptable Use Policy for what we do not allow.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <LegalPage page="faq" numbered={false} title="Frequently Asked Questions" updated="October 2026">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="!p-0 divide-y divide-line/10 overflow-hidden">
        {FAQS.map((f, i) => (
          <details key={f.q} open={i === 0} className="group">
            <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 text-[15px] font-bold text-fg [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-indigo-300 transition group-open:rotate-180" aria-hidden />
            </summary>
            <p className="px-5 pb-4 text-slate-300">{f.a}</p>
          </details>
        ))}
      </section>
      <ContactLine />
    </LegalPage>
  );
}
