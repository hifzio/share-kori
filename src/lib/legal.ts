import { CircleHelp, Cookie, FileText, Handshake, LifeBuoy, ShieldCheck } from "lucide-react";

/** Every help / legal page: one source for the in-app menu and the page footers. */
export const LEGAL_PAGES = [
  { key: "faq", href: "/faq", icon: CircleHelp, title: "FAQ", desc: "Quick answers about rides and matching" },
  { key: "contact", href: "/contact", icon: LifeBuoy, title: "Contact us", desc: "Support, reports and data requests" },
  { key: "terms", href: "/terms", icon: FileText, title: "Terms of Use", desc: "The rules for using ShareKori" },
  { key: "privacy", href: "/privacy", icon: ShieldCheck, title: "Privacy Policy", desc: "What we collect and who sees it" },
  { key: "aup", href: "/acceptable-use", icon: Handshake, title: "Acceptable Use", desc: "How to behave on the platform" },
  { key: "cookies", href: "/cookies", icon: Cookie, title: "Cookie Policy", desc: "What is stored on your device" },
] as const;

export type LegalKey = (typeof LEGAL_PAGES)[number]["key"];
