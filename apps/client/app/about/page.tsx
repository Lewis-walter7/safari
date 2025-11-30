import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Safari Adventures Kenya - Your Trusted Safari Tour Operator',
    description:
        'Learn about Safari Adventures Kenya, a leading tour operator with 15+ years of experience creating unforgettable safari experiences. Meet our expert team and discover our commitment to sustainable tourism.',
    keywords: [
        'about Safari Adventures Kenya',
        'Kenya tour operator',
        'safari company Kenya',
        'best tour company Kenya',
        'safari experts',
    ],
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-emerald-600 to-green-600 text-white py-24 mt-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="heading-primary text-white mb-6">
                            About Safari Adventures Kenya
                        </h1>
                        <p className="text-xl opacity-90 leading-relaxed">
                            Kenya's trusted safari experts with over 15 years of experience creating
                            unforgettable wildlife adventures across East Africa's most spectacular destinations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge badge-secondary mb-4">Our Story</span>
                            <h2 className="heading-secondary text-gray-900 mb-6">
                                Passion for Wildlife, Commitment to Excellence
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2008, Safari Adventures Kenya was born from a deep passion for wildlife
                                    conservation and a desire to share Kenya's natural wonders with the world. What started
                                    as a small operation with just two safari vehicles has grown into one of Kenya's most
                                    respected tour operators.
                                </p>
                                <p>
                                    Over the past 15+ years, we've had the privilege of guiding over 10,000 travelers
                                    from around the globe through Kenya's iconic national parks and wildlife reserves.
                                    Each safari is meticulously planned to provide authentic, sustainable, and unforgettable
                                    experiences that respect both wildlife and local communities.
                                </p>
                                <p>
                                    Our team of expert guides are not just drivers – they're passionate naturalists,
                                    conservationists, and storytellers who bring Kenya's wildlife and culture to life.
                                    Many have been with us since the beginning, and their deep knowledge and genuine
                                    enthusiasm make every safari truly special.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/images/hero.jpg"
                                alt="Safari Adventures Kenya team and vehicles"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-secondary text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                ),
                                title: 'Conservation First',
                                description: 'We\'re committed to sustainable tourism practices that protect wildlife and preserve natural habitats for future generations.',
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: 'Community Support',
                                description: 'We work closely with local communities, ensuring our safaris benefit the people who call these lands home.',
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                ),
                                title: 'Excellence & Safety',
                                description: 'From our vehicles to our guides to our accommodations, we maintain the highest standards of quality and safety.',
                            },
                        ].map((value, index) => (
                            <div key={index} className="card p-8 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-emerald-600 gradient-secondary rounded-full">
                                    <div className="text-white">{value.icon}</div>
                                </div>
                                <h3 className="heading-tertiary text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-white">
                <div className="container-custom">
                    <h2 className="heading-secondary text-gray-900 text-center mb-12">
                        Why Travelers Choose Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Licensed & Certified',
                                description: 'Fully licensed by the Kenya Tourism Board and certified by international tourism associations.',
                            },
                            {
                                title: 'Expert Guides',
                                description: 'Our guides are passionate naturalists with years of experience and deep knowledge of Kenya\'s wildlife.',
                            },
                            {
                                title: 'Custom Itineraries',
                                description: 'Every safari is tailored to your interests, budget, and travel style. No cookie-cutter tours.',
                            },
                            {
                                title: 'Best Price Guarantee',
                                description: 'Competitive pricing without compromising on quality. We match or beat any comparable quote.',
                            },
                            {
                                title: '24/7 Support',
                                description: 'From planning to post-trip, our team is available around the clock to assist you.',
                            },
                            {
                                title: 'Sustainable Tourism',
                                description: 'We\'re committed to eco-friendly practices and supporting wildlife conservation efforts.',
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '15+', label: 'Years Experience' },
                            { number: '10,000+', label: 'Happy Travelers' },
                            { number: '50+', label: 'Safari Packages' },
                            { number: '4.9/5', label: 'Average Rating' },
                        ].map((stat, index) => (
                            <div key={index}>
                                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-lg opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gray-50">
                <div className="container-custom text-center">
                    <h2 className="heading-secondary text-gray-900 mb-6">
                        Ready to Start Your Safari Adventure?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let our experts help you plan the perfect Kenya safari experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/packages">
                            <Button variant="primary" className="text-lg px-8 py-4">
                                Browse Safari Packages
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="secondary" className="text-lg px-8 py-4">
                                Contact Our Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
