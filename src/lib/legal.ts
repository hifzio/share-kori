import { CircleHelp, Cookie, FileText, Handshake, LifeBuoy, ShieldCheck } from "lucide-react";

/** Every help / legal page: one source for the in-app menu and the page footers. */
export const LEGAL_PAGES = [
  {
    key: "faq", href: "/faq", icon: CircleHelp,
    en: { title: "FAQ", desc: "Quick answers about rides and matching" },
    bn: { title: "সাধারণ প্রশ্ন", desc: "রাইড ও ম্যাচিং নিয়ে দ্রুত উত্তর" },
  },
  {
    key: "contact", href: "/contact", icon: LifeBuoy,
    en: { title: "Contact us", desc: "Support, reports and data requests" },
    bn: { title: "যোগাযোগ", desc: "সহায়তা, অভিযোগ ও ডেটা অনুরোধ" },
  },
  {
    key: "terms", href: "/terms", icon: FileText,
    en: { title: "Terms of Use", desc: "The rules for using ShareKori" },
    bn: { title: "ব্যবহারের শর্তাবলি", desc: "ShareKori ব্যবহারের নিয়ম" },
  },
  {
    key: "privacy", href: "/privacy", icon: ShieldCheck,
    en: { title: "Privacy Policy", desc: "What we collect and who sees it" },
    bn: { title: "গোপনীয়তা নীতি", desc: "আমরা কী সংগ্রহ করি ও কে দেখতে পারে" },
  },
  {
    key: "aup", href: "/acceptable-use", icon: Handshake,
    en: { title: "Acceptable Use", desc: "How to behave on the platform" },
    bn: { title: "গ্রহণযোগ্য ব্যবহার", desc: "প্ল্যাটফর্মে আচরণবিধি" },
  },
  {
    key: "cookies", href: "/cookies", icon: Cookie,
    en: { title: "Cookie Policy", desc: "What is stored on your device" },
    bn: { title: "কুকি নীতি", desc: "আপনার ডিভাইসে কী সংরক্ষিত হয়" },
  },
] as const;

export type LegalKey = (typeof LEGAL_PAGES)[number]["key"];
