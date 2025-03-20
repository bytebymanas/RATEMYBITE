"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([{ sender: "bot", text: "Hello! How can I help you today?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    // For demo, bot responds with a default reply.
    const botReply = {
      sender: "bot",
      text: "Thanks for reaching out. We'll get back to you shortly!",
    };
    // Explicitly type the updater function parameter.
    setMessages(
      (prev: { sender: "user" | "bot"; text: string }[]) => [
        ...prev,
        userMessage,
        botReply,
      ]
    );
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#212121]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="RateMyBite Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold" style={{ color: "#E63946" }}>
              RateMyBite
            </span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-[#264653] hover:text-[#E63946]">
                  Home
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-[#264653] hover:text-[#E63946]">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/analysis" className="text-[#264653] hover:text-[#E63946]">
                  Analytics
                </a>
              </li>
              <li>
                <a href="/login" className="text-[#264653] hover:text-[#E63946]">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-8 max-w-4xl">
        <h1
          className="text-5xl font-extrabold text-center mb-6"
          style={{ color: "#E63946" }}
        >
          Contact Us
        </h1>
        <p className="text-center text-lg mb-8">
          Have a query or feedback? Chat with us below!
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Chatbot UI */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 border border-gray-200 rounded p-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-3 ${
                    msg.sender === "bot"
                      ? "text-blue-600 text-left"
                      : "text-gray-800 text-right"
                  }`}
                >
                  <span className="inline-block bg-gray-100 px-3 py-2 rounded">
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] transition"
              />
              <button
                onClick={handleSend}
                className="bg-[#FF9F1C] text-white px-4 py-2 rounded-r hover:bg-[#E63946] transition transform hover:scale-105"
              >
                Send
              </button>
            </div>
          </div>

          {/* Chatbot Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/chatbot.png" // Ensure this file is in your public folder (public/chatbot.png)
              alt="Chatbot Illustration"
              className="max-w-full rounded shadow-lg"
            />
          </div>
        </div>

        {/* Ribbon placed below main content */}
        <div className="bg-[#FF9F1C] text-white py-2 mt-8">
          <div className="container mx-auto text-center text-lg font-semibold">
            Contact & Support
          </div>
        </div>
      </div>

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
                <a href="/aboutus" className="hover:text-[#FF9F1C]">
                  About Us
                </a>
                <a href="/faq" className="hover:text-[#FF9F1C]">
                  FAQs
                </a>
                <a href="/contactus" className="hover:text-[#FF9F1C]">
                  Contact
                </a>
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
                  href="https://www.instagram.com/mind_bots/"
                  target="_blank"
                  rel="noopener noreferrer"
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
