"use client";

import Link from "next/link";
import { Utensils } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is RateMyBite?",
      answer:
        "RateMyBite is a platform for students to review and analyze university food outlets, helping you discover the best campus dining options.",
    },
    {
      question: "How do I post a review?",
      answer:
        "Simply sign up or log in, navigate to the reviews page, and fill out the review form to share your dining experience.",
    },
    {
      question: "How is the data collected?",
      answer:
        "All data is collected through user reviews which are then aggregated to provide data-driven insights about food quality, cost, and service.",
    },
    {
      question: "Can I filter reviews?",
      answer:
        "Yes! You can filter reviews by block, outlet, or other criteria on our platform for a more tailored experience.",
    },
    {
      question: "How do I contact support?",
      answer:
        "For any questions or concerns, please visit our Contact page or email support@ratemybite.com.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF3E0] text-[#212121]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-[#E63946]" />
            <span className="text-2xl font-bold text-[#E63946]">RateMyBite</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-[#264653] hover:text-[#E63946]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/review" className="text-[#264653] hover:text-[#E63946]">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="text-[#264653] hover:text-[#E63946]">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-[#264653] hover:text-[#E63946]">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main FAQ Section */}
      <main className="flex-grow container mx-auto p-8 max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-[#E63946]">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-all duration-300"
            >
              <summary className="text-2xl font-bold cursor-pointer text-[#E63946]">
                {faq.question}
              </summary>
              <p className="text-lg mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#264653] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">RateMyBite</h3>
              <p className="mx-auto max-w-xs">
                Your go-to platform for university food reviews and analytics.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="flex justify-center gap-4">
                <Link href="/aboutus" className="hover:text-[#FF9F1C]">
                  About Us
                </Link>
                <Link href="/faq" className="hover:text-[#FF9F1C]">
                  FAQs
                </Link>
                <Link href="/contactus" className="hover:text-[#FF9F1C]">
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="hover:text-[#FF9F1C]">
                  Facebook
                </a>
                <a href="#" className="hover:text-[#FF9F1C]">
                  Twitter
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/mind_bots/"
                  className="hover:text-[#FF9F1C]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 RateMyBite by @manasfied. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}