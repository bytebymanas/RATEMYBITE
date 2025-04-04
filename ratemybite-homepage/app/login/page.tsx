// app/login/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - RateMyBite",
  description: "Login to RateMyBite",
}

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF3E0] text-[#212121]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Replace with your actual logo if available */}
            <img src="/logo.svg" alt="RateMyBite Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-[#E63946]">RateMyBite</span>
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
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF9F1C] text-white py-2 rounded hover:bg-[#E63946] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#264653] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center">
            {/* Brand Section */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-xl font-bold mb-4">RateMyBite</h3>
              <p className="mx-auto max-w-xs">
                Your go-to platform for university food reviews and analytics.
              </p>
            </div>
            {/* Quick Links */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="flex justify-center gap-4">
                <a href="/" className="hover:text-[#FF9F1C]">Home</a>
                <a href="/faqs" className="hover:text-[#FF9F1C]">FAQs</a>
                <a href="/contact" className="hover:text-[#FF9F1C]">Contact</a>
              </div>
            </div>
            {/* Connect With Us */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9F1C]"
                >
                  Facebook
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF9F1C]"
                >
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com"
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
            <p>&copy; 2025 RateMyBite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
