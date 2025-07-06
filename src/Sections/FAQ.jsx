import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I sign up on HelpMe?",
    answer: "Just click on the sign-up button, enter your basic details, and you're good to go. It only takes a few minutes.",
  },
  {
    question: "Is HelpMe free to use?",
    answer: "Yes, signing up and browsing jobs or help offers is completely free. We may charge a small fee only when a transaction is completed.",
  },
  {
    question: "How do I get paid after completing a task?",
    answer: "Payments are securely transferred to your linked account once the task is marked complete by the job poster.",
  },
  {
    question: "Can I post multiple tasks at once?",
    answer: "Yes! You can post as many tasks as needed, whether it's cleaning, deliveries, or tech help.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 md:mx-7 my-10">
      <div className="w-[95%] max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Frequently <span className="text-yellow-500">Asked</span> Questions
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4 rounded" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We’ve got answers. Learn how HelpMe works and how you can make the most out of it.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 transition-all duration-300 shadow-sm"
            >
              <button
                className="flex justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-yellow-500 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
