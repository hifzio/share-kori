import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "FAQ" };

type Faq = { q: string; a: string };

const EN: Faq[] = [
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
  { q: "Is ShareKori free?", a: "Yes. Browsing is free and you sign in once to post or join a ride." },
  {
    q: "How do I delete my account and data?",
    a: "Contact us using the details below from the email you signed up with, and we will delete your account and data.",
  },
  {
    q: "Is it safe?",
    a: "Meet only at the public landmark, trust your judgement, and do not board if something feels wrong. See the Acceptable Use Policy for what we do not allow.",
  },
];

const BN: Faq[] = [
  {
    q: "ম্যাচিং কীভাবে কাজ করে?",
    a: "আপনার রুট বেছে নিয়ে কোনো ল্যান্ডমার্কে অপেক্ষা করছেন বলে পোস্ট করুন। একই দিকে যাচ্ছেন এমন কেউ আপনার পোস্টে যোগ দিতে পারেন। ম্যাচ হলে দুজনেই একে অপরের ফোন নম্বর দেখতে পান, যাতে ল্যান্ডমার্কে দেখা করতে পারেন।",
  },
  {
    q: "ভাড়া কীভাবে হিসাব করা হয়?",
    a: "হয় না। ShareKori ভাড়া নির্ধারণ বা সংগ্রহ করে না। রিকশায় ওঠার আগে অন্য ব্যক্তির সঙ্গে মোট ভাড়া ও ভাগাভাগি ঠিক করে নিন।",
  },
  {
    q: "আমার পোস্ট কতক্ষণ চালু থাকে?",
    a: "১৫ মিনিট। এরপর এটি মেয়াদোত্তীর্ণ হয়, তবে আপনার রাইড ইতিহাসে থাকে। চাইলে আগেই চলমান পোস্ট সরিয়ে নিতে পারেন।",
  },
  {
    q: "অন্য ব্যক্তি না এলে কী করব?",
    a: "ল্যান্ডমার্কে অল্প সময় অপেক্ষা করুন, তারপর ম্যাচ বাতিল করুন। ম্যাচের পর বাতিল প্রোফাইলে গণনা হয়, ফলে নির্ভরযোগ্য মানুষ আলাদা করে বোঝা যায়। না আসা বা অপব্যবহার নিচের যোগাযোগের মাধ্যমে জানাতে পারেন।",
  },
  {
    q: "আমার ফোন নম্বর কে দেখতে পায়?",
    a: "শুধু যার সঙ্গে ম্যাচ হয়েছে সেই একজন, এবং ম্যাচের পরেই। এটি আপনার প্রোফাইলে কখনো দেখা যায় না।",
  },
  { q: "ShareKori কি ফ্রি?", a: "হ্যাঁ। দেখা ফ্রি, আর রাইড পোস্ট বা যোগ দিতে একবার সাইন ইন করতে হয়।" },
  {
    q: "অ্যাকাউন্ট ও তথ্য কীভাবে মুছব?",
    a: "যে ইমেইল দিয়ে সাইন আপ করেছেন সেটি থেকে নিচের যোগাযোগের ঠিকানায় জানান, আমরা আপনার অ্যাকাউন্ট ও তথ্য মুছে দেব।",
  },
  {
    q: "এটি কি নিরাপদ?",
    a: "শুধু প্রকাশ্য ল্যান্ডমার্কে দেখা করুন, নিজের বিবেচনায় চলুন এবং কিছু ঠিক মনে না হলে রিকশায় উঠবেন না। কী কী অনুমোদিত নয় তা জানতে গ্রহণযোগ্য ব্যবহার নীতি দেখুন।",
  },
];

const list = (items: Faq[]) => (
  <>
    <section className="!p-0 divide-y divide-line/10 overflow-hidden">
      {items.map((f, i) => (
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
  </>
);

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: EN.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LegalPage
        page="faq"
        numbered={false}
        content={{
          en: { title: "Frequently Asked Questions", body: list(EN) },
          bn: { title: "সাধারণ প্রশ্ন", body: list(BN) },
        }}
      />
    </>
  );
}
