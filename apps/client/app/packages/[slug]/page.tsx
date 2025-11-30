import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';
import { packages } from '../../data/packages';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const pkg = packages.find((p) => p.slug === slug);

    if (!pkg) {
        return {
            title: 'Package Not Found',
        };
    }

    return {
        title: `${pkg.title} | Safari Adventures Kenya`,
        description: pkg.description,
    };
}

export function generateStaticParams() {
    return packages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export default async function PackageDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const pkg = packages.find((p) => p.slug === slug);

    if (!pkg) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-end pb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="container-custom relative z-10 text-white">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                            <span className="bg-amber-600 px-3 py-1 rounded-full">
                                {pkg.duration}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {pkg.rating} ({pkg.reviews} reviews)
                            </span>
                        </div>
                        <h1 className="heading-primary text-white mb-4 drop-shadow-lg">
                            {pkg.title}
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
                                    {pkg.description}
                                </p>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h2 className="heading-secondary text-gray-900 dark:text-white mb-6">Highlights</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {pkg.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-amber-600 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-gray-800 dark:text-gray-200">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div>
                                <h2 className="heading-secondary text-gray-900 dark:text-white mb-6">Itinerary</h2>
                                <div className="space-y-6">
                                    {pkg.itinerary.map((item, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-amber-200 dark:border-gray-700 pb-6 last:pb-0">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white dark:border-gray-900"></div>
                                            <div className="mb-2">
                                                <span className="text-sm font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider">
                                                    Day {item.day}
                                                </span>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Inclusions & Exclusions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {pkg.inclusions.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Excluded
                                    </h3>
                                    <ul className="space-y-3">
                                        {pkg.exclusions.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Booking Card */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                                    <div className="text-center mb-6">
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Duration</p>
                                        <p className="text-3xl font-bold text-gray-900 dark:text-white">{pkg.duration}</p>
                                    </div>

                                    <Link href="/contact" className="block w-full">
                                        <Button variant="primary" className="w-full py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                                            Request Quote
                                        </Button>
                                    </Link>

                                    <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                                        No payment required to inquire. We'll customize this trip for you.
                                    </p>
                                </div>

                                {/* Need Help? */}
                                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-100 dark:border-amber-900/30">
                                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                                        Need Help Planning?
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        Talk to our safari experts to tailor this package to your needs.
                                    </p>
                                    <a href="tel:+254123456789" className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold hover:underline">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +254 123 456 789
                                    </a>
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
