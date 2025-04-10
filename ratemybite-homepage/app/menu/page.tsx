'use client'

import Link from "next/link"
import { FaUtensils, FaStar } from "react-icons/fa"
import {
  Utensils,
} from "lucide-react"

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF6] text-[#212121]">

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Utensils className="h-8 w-8 text-[#E63946]" />
            <span className="text-2xl font-bold text-[#E63946]">RateMyBite</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-[#264653] hover:text-[#E63946]">Home</Link></li>
              <li><Link href="/review" className="text-[#264653] hover:text-[#E63946]">Reviews</Link></li>
              <li><Link href="/analysis" className="text-[#264653] hover:text-[#E63946]">Analytics</Link></li>
              <li><Link href="/login" className="text-[#264653] hover:text-[#E63946]">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sexy Menu Hero Section */}
      <main className="flex-grow px-6 py-16 bg-gradient-to-br from-[#FFFDF6] via-[#FAF3E0] to-[#F8E1D4]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] via-[#FF9F1C] to-[#F4A261]">
            Explore the Flavors 🍽️
          </h1>
          <p className="text-lg text-[#444] mt-4 max-w-2xl mx-auto">
            Dive into your campus’s favorite dishes — curated by students, reviewed with love.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: 'Paneer Tikka',
              description: 'Grilled paneer chunks served with mint chutney.',
              price: '₹120',
              badge: 'Student Fav',
            },
            {
              name: 'Veggie Burger',
              description: 'Lettuce, tomato, and crispy patty in a toasted bun.',
              price: '₹90',
              badge: 'Bestseller',
            },
            {
              name: 'Chole Bhature',
              description: 'Classic North Indian delight served hot.',
              price: '₹100',
            },
            {
              name: 'Peri-Peri Fries',
              description: 'Crispy fries tossed in spicy peri-peri masala.',
              price: '₹70',
            },
            {
              name: 'Cold Coffee',
              description: 'Creamy, chilled coffee with a strong espresso kick.',
              price: '₹60',
            },
            {
              name: 'Masala Maggie',
              description: 'Hostel favorite with extra masala tadka.',
              price: '₹50',
              badge: 'New!',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#EDEDED]"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-[#264653]">{item.name}</h2>
                {item.badge && (
                  <span className="bg-[#FF9F1C] text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#555]">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#E63946] font-bold text-lg">{item.price}</span>
                <span className="flex items-center gap-1 text-[#FFB703] text-sm">
                  <FaStar /> 4.{Math.floor(Math.random() * 3 + 5)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#264653] text-white py-10 mt-10">
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
                <Link href="/aboutus" className="hover:text-[#FF9F1C]">About Us</Link>
                <Link href="/faq" className="hover:text-[#FF9F1C]">FAQs</Link>
                <Link href="/contactus" className="hover:text-[#FF9F1C]">Contact</Link>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="hover:text-[#FF9F1C]">Facebook</a>
                <a href="#" className="hover:text-[#FF9F1C]">Twitter</a>
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
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2025 RateMyBite by @manasfied. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}