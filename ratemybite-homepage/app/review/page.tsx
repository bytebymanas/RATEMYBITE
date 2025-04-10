"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Review {
  timestamp: string;
  hotel: string;
  rating: number;
  comment: string;
}

const fakeReviews: Review[] = [
  {
    timestamp: "2025-03-01 09:00",
    hotel: "Chai Nagri",
    rating: 4.8,
    comment: "Absolutely loved the ambience and food quality!",
  },
  {
    timestamp: "2025-03-02 10:30",
    hotel: "Catch Up",
    rating: 4.2,
    comment: "Great service and delicious snacks.",
  },
  {
    timestamp: "2025-03-03 12:00",
    hotel: "Creative Food",
    rating: 3.9,
    comment: "Good, but could improve on cleanliness.",
  },
  {
    timestamp: "2025-03-04 14:45",
    hotel: "Campus Cafe Delta",
    rating: 4.7,
    comment: "Fantastic experience! Highly recommend.",
  },
  {
    timestamp: "2025-03-05 11:15",
    hotel: "Campus Cafe Epsilon",
    rating: 4.5,
    comment: "Delicious meals with a cozy environment.",
  },
  {
    timestamp: "2025-03-06 16:00",
    hotel: "Campus Cafe Zeta",
    rating: 4.3,
    comment: "Really enjoyed the variety of dishes offered.",
  },
  {
    timestamp: "2025-03-07 08:30",
    hotel: "Campus Cafe Eta",
    rating: 4.0,
    comment: "Service was a bit slow, but the food was great.",
  },
  {
    timestamp: "2025-03-08 13:00",
    hotel: "Campus Cafe Theta",
    rating: 4.6,
    comment: "Outstanding flavors and excellent presentation.",
  },
  {
    timestamp: "2025-03-09 15:30",
    hotel: "Campus Cafe Iota",
    rating: 4.1,
    comment: "Decent quality, but prices could be lower.",
  },
  {
    timestamp: "2025-03-10 10:00",
    hotel: "Campus Cafe Kappa",
    rating: 4.9,
    comment: "Best cafe experience I've had in a long time!",
  },
  {
    timestamp: "2025-03-11 11:00",
    hotel: "Campus Cafe Lambda",
    rating: 4.4,
    comment: "Cozy and inviting with great desserts.",
  },
  {
    timestamp: "2025-03-12 12:15",
    hotel: "Campus Cafe Mu",
    rating: 4.2,
    comment: "Nice vibe and friendly staff overall.",
  },
];

export default function ReviewsPage() {
  // Simulated logged-in user's name
  const loggedInUserName = "Shubham";

  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#212121]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils h-8 w-8 text-[#E63946]"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
            <span className="text-2xl font-bold" style={{ color: "#E63946" }}>RateMyBite</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-[#264653] hover:text-[#E63946]">Home</a></li>
              <li><a href="/reviews" className="text-[#264653] hover:text-[#E63946]">Reviews</a></li>
              <li><a href="/analysis" className="text-[#264653] hover:text-[#E63946]">Analytics</a></li>
              <li><a href="/login" className="text-[#264653] hover:text-[#E63946]">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Ribbon on Top */}
      <div className="bg-[#FF9F1C] text-white py-2">
        <div className="container mx-auto text-center text-lg font-semibold">
          Reviews Dashboard
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: "#E63946" }}>
          My Reviews
        </h1>
        <p className="text-center text-gray-600 mb-8">Posted by {loggedInUserName}</p>

        {fakeReviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {fakeReviews.map((review, index) => (
              <Card key={index} className="bg-white shadow-lg p-4 transition transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold" style={{ color: "#E63946" }}>
                    {review.hotel}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <strong>Rating:</strong> {review.rating} / 5
                  </p>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" style={{ borderColor: "#FF9F1C", color: "#FF9F1C" }}>
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No reviews found.</p>
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
                <a href="/aboutus" className="hover:text-[#FF9F1C]">About Us</a>
                <a href="/faq" className="hover:text-[#FF9F1C]">FAQs</a>
                <a href="/contactus" className="hover:text-[#FF9F1C]">Contact</a>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="hover:text-[#FF9F1C]">Facebook</a>
                <a href="#" className="hover:text-[#FF9F1C]">Twitter</a>
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
