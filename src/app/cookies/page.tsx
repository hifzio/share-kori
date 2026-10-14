import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalPage
      page="cookies"
      content={{
        en: {
          title: "Cookie Policy",
          intro: "No advertising or tracking cookies. Only what the app needs to work.",
          body: (
            <>
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
                  <li><b>Sign-in session (essential):</b> Supabase keeps you signed in using your browser&apos;s local storage. Signing out removes it.</li>
                  <li><b>Preferences (essential):</b> your language, theme, last route, and the name and number you saved, kept in local storage.</li>
                  <li><b>Offline cache (essential):</b> a service worker caches the app shell so it opens with a weak connection.</li>
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
            </>
          ),
        },
        bn: {
          title: "কুকি নীতি",
          intro: "কোনো বিজ্ঞাপন বা ট্র্যাকিং কুকি নেই। শুধু অ্যাপ চালাতে যা দরকার তা-ই।",
          body: (
            <>
              <section>
                <h2>সংক্ষেপে</h2>
                <p>
                  ShareKori বিজ্ঞাপন, অ্যানালিটিক্স বা ট্র্যাকিং কুকি ব্যবহার করে না, তাই গ্রহণ করার মতো কোনো কুকি ব্যানার নেই। অ্যাপ
                  চালাতে যা দরকার, শুধু তা-ই সংরক্ষণ করি।
                </p>
              </section>
              <section>
                <h2>আপনার ডিভাইসে কী সংরক্ষিত হয়</h2>
                <ul>
                  <li><b>সাইন-ইন সেশন (অত্যাবশ্যক):</b> Supabase আপনার ব্রাউজারের লোকাল স্টোরেজ ব্যবহার করে আপনাকে সাইন ইন রাখে। সাইন আউট করলে তা মুছে যায়।</li>
                  <li><b>পছন্দ (অত্যাবশ্যক):</b> আপনার ভাষা, থিম, শেষ রুট এবং সেভ করা নাম ও নম্বর লোকাল স্টোরেজে থাকে।</li>
                  <li><b>অফলাইন ক্যাশ (অত্যাবশ্যক):</b> সার্ভিস ওয়ার্কার অ্যাপের কাঠামো ক্যাশ করে, যাতে দুর্বল নেটওয়ার্কেও অ্যাপ খোলে।</li>
                </ul>
              </section>
              <section>
                <h2>নিয়ন্ত্রণ</h2>
                <p>
                  ব্রাউজারের সাইট সেটিংসে গিয়ে যেকোনো সময় এগুলো মুছতে পারেন। এতে আপনি সাইন আউট হবেন এবং পছন্দগুলো রিসেট হবে।
                  ভবিষ্যতে অ্যানালিটিক্স বা অন্য অপ্রয়োজনীয় কুকি যোগ করলে আমরা এই পাতা হালনাগাদ করব এবং আগে আপনার সম্মতি চাইব।
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
