import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalPage page="cookies" intro="No advertising or tracking cookies. Only what the app needs to work." title="Cookie Policy" updated="October 2026">
      <section>
        <h2>Short version</h2>
        <p>
          ShareKori does not use advertising, analytics or tracking cookies, so there is no cookie banner to
          accept. We only store what the app needs to work.
        </p>
      </section>
      <section>
        <h2>What is stored on your device</h2>
        <ul>
          <li>
            <b>Sign-in session (essential):</b> Supabase keeps you signed in using your browser&apos;s local
            storage. Signing out removes it.
          </li>
          <li>
            <b>Preferences (essential):</b> your language, theme, last route, and the name and number you saved,
            kept in local storage.
          </li>
          <li>
            <b>Offline cache (essential):</b> a service worker caches the app shell so it opens with a weak
            connection.
          </li>
        </ul>
      </section>
      <section>
        <h2>Controlling it</h2>
        <p>
          You can clear this at any time in your browser&apos;s site settings. Doing so signs you out and resets
          your preferences. If we ever add analytics or other non-essential cookies, we will update this page
          and ask for your consent first.
        </p>
      </section>
      <ContactLine />
    </LegalPage>
  );
}
