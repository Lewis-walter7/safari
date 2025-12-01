'use client';

import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafariPackageCard from '../components/SafariPackageCard';
import { packages } from '../data/packages';

export default function PackagesPage() {
    const [selectedDuration, setSelectedDuration] = useState('All Durations');

    const filteredPackages = useMemo(() => {
        if (selectedDuration === 'All Durations') {
            return packages;
        }

        return packages.filter((pkg) => {
            const days = parseInt(pkg.duration.split(' ')[0]);

            if (selectedDuration === '3-4 Days') {
                return days >= 3 && days <= 4;
            }
            if (selectedDuration === '5-7 Days') {
                return days >= 5 && days <= 7;
            }
            if (selectedDuration === '8+ Days') {
                return days >= 8;
            }

            return true;
        });
    }, [selectedDuration]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white py-24 mt-16">
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
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-2">
                                All Safari Packages
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                {filteredPackages.length} amazing safari experiences available
                            </p>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-3">
                            <select
                                value={selectedDuration}
                                onChange={(e) => setSelectedDuration(e.target.value)}
                                className="input py-2 px-4 pr-8 rounded-lg cursor-pointer"
                            >
                                <option>All Durations</option>
                                <option>3-4 Days</option>
                                <option>5-7 Days</option>
                                <option>8+ Days</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPackages.map((pkg) => (
                            <SafariPackageCard key={pkg.id} pkg={pkg} />
                        ))}
                    </div>

                    {filteredPackages.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-600 dark:text-gray-400">
                                No packages found matching your criteria. Please try a different duration.
                            </p>
                            <button
                                onClick={() => setSelectedDuration('All Durations')}
                                className="mt-4 text-amber-600 font-medium hover:underline"
                            >
                                View all packages
                            </button>
                        </div>
                    )}

                    {/* Trust Section */}
                    <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
                                <div className="text-gray-700 dark:text-gray-300 font-medium">Satisfaction Guarantee</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
                                <div className="text-gray-700 dark:text-gray-300 font-medium">Customer Support</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
                                <div className="text-gray-700 dark:text-gray-300 font-medium">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
