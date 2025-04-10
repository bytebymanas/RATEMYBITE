"use client";

import { useState } from "react";

export default function AnalysisPage() {
  const [block, setBlock] = useState("");
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      let url = "http://127.0.0.1:8000/analysis_detailed";
      if (block) {
        url += "?block=" + encodeURIComponent(block);
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      setImgUrl(objectUrl);
    } catch (error) {
      console.error("Error fetching analysis:", error);
      alert("Error fetching analysis. Check console for details.");
    }
  };

  const blockOptions = ["", "Block A", "Block B", "Block C"];

  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#212121] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils h-8 w-8 text-[#E63946]"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
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
                <a href="/review" className="text-[#264653] hover:text-[#E63946]">
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
      <main className="container mx-auto p-8 max-w-4xl flex-grow">
        <h1
          className="text-5xl font-extrabold text-center mb-8"
          style={{ color: "#E63946" }}
        >
          Detailed Analysis
        </h1>
        <div className="flex flex-row items-end justify-center gap-4 mb-8">
          <div className="flex flex-col">
            <label className="font-semibold mb-2 block">
              Select Block (optional):
            </label>
            <select
              value={block}
              onChange={(e) => setBlock(e.target.value)}
              className="border border-[#264653] rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-[#FF9F1C] transition"
            >
              {blockOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option === "" ? "All Blocks" : option}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleClick}
            className="bg-[#FF9F1C] text-white rounded-lg px-8 py-3 shadow-lg transform transition hover:scale-105 hover:bg-[#E63946]"
          >
            Get Analysis
          </button>
        </div>

        {imgUrl && (
          <div className="flex justify-center">
            <img
              src={imgUrl}
              alt="Analysis Chart"
              className="rounded-lg shadow-2xl"
            />
          </div>
        )}
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
