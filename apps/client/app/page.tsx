import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SafariPackageCard from './components/SafariPackageCard';
import DestinationCard from './components/DestinationCard';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';
import Button from './components/Button';
import Link from 'next/link';
import { destinations } from './data/destinations';

// Sample data
const featuredPackages = [
  {
    id: '1',
    title: '3-Day Masai Mara Crossing',
    slug: '3-day-masai-mara-crossing',
    duration: '3 Days',
    image: '/images/hero.jpg',
    highlights: [
      'Witness the Great Migration',
      'Big Five game drives',
      'Luxury tented camp experience',
    ],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: '2',
    title: '7-Day Kenya Exclusive Safari',
    slug: '7-day-kenya-exclusive',
    duration: '7 Days',
    image: '/images/hero.jpg',
    highlights: [
      'Amboseli, Lake Naivasha & Masai Mara',
      'Luxury lodge accommodation',
      'Mount Kilimanjaro views',
    ],
    rating: 4.9,
    reviews: 145,
  },
  {
    id: '3',
    title: '8-Day Kenya & Tanzania Highlight Safari',
    slug: '8-day-kenya-tanzania-highlight',
    duration: '8 Days',
    image: '/images/hero.jpg',
    highlights: [
      'Best of both countries',
      'Masai Mara and Serengeti',
      'Ngorongoro Crater',
    ],
    rating: 5.0,
    reviews: 189,
  },
];

const topDestinations = destinations.slice(0, 3);

const testimonials = [
  {
    name: 'Sarah Johnson',
    country: 'United States',
    rating: 5,
    text: 'Our Masai Mara safari exceeded all expectations! The guides were incredibly knowledgeable, and we saw the Big Five within the first two days. Truly unforgettable!',
  },
  {
    name: 'David Miller',
    country: 'United Kingdom',
    rating: 5,
    text: 'Safari Adventures Kenya provided exceptional service from start to finish. The accommodations were luxurious, and the wildlife encounters were breathtaking.',
  },
  {
    name: 'Emma Watson',
    country: 'Australia',
    rating: 5,
    text: 'The best vacation of my life! Professional guides, amazing wildlife, and seamless organization. I highly recommend Safari Adventures Kenya to anyone planning an African safari.',
  },
];

const faqs = [
  {
    question: 'What is the best time to visit Kenya for a safari?',
    answer: 'The best time for a Kenya safari is during the dry seasons from June to October and January to February. This is when wildlife viewing is optimal, and you can witness the Great Migration in the Masai Mara (July-October).',
  },
  {
    question: 'Do I need a visa to visit Kenya?',
    answer: 'Most visitors require a visa to enter Kenya. You can apply for an electronic visa (e-Visa) online before your trip. Citizens of some countries can obtain a visa on arrival.',
  },
  {
    question: 'What vaccinations are required for Kenya?',
    answer: 'Yellow fever vaccination is required if you\'re coming from a yellow fever endemic country. Recommended vaccines include hepatitis A & B, typhoid, and routine vaccinations. Malaria prophylaxis is also advised.',
  },
  {
    question: 'How much does a Kenya safari cost?',
    answer: 'Kenya safari prices vary depending on duration, accommodation level, and season. Budget safaris start around $200-300 per day, mid-range safaris $300-600 per day, and luxury safaris $600+ per day per person.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Featured Safari Packages */}
      <section id="packages" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <span className="badge badge-primary mb-4">Popular Packages</span>
            <h2 className="heading-secondary text-gray-900 mb-4">
              Featured Kenya Safari Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated safari experiences designed to showcase the best of Kenya's wildlife and landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPackages.map((pkg) => (
              <SafariPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/packages">
              <Button variant="primary" className="text-lg px-8 py-4">
                View All Safari Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gray-900 mb-4">
              Why Choose Safari Adventures Kenya?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are Kenya's leading safari tour operator, trusted by thousands of travelers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '15+ Years Experience',
                description: 'Over a decade of expertise in creating unforgettable safari experiences.',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Expert Guides',
                description: 'Licensed, knowledgeable guides who bring wildlife and culture to life.',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Licensed & Insured',
                description: 'Fully licensed tour operator with comprehensive insurance coverage.',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '10,000+ Happy Clients',
                description: 'Join thousands of satisfied travelers who\'ve experienced Kenya with us.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-amber-600 gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge badge-secondary mb-4">Must-Visit Places</span>
            <h2 className="heading-secondary text-gray-900 mb-4">
              Top Kenya Safari Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore Kenya's most iconic national parks and wildlife reserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {topDestinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/destinations">
              <Button variant="secondary" className="text-lg px-8 py-4">
                Explore All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers who've explored Kenya with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-secondary text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about planning your Kenya safari.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="card p-6 cursor-pointer group"
              >
                <summary className="font-heading font-semibold text-lg text-gray-900 list-none flex items-center justify-between">
                  {faq.question}
                  <svg
                    className="w-6 h-6 text-amber-600 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-secondary text-white mb-4">
            Ready for Your Kenya Safari Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let our safari experts help you plan the perfect African wildlife experience.
            Get a free, personalized quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 border-white text-lg px-8 py-4 font-bold shadow-md">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+254123456789">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 font-bold shadow-md transition-all">
                Call +254 123 456 789
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
