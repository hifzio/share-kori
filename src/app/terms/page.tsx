import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalPage
      page="terms"
      content={{
        en: {
          title: "Terms of Use",
          intro:
            "The short version: ShareKori only helps you find someone to share a rickshaw with. Everything after that is between you and them.",
          body: (
            <>
              <section>
                <h2>The service</h2>
                <p>
                  ShareKori is a matching tool. We do not provide rickshaws, set fares, or take part in rides. Any
                  arrangement you make with another commuter is between you and them.
                </p>
              </section>
              <section>
                <h2>Your responsibilities</h2>
                <ul>
                  <li>Give accurate information and use only a photo of a landmark, shop sign or yourself.</li>
                  <li>Agree on the total rickshaw fare with the other person before boarding.</li>
                  <li>Be respectful. Do not harass, impersonate or spam other people.</li>
                  <li>Use your own judgement about safety and meet only at the public landmark you posted.</li>
                </ul>
              </section>
              <section>
                <h2>Content and accounts</h2>
                <p>
                  You are responsible for what you post. We may remove posts or accounts that break these terms or put
                  others at risk.
                </p>
              </section>
              <section>
                <h2>No guarantees</h2>
                <p>
                  The service is provided as is. We cannot guarantee that someone will be waiting, that a match will
                  happen, or the conduct of any user, and we are not liable for losses arising from rides you arrange.
                </p>
              </section>
              <ContactLine />
            </>
          ),
        },
        bn: {
          title: "ব্যবহারের শর্তাবলি",
          intro:
            "সংক্ষেপে: ShareKori শুধু রিকশা শেয়ার করার সঙ্গী খুঁজে পেতে সাহায্য করে। এরপর যা কিছু হয়, তা আপনার ও অন্য ব্যক্তির মধ্যকার বিষয়।",
          body: (
            <>
              <section>
                <h2>সেবা</h2>
                <p>
                  ShareKori একটি ম্যাচিং টুল। আমরা রিকশা সরবরাহ করি না, ভাড়া নির্ধারণ করি না এবং কোনো রাইডে অংশ নিই না।
                  অন্য যাত্রীর সঙ্গে আপনার যেকোনো সমঝোতা আপনাদের দুজনের মধ্যেই সীমাবদ্ধ।
                </p>
              </section>
              <section>
                <h2>আপনার দায়িত্ব</h2>
                <ul>
                  <li>সঠিক তথ্য দিন এবং শুধু কোনো ল্যান্ডমার্ক, দোকানের সাইনবোর্ড বা নিজের ছবি ব্যবহার করুন।</li>
                  <li>রিকশায় ওঠার আগে অন্য ব্যক্তির সঙ্গে মোট ভাড়া ঠিক করে নিন।</li>
                  <li>ভদ্র আচরণ করুন। অন্যকে হয়রানি, ছদ্মবেশ ধারণ বা স্প্যাম করবেন না।</li>
                  <li>নিরাপত্তার ব্যাপারে নিজের বিবেচনা ব্যবহার করুন এবং শুধু আপনার পোস্ট করা প্রকাশ্য ল্যান্ডমার্কে দেখা করুন।</li>
                </ul>
              </section>
              <section>
                <h2>কনটেন্ট ও অ্যাকাউন্ট</h2>
                <p>
                  আপনি যা পোস্ট করেন তার দায় আপনার। এই শর্ত ভঙ্গ করলে বা অন্যদের ঝুঁকিতে ফেললে আমরা পোস্ট বা অ্যাকাউন্ট
                  সরিয়ে দিতে পারি।
                </p>
              </section>
              <section>
                <h2>কোনো নিশ্চয়তা নেই</h2>
                <p>
                  সেবাটি &quot;যেমন আছে তেমন&quot; ভিত্তিতে দেওয়া হয়। কেউ অপেক্ষায় থাকবে, ম্যাচ হবে বা কোনো ব্যবহারকারী কেমন
                  আচরণ করবে—এসবের নিশ্চয়তা আমরা দিতে পারি না। আপনার ব্যবস্থা করা রাইড থেকে সৃষ্ট কোনো ক্ষতির জন্য আমরা দায়ী নই।
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
