import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafariPackageCard from '../components/SafariPackageCard';

export const metadata: Metadata = {
    title: 'Kenya Safari Packages - Tailored Wildlife Tours',
    description:
        'Browse our comprehensive range of Kenya safari packages. From Masai Mara tours to Amboseli safaris, find the perfect African wildlife adventure for you. Expert guides, best prices, unforgettable experiences.',
    keywords: [
        'Kenya safari packages',
        'Masai Mara safari tours',
        'Amboseli safari',
        'Kenya wildlife tours',
        'African safari packages',
        'best Kenya safaris',
        'luxury Kenya safari',
        'budget Kenya safari',
    ],
};

import { packages } from '../data/packages';

export default function PackagesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white py-24 mt-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="heading-primary text-white mb-6">
                            Kenya Safari Packages
                        </h1>
                        <p className="text-xl opacity-90 leading-relaxed">
                            Discover our carefully curated safari experiences designed to showcase the best of Kenya's
                            wildlife and landscapes. From the legendary Masai Mara to the majestic Amboseli,
                            find your perfect African adventure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="section">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                        <div>
                            <h2 className="heading-tertiary text-gray-900 mb-2">
                                All Safari Packages
                            </h2>
                            <p className="text-gray-600">
                                {packages.length} amazing safari experiences available
                            </p>
                        </div>

                        {/* Filters  - Static for now */}
                        <div className="flex flex-wrap gap-3">
                            <select className="input py-2 px-4 pr-8 rounded-lg">
                                <option>All Durations</option>
                                <option>3-4 Days</option>
                                <option>5-7 Days</option>
                                <option>8+ Days</option>
                            </select>
                            <select className="input py-2 px-4 pr-8 rounded-lg">
                                <option>All Prices</option>
                                <option>Under $1,000</option>
                                <option>$1,000 - $2,000</option>
                                <option>$2,000+</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <SafariPackageCard key={pkg.id} pkg={pkg} />
                        ))}
                    </div>

                    {/* Trust Section */}
                    <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
                                <div className="text-gray-700 font-medium">Satisfaction Guarantee</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
                                <div className="text-gray-700 font-medium">Customer Support</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
                                <div className="text-gray-700 font-medium">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
