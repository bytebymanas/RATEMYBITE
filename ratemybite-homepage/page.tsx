// app/page.tsx (or wherever your HomePage is defined)
import Link from "next/link"
import { Star, Clock, DollarSign, Users, Utensils, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
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
                <a href="#" className="text-[#264653] hover:text-[#E63946]">
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
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#E63946] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Food, Your Voice</h1>
            <p className="text-xl mb-8">Discover, rate, and analyze your university's food scene</p>

            <a
              href="https://forms.gle/YHR5W4osbPGhyz8q6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#FF9F1C] text-white hover:bg-[#E63946] transition-colors">
                Start Rating Now
              </Button>
            </a>
          </div>
        </section>

        {/* Top Rated Outlets */}
        <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Top Rated Outlets</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Catch Up (Boys Hostel)",
          subTitle: "Student Favorite",
          rating: "4.8",
          waitTime: "10-15 min",
          price: "$",
          extra: "Known for their exotic pasta range."
        },
        {
          title: "Chai Prantha",
          subTitle: "Local Sensation",
          rating: "4.6",
          waitTime: "12-18 min",
          price: "$",
          extra: "Known for their spicy, iconic Chole Bhature."
        },
        {
          title: "Chai Nagri",
          subTitle: "Innovative & Trendy",
          rating: "4.9",
          waitTime: "8-12 min",
          price: "$",
          extra: "Known for there peri-peri fries"
        }
      ].map((outlet, index) => (
        <Card key={index} className="bg-white">
          <CardHeader>
            <CardTitle>{outlet.title}</CardTitle>
            <CardDescription>{outlet.subTitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="flex items-center">
                <Star className="h-5 w-5 text-[#FF9F1C] mr-1" />
                {outlet.rating}
              </span>
              <span className="flex items-center">
                <Clock className="h-5 w-5 text-[#4CAF50] mr-1" />
                {outlet.waitTime}
              </span>
              <span className="flex items-center">
                <DollarSign className="h-5 w-5 text-[#264653] mr-1" />
                {outlet.price}
              </span>
            </div>
            <p className="text-sm">{outlet.extra}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Menu
            </Button>
          </CardFooter>
        </Card>
      ))}
        </div>
      </div>
    </section>


        {/* Quick Review Form */}
        <section className="bg-[#264653] py-16 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Review</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="Outlet Name" className="w-full" />
              </div>
              <div className="mb-4">
                <Input type="number" placeholder="Rating (1-5)" min="1" max="5" className="w-full" />
              </div>
              <div className="mb-4">
                <Input type="text" placeholder="Quick Comment" className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-[#FF9F1C] hover:bg-[#E63946] transition-colors">
                Submit Review
              </Button>
            </form>
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why RateMyBite?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Star, title: "Honest Reviews", description: "Get authentic feedback from fellow students" },
                { icon: Users, title: "Community Driven", description: "Join a vibrant food-loving university community" },
                { icon: ChevronRight, title: "Data Insights", description: "Access detailed analytics on campus food trends" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-[#E63946] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
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
  )
}
