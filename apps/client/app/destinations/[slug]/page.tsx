import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';
import { destinations } from '../../data/destinations';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const destination = destinations.find((d) => d.slug === slug);

    if (!destination) {
        return {
            title: 'Destination Not Found',
        };
    }

    return {
        title: `${destination.name} Safari | Safari Adventures Kenya`,
        description: destination.description,
    };
}

export function generateStaticParams() {
    return destinations.map((destination) => ({
        slug: destination.slug,
    }));
}

export default async function DestinationDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const destination = destinations.find((d) => d.slug === slug);

    if (!destination) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-end pb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="container-custom relative z-10 text-white">
                    <div className="max-w-4xl">
                        {destination.featured && (
                            <span className="bg-amber-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                                {destination.featured}
                            </span>
                        )}
                        <h1 className="heading-primary text-white mb-4 drop-shadow-lg">
                            {destination.name}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div>
                                <h2 className="heading-secondary text-gray-900 dark:text-white mb-6">Overview</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {destination.description}
                                </p>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h2 className="heading-secondary text-gray-900 dark:text-white mb-6">Key Highlights</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {destination.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-gray-800 dark:text-gray-200">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Activities */}
                            <div>
                                <h2 className="heading-secondary text-gray-900 dark:text-white mb-6">Things to Do</h2>
                                <div className="flex flex-wrap gap-3">
                                    {destination.activities.map((activity, index) => (
                                        <span key={index} className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded-lg font-medium border border-amber-100 dark:border-amber-900/30">
                                            {activity}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Practical Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Best Time to Visit
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {destination.bestTimeToVisit}
                                    </p>
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Getting There
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {destination.gettingThere}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Plan Trip Card */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        Plan Your Trip to {destination.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                                        Let us help you create the perfect itinerary including {destination.name}.
                                    </p>

                                    <Link href="/contact" className="block w-full">
                                        <Button variant="primary" className="w-full py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                                            Start Planning
                                        </Button>
                                    </Link>
                                </div>

                                {/* Accommodation Types */}
                                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-4">
                                        Accommodation Options
                                    </h3>
                                    <ul className="space-y-3">
                                        {destination.accommodationTypes.map((type, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {type}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Related Packages */}
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-100 dark:border-amber-900/30">
                                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                                        Explore Packages
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        Browse our safari packages that visit {destination.name}.
                                    </p>
                                    <Link href="/packages" className="text-amber-600 dark:text-amber-500 font-bold hover:underline flex items-center gap-1">
                                        View Packages
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
