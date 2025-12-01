import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Masai Mara Migration Guide - When & Where to Witness It',
    description:
        'Everything you need to know about the Great Wildebeest Migration in the Masai Mara, including the best viewing months and prime locations.',
    keywords: [
        'Masai Mara migration',
        'wildebeest migration Kenya',
        'Mara River crossing',
        'best time for migration',
        'Masai Mara safari guide',
    ],
};

export default function MasaiMaraMigrationPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Article Header */}
            <article className="mt-16">
                <section className="bg-white dark:bg-gray-900 py-12">
                    <div className="container-custom max-w-4xl">
                        <div className="mb-6">
                            <span className="badge bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Wildlife</span>
                        </div>
                        <h1 className="heading-primary text-gray-900 dark:text-white mb-6">
                            Masai Mara Migration Guide - When & Where to Witness It
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <span>Published: November 10, 2024</span>
                            <span>•</span>
                            <span>10 min read</span>
                            <span>•</span>
                            <span>By Safari Adventures Kenya</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            The Great Wildebeest Migration is often called the "World Cup of Wildlife." It's an annual
                            movement of over 1.5 million wildebeest, accompanied by hundreds of thousands of zebras and
                            gazelles, searching for fresh grazing. Witnessing this spectacle in Kenya's Masai Mara is
                            a bucket-list experience for nature lovers worldwide.
                        </p>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Understanding the Migration Cycle
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            The migration is a continuous year-round loop, but the herds are in the Masai Mara for a
                            specific window. Here's what to expect:
                        </p>
                        <ul className="space-y-4 mb-8 text-gray-700 dark:text-gray-300">
                            <li className="flex gap-3">
                                <span className="font-bold min-w-[120px]">July:</span>
                                <span>The herds begin arriving in the Masai Mara from the Serengeti, crossing the Sand River.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold min-w-[120px]">August:</span>
                                <span>Peak season! The herds are fully settled in the Mara. Dramatic river crossings occur daily at the Mara and Talek rivers.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold min-w-[120px]">September:</span>
                                <span>The herds remain in the Mara, grazing on the lush plains. Excellent predator action as lions and cheetahs hunt.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold min-w-[120px]">October:</span>
                                <span>The herds start moving south back towards the Serengeti as the short rains begin.</span>
                            </li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            The River Crossings: Nature's Drama
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            The most sought-after event is the river crossing. Huge crocodiles lie in wait in the Mara River,
                            creating heart-stopping moments of survival.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-600 p-6 rounded-r-lg mb-8">
                            <p className="text-gray-900 dark:text-white font-medium">
                                <strong>Pro Tip:</strong> Patience is key. Herds may gather at the riverbank for hours
                                (or even days) before one brave individual takes the plunge, triggering a chaotic crossing.
                                Bring a good book and plenty of water!
                            </p>
                        </div>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Where to Stay
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Location is crucial during migration season. We recommend:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li><strong>Mara Triangle:</strong> Less crowded, excellent for river crossings.</li>
                            <li><strong>Central Mara:</strong> High density of big cats, close to Talek River crossings.</li>
                            <li><strong>Private Conservancies:</strong> Offer night drives and walking safaris, away from the main reserve crowds.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Photography Tips for the Migration
                        </h2>
                        <ul className="space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Bring a telephoto lens (at least 300mm) for close-ups.</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Use a fast shutter speed (1/1000s+) to freeze the action of jumping wildebeest.</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Don't forget the wider shots to capture the scale of the herds on the plains.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                    <div className="container-custom max-w-4xl text-center">
                        <h2 className="heading-secondary text-white mb-6">
                            Witness the Great Migration
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Book your front-row seat to nature's greatest show. Spaces fill up fast for migration season!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages">
                                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-white text-lg px-8 py-4">
                                    View Migration Packages
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
                                    Plan My Trip
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </div>
    );
}
