import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Acceptable Use Policy" };

export default function AcceptableUsePage() {
  return (
    <LegalPage
      page="aup"
      content={{
        en: {
          title: "Acceptable Use Policy",
          intro: "Be respectful, be honest, and use ShareKori only to share rickshaw rides.",
          body: (
            <>
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
                  the authorities. Repeated no-shows and cancellations after a match are visible on your profile. To
                  report a user or post, contact us below.
                </p>
              </section>
              <ContactLine />
            </>
          ),
        },
        bn: {
          title: "গ্রহণযোগ্য ব্যবহার নীতি",
          intro: "ভদ্র ও সৎ থাকুন, এবং ShareKori শুধু রিকশা শেয়ার করার কাজে ব্যবহার করুন।",
          body: (
            <>
              <section>
                <h2>কেন এই নীতি</h2>
                <p>
                  ShareKori বাস্তব মানুষদের যুক্ত করে, যারা পরে সামনাসামনি দেখা করে। এই নিয়মগুলো সবার জন্য একে নিরাপদ ও কার্যকর
                  রাখে। এগুলো আমাদের ব্যবহারের শর্তাবলির অংশ।
                </p>
              </section>
              <section>
                <h2>আপনি যা করতে পারবেন না</h2>
                <ul>
                  <li>অন্য কাউকে হয়রানি, হুমকি, অনুসরণ, বৈষম্য বা চাপ দেওয়া।</li>
                  <li>অন্যের পরিচয়ে নিজেকে উপস্থাপন করা বা সম্মতি ছাড়া কারও ছবি পোস্ট করা।</li>
                  <li>আপত্তিকর, যৌন, সহিংস বা অবৈধ কনটেন্ট পোস্ট করা, স্থায়ী নোট বা ছবিতেও।</li>
                  <li>রিকশা শেয়ারের সঙ্গী খোঁজা ছাড়া অন্য কাজে ব্যবহার করা, যেমন বিক্রি, বিজ্ঞাপন বা লোক নিয়োগ।</li>
                  <li>ভুয়া বা বারবার রাইড পোস্ট করা, অথবা যে রাইডে যাবেন না তা দাবি করা।</li>
                  <li>রাইডের বাইরে অন্য ব্যবহারকারীর তথ্য, ফোন নম্বরসহ, সংগ্রহ, কপি বা শেয়ার করা।</li>
                  <li>রাইড ছাড়া অন্য কারণে ম্যাচ হওয়া ব্যক্তির সঙ্গে যোগাযোগ করা।</li>
                  <li>বট, স্ক্র্যাপার বা সেবায় বিঘ্ন সৃষ্টি বা অতিরিক্ত চাপ দেয় এমন কিছু ব্যবহার করা।</li>
                </ul>
              </section>
              <section>
                <h2>নিরাপত্তা</h2>
                <ul>
                  <li>শুধু আপনার পোস্ট করা প্রকাশ্য ল্যান্ডমার্কে দেখা করুন।</li>
                  <li>অনিরাপদ মনে হলে রিকশায় উঠবেন না। ম্যাচ বাতিল করুন এবং প্রয়োজনে স্থানীয় জরুরি সেবায় যোগাযোগ করুন।</li>
                </ul>
              </section>
              <section>
                <h2>প্রয়োগ</h2>
                <p>
                  আমরা পোস্ট সরাতে, অ্যাকাউন্ট স্থগিত বা মুছে দিতে পারি এবং আইন অনুযায়ী প্রয়োজন হলে কর্তৃপক্ষকে তথ্য দিতে পারি।
                  ম্যাচের পর বারবার না আসা ও বাতিল করা আপনার প্রোফাইলে দেখা যায়। কোনো ব্যবহারকারী বা পোস্ট রিপোর্ট করতে নিচে
                  যোগাযোগ করুন।
                </p>
              </section>
              <ContactLine />
            </>
          ),
        },
      }}
    />
  );
}
