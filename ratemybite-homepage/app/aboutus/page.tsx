// app/aboutus/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - RateMyBite",
  description: "Learn more about RateMyBite and our mission.",
}

export default function AboutPage() {
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
                <a href="/reviews" className="text-[#264653] hover:text-[#E63946]">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/analytics" className="text-[#264653] hover:text-[#E63946]">
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
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
            <p className="text-xl mb-8 text-center">
              At RateMyBite, we believe that every meal is an opportunity to share your experience.
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
            <p>
              RateMyBite was created by <strong>Manas Chhabra</strong> (Lead Developer) in collaboration with Anumeha Singh(ui/ux), Ariv, Jashandeep, and Kajal. This platform is made for the students, by students, to provide a reliable and comprehensive resource for discovering and rating university food outlets.
            </p>
            <p>
              Our mission is to foster a community where every opinion counts and every voice is heard. Whether you're a student, a faculty member, or simply a food enthusiast, we invite you to join our community and help us elevate your campus dining experience—one review at a time.
            </p>
            <p>
              With a commitment to transparency and community engagement, RateMyBite is continuously evolving to deliver the most up-to-date and comprehensive reviews on campus dining options.
            </p>
            <p className="text-center font-bold mt-4">
              @manasfied
            </p>

            </div>
          </div>
        </section>
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
                <a href="/faq" className="hover:text-[#FF9F1C]">FAQs</a>
                <a href="/contactus" className="hover:text-[#FF9F1C]">Contact</a>
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
                  Linkedin
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
