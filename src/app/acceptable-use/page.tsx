import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Acceptable Use Policy" };

export default function AcceptableUsePage() {
  return (
    <LegalPage page="aup" intro="Be respectful, be honest, and use ShareKori only to share rickshaw rides." title="Acceptable Use Policy" updated="October 2026">
      <section>
        <h2>Why this exists</h2>
        <p>
          ShareKori connects real people who then meet in person. These rules keep it safe and useful for
          everyone. They form part of our Terms of Use.
        </p>
      </section>
      <section>
        <h2>You must not</h2>
        <ul>
          <li>Harass, threaten, stalk, discriminate against or pressure another person.</li>
          <li>Impersonate someone else or post a photo of a person who has not agreed to it.</li>
          <li>Post offensive, sexual, violent or illegal content, including in your standing note or photo.</li>
          <li>Use ShareKori for anything other than finding a person to share a rickshaw with, such as selling, advertising or recruiting.</li>
          <li>Post fake or repeated rides, or claim rides you do not intend to take.</li>
          <li>Collect, copy or share other users&apos; information, including phone numbers, outside the ride.</li>
          <li>Contact a matched person for any reason other than the ride.</li>
          <li>Use bots, scrapers or anything that interferes with or overloads the service.</li>
        </ul>
      </section>
      <section>
        <h2>Safety</h2>
        <ul>
          <li>Meet only at the public landmark you posted.</li>
          <li>If you feel unsafe, do not board. Cancel the match and contact local emergency services if needed.</li>
        </ul>
      </section>
      <section>
        <h2>Enforcement</h2>
        <p>
          We may remove posts, suspend or delete accounts, and, where the law requires, share information with
          the authorities. Repeated no-shows and cancellations after a match are visible on your profile.
          To report a user or post, contact us below.
        </p>
      </section>
      <ContactLine />
    </LegalPage>
  );
}
