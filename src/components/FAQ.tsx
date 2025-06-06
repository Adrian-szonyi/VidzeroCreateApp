import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div 
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How does the app help charities collect content?",
      answer: "Our app provides a centralized platform where charities can create specific campaigns, provide guidelines, and invite supporters to contribute content. The intuitive interface makes it easy for users to upload photos, videos, and text testimonials directly from their mobile devices."
    },
    {
      question: "What types of content can be collected?",
      answer: "The app supports a wide range of content types including photos, videos, text testimonials, customer feedback, and stories. Charities can specify exactly what kind of content they need for each campaign."
    },
    {
      question: "How does the gamification system work?",
      answer: "Contributors earn points, badges, and recognition for submitting content that gets approved. This creates a fun, engaging experience that encourages ongoing participation and higher quality submissions."
    },
    {
      question: "Can we control what content is publicly visible?",
      answer: "Absolutely. All submitted content goes through an approval process. Only content that has been reviewed and approved by your organization will be visible to other users or available for download."
    },
    {
      question: "How can we use the content once it's collected?",
      answer: "Approved content can be downloaded directly from the platform for use in your marketing materials, social media, website, or fundraising campaigns. You can also send content directly to Vidzero for professional editing services."
    },
    {
      question: "Is training provided for our supporters?",
      answer: "Yes, the app includes short training courses on how to film with a smartphone and how to take quality photos for social media. These resources help your supporters create better content, even if they have no prior experience."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;