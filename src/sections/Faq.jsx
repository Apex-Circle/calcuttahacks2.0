import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Calcutta <Hacks/>?',
    answer:
      'Calcutta <Hacks/> is a 24-hour hackathon celebrating the heritage of Kolkata while fostering innovation and creativity. It brings together 200+ hackers to build innovative solutions and network with industry experts.',
  },
  {
    question: 'When and where is the event?',
    answer:
      'The hackathon will be held on 13th-14th December 2025 at Techno India University, Saltlake Sector V, Kolkata, West Bengal.',
  },
  {
    question: 'Who can participate?',
    answer:
      "The hackathon is open to all students, developers, designers, and tech enthusiasts. Whether you're a beginner or an experienced hacker, everyone is welcome!",
  },
  {
    question: 'How do I register?',
    answer:
      'You can register through our Devfolio page. Click on the "Register Now" or "Apply with Devfolio" button on our website to get started.',
  },
  {
    question: 'What is the team size?',
    answer:
      'Teams can have 2-4 members. You can also register individually and find teammates through our Discord community before or during the event.',
  },
  {
    question: 'Is there a registration fee?',
    answer:
      'No, participation in Calcutta <Hacks/> is completely free! We provide meals, swag, and an amazing experience at no cost.',
  },
  {
    question: 'What should I bring?',
    answer:
      "Bring your laptop, chargers, student ID, and lots of enthusiasm! We'll provide WiFi, food, beverages, and a creative environment.",
  },
  {
    question: 'Are there any prizes?',
    answer:
      'Yes! We have exciting prizes for winners across different tracks, along with special category prizes and swag for all participants.',
  },
  {
    question: 'Will there be mentors available?',
    answer:
      'Absolutely! Experienced mentors and industry experts will be available throughout the hackathon to guide you and help with technical challenges.',
  },
  {
    question: 'What are the judging criteria?',
    answer:
      "Projects will be judged on innovation, technical complexity, design, feasibility, and presentation. Bonus points for projects that celebrate Kolkata's heritage!",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="w-screen flex flex-col items-center py-[8vh] relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-[10%] left-[8%] w-[30vh] h-[30vh] rounded-full bg-red-600 opacity-30 filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-[30vh] h-[30vh] rounded-full bg-red-800 opacity-25 filter blur-3xl animate-pulse pointer-events-none" />

      {/* Section title */}
      <div className="flex items-center justify-center mt-[20vh] z-10">
        <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
          FAQ
        </h2>
      </div>

      {/* Subtitle */}
      <p className="rajdhani text-[1.6vw] text-gray-400 tracking-wide mt-3 z-10">
        Got questions? We've got answers.
      </p>

      {/* FAQ list */}
      <div className="w-full max-w-4xl px-6 mt-[7vh] space-y-4 z-10">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-red-900/50 bg-black/60 backdrop-blur-sm rounded-lg shadow-[0_0_12px_rgba(255,0,60,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,60,0.25)] hover:border-red-700/70"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
            >
              <span className="rajdhani text-[1.35vw] font-semibold text-gray-200 pr-4 group-hover:text-red-400 transition-colors">
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 text-red-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-60' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 border-t border-red-900/30 pt-4">
                <p className="rajdhani text-[1.25vw] text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 z-10">
        <a
          href="https://links.calcuttahacks.xyz/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          className="rajdhani px-8 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold tracking-wide hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,60,0.8)] transition-all duration-300 inline-block"
        >
          Still have questions? Contact Us
        </a>
      </div>
    </section>
  );
};

export default FAQ;
