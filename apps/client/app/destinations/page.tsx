import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import Button from '../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Top Kenya Safari Destinations - National Parks & Wildlife Reserves',
    description:
        'Explore Kenya\'s most iconic safari destinations including Masai Mara, Amboseli, Tsavo, Lake Nakuru, and Samburu. Discover where to see the Great Migration, Big Five, and spectacular wildlife.',
    keywords: [
        'Kenya safari destinations',
        'Masai Mara National Reserve',
        'Amboseli National Park',
        'Tsavo National Parks',
        'Kenya wildlife reserves',
        'best safari parks Kenya',
        'where to safari in Kenya',
    ],
};

import { destinations } from '../data/destinations';

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white py-24 mt-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="heading-primary text-white mb-6">
                            Kenya Safari Destinations
                        </h1>
                        <p className="text-xl opacity-90 leading-relaxed">
                            Explore Kenya's most spectacular national parks and wildlife reserves.
                            From the legendary Masai Mara to the scenic Amboseli, each destination
                            offers unique wildlife experiences and breathtaking landscapes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-secondary text-gray-900 dark:text-white mb-4">
                            Must-Visit Safari Parks
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Each destination offers a unique safari experience with diverse wildlife,
                            landscapes, and photographic opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination, index) => (
                            <DestinationCard key={index} destination={destination} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Visit Kenya */}
            <section className="section bg-white dark:bg-gray-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="heading-secondary text-gray-900 dark:text-white mb-6">
                                Why Kenya is Africa's Premier Safari Destination
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Unmatched Wildlife Diversity',
                                        description: 'Home to over 1,000 bird species and the Big Five - lion, leopard, elephant, buffalo, and rhino.',
                                    },
                                    {
                                        title: 'The Great Migration',
                                        description: 'Witness millions of wildebeest and zebras in their annual migration across the Masai Mara.',
                                    },
                                    {
                                        title: 'Year-Round Safaris',
                                        description: 'Kenya offers excellent wildlife viewing throughout the year, with each season bringing unique experiences.',
                                    },
                                    {
                                        title: 'Diverse Landscapes',
                                        description: 'From savanna plains to snow-capped mountains, coastal beaches to arid deserts.',
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="/images/hero.jpg"
                                alt="Kenya safari wildlife - elephants and other animals"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                                <div className="flex items-center gap-3 mb-2">
                                    <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Based on 10,000+ traveler reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                <div className="container-custom text-center">
                    <h2 className="heading-secondary text-white mb-4">
                        Ready to Explore Kenya's Wildlife?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Let our experts help you choose the perfect safari destinations for your adventure.
                    </p>
                    <Link href="/contact">
                        <Button variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 border-white text-lg px-8 py-4">
                            Plan Your Safari Now
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
