// app/faqs/page.tsx
"use client"; // Use client if you want interactive behavior like accordions

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
    <div className="min-h-screen bg-[#FAF3E0] text-[#212121]">
      <div className="container mx-auto p-8 max-w-4xl">
        <h1
          className="text-5xl font-extrabold text-center mb-8"
          style={{ color: "#E63946" }}
        >
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-all duration-300"
            >
              <summary
                className="text-2xl font-bold cursor-pointer"
                style={{ color: "#E63946" }}
              >
                {faq.question}
              </summary>
              <p className="text-lg mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
