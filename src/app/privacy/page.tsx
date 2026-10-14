import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      page="privacy"
      content={{
        en: {
          title: "Privacy Policy",
          intro:
            "Your phone number is shown only to the one person you match with. We do not sell your data or run ad trackers.",
          body: (
            <>
              <section>
                <h2>What ShareKori does</h2>
                <p>
                  ShareKori helps commuters in Dhaka find someone to share a rickshaw with at fixed landmarks. To make
                  that work, some information is shared with other commuters.
                </p>
              </section>
              <section>
                <h2>What we collect</h2>
                <ul>
                  <li><b>Account:</b> your email address, and your name and profile picture if you sign in with Google.</li>
                  <li><b>Ride posts:</b> your name, the standing note you write, your route and the photo you upload.</li>
                  <li><b>Phone number:</b> the mobile number you enter when you post or share a ride.</li>
                  <li><b>Activity:</b> the rides you post or join, so we can show your history and basic profile statistics.</li>
                  <li><b>On your device:</b> your language, theme, last route and saved name/number are stored in your browser only.</li>
                </ul>
              </section>
              <section>
                <h2>Who can see what</h2>
                <ul>
                  <li><b>Everyone</b> viewing a route can see the name, photo and standing note of people currently waiting there. Only upload a photo you are comfortable showing publicly.</li>
                  <li><b>Your phone number</b> is shown only to the one person you are matched with, and only after the match.</li>
                  <li><b>Profiles</b> show your name, photo, number of shared rides and the month you joined. They never show your phone number or email.</li>
                </ul>
              </section>
              <section>
                <h2>How it is stored</h2>
                <p>
                  Data is stored with Supabase (database, file storage and sign-in). Posts are marked expired after 15
                  minutes but stay in your ride history. We do not sell your data and we do not run advertising or
                  analytics trackers.
                </p>
              </section>
              <section>
                <h2>Your choices</h2>
                <p>
                  You can remove a live post at any time. To delete your account and data, contact us using the details
                  below.
                </p>
              </section>
              <ContactLine />
            </>
          ),
        },
        bn: {
          title: "গোপনীয়তা নীতি",
          intro:
            "আপনার ফোন নম্বর শুধু যার সঙ্গে ম্যাচ হয়েছে সেই একজনকে দেখানো হয়। আমরা আপনার তথ্য বিক্রি করি না, বিজ্ঞাপন ট্র্যাকারও চালাই না।",
          body: (
            <>
              <section>
                <h2>ShareKori কী করে</h2>
                <p>
                  ShareKori ঢাকার যাত্রীদের নির্দিষ্ট ল্যান্ডমার্কে রিকশা শেয়ার করার সঙ্গী খুঁজে পেতে সাহায্য করে। এটি কাজ করার জন্য
                  কিছু তথ্য অন্য যাত্রীদের সঙ্গে ভাগ করা হয়।
                </p>
              </section>
              <section>
                <h2>আমরা যা সংগ্রহ করি</h2>
                <ul>
                  <li><b>অ্যাকাউন্ট:</b> আপনার ইমেইল ঠিকানা এবং গুগল দিয়ে সাইন ইন করলে আপনার নাম ও প্রোফাইল ছবি।</li>
                  <li><b>রাইড পোস্ট:</b> আপনার নাম, আপনার লেখা স্থায়ী নোট, রুট এবং আপলোড করা ছবি।</li>
                  <li><b>ফোন নম্বর:</b> রাইড পোস্ট বা শেয়ার করার সময় আপনি যে মোবাইল নম্বর দেন।</li>
                  <li><b>কার্যকলাপ:</b> আপনার পোস্ট করা বা যোগ দেওয়া রাইড, যাতে ইতিহাস ও প্রোফাইলের মৌলিক পরিসংখ্যান দেখানো যায়।</li>
                  <li><b>আপনার ডিভাইসে:</b> ভাষা, থিম, শেষ রুট এবং সেভ করা নাম/নম্বর শুধু আপনার ব্রাউজারে থাকে।</li>
                </ul>
              </section>
              <section>
                <h2>কে কী দেখতে পারে</h2>
                <ul>
                  <li><b>সবাই</b> যারা কোনো রুট দেখছে, তারা সেখানে অপেক্ষারত ব্যক্তিদের নাম, ছবি ও স্থায়ী নোট দেখতে পায়। শুধু এমন ছবি আপলোড করুন যা প্রকাশ্যে দেখাতে আপনি স্বচ্ছন্দ।</li>
                  <li><b>আপনার ফোন নম্বর</b> শুধু যার সঙ্গে ম্যাচ হয়েছে সেই একজনকে, এবং ম্যাচের পরেই দেখানো হয়।</li>
                  <li><b>প্রোফাইলে</b> আপনার নাম, ছবি, শেয়ার করা রাইডের সংখ্যা এবং যে মাসে যোগ দিয়েছেন তা দেখায়। ফোন নম্বর বা ইমেইল কখনো দেখায় না।</li>
                </ul>
              </section>
              <section>
                <h2>কীভাবে সংরক্ষিত হয়</h2>
                <p>
                  তথ্য Supabase-এ (ডেটাবেস, ফাইল স্টোরেজ ও সাইন-ইন) সংরক্ষিত হয়। পোস্ট ১৫ মিনিট পর মেয়াদোত্তীর্ণ হয়, তবে আপনার
                  রাইড ইতিহাসে থেকে যায়। আমরা তথ্য বিক্রি করি না এবং বিজ্ঞাপন বা অ্যানালিটিক্স ট্র্যাকার চালাই না।
                </p>
              </section>
              <section>
                <h2>আপনার পছন্দ</h2>
                <p>
                  যেকোনো সময় আপনার চলমান পোস্ট সরিয়ে নিতে পারেন। অ্যাকাউন্ট ও তথ্য মুছতে নিচের যোগাযোগের ঠিকানায় জানান।
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
