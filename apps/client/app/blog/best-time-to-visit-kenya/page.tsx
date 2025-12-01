import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Best Time to Visit Kenya for Safari - Complete 2025 Guide',
    description:
        'Discover the best time to visit Kenya for safari. Learn about seasonal wildlife patterns, the Great Migration timing, weather conditions, and expert recommendations for optimal safari experiences.',
    keywords: [
        'best time to visit Kenya',
        'when to visit Kenya safari',
        'Masai Mara best time',
        'Kenya weather safari',
        'Great Migration timing',
        'Kenya dry season',
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Time to Visit Kenya for Safari - Complete Guide',
    description: 'Comprehensive guide to choosing the best time to visit Kenya for safari experiences.',
    author: {
        '@type': 'Organization',
        name: 'Safari Adventures Kenya',
    },
    publisher: {
        '@type': 'Organization',
        name: 'Safari Adventures Kenya',
        logo: {
            '@type': 'ImageObject',
            url: 'https://safariadventureskenya.com/images/logo.png',
        },
    },
    datePublished: '2024-11-15',
    dateModified: '2024-11-15',
};

export default function BestTimeToVisitPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />

            {/* Article Header */}
            <article className="mt-16">
                <section className="bg-white dark:bg-gray-900 py-12">
                    <div className="container-custom max-w-4xl">
                        <div className="mb-6">
                            <span className="badge bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Travel Planning</span>
                        </div>
                        <h1 className="heading-primary text-gray-900 dark:text-white mb-6">
                            Best Time to Visit Kenya for Safari - Complete 2025 Guide
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <span>Published: November 15, 2024</span>
                            <span>•</span>
                            <span>8 min read</span>
                            <span>•</span>
                            <span>By Safari Adventures Kenya</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            Planning a Kenya safari? Timing is everything. While Kenya offers exceptional wildlife
                            viewing year-round, certain seasons provide optimal conditions for specific experiences.
                            This comprehensive guide will help you choose the perfect time for your African adventure.
                        </p>

                        <h2 id="dry-season" className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Dry Season (June to October) - Peak Safari Time
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            The dry season is widely considered the best time for Kenya safaris, particularly for
                            wildlife viewing. Here's why:
                        </p>
                        <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Sparse Vegetation:</strong> Less foliage makes animals easier to spot</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Water Concentration:</strong> Animals gather around remaining water sources</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Great Migration:</strong> July-October is prime time in Masai Mara</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Pleasant Weather:</strong> Warm days, cool nights, minimal rainfall</span>
                            </li>
                        </ul>

                        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-600 p-6 rounded-r-lg mb-8">
                            <p className="text-gray-900 dark:text-white font-medium">
                                <strong>Pro Tip:</strong> Book 6-9 months in advance for dry season safaris,
                                as lodges fill up quickly during peak season.
                            </p>
                        </div>

                        <h2 id="wet-season" className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Wet Season (November to May) - Green Season Benefits
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Don't dismiss the wet season! It offers unique advantages:
                        </p>
                        <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Lower Prices:</strong> Up to 40% savings on accommodations</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Fewer Crowds:</strong> More exclusive wildlife encounters</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Migratory Birds:</strong> Over 100 species visit during November-April</span>
                            </li>
                            <li className="flex gap-3">
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span><strong>Lush Landscapes:</strong> Stunning scenery for photography</span>
                            </li>
                        </ul>

                        <h2 id="masai-mara" className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Best Time for Masai Mara Safari
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            For the iconic Masai Mara experience, timing depends on your priorities:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-600 rounded-lg p-6">
                                <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-3">
                                    July - October
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Great Migration Peak</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Witness dramatic river crossings and massive herds. Best for: First-time visitors,
                                    wildlife photographers, migration enthusiasts.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-6">
                                <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-3">
                                    January - March
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Calving Season</strong></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Fewer tourists, lower prices, excellent predator action. Best for: Budget travelers,
                                    photographers seeking dramatic scenes.
                                </p>
                            </div>
                        </div>

                        <h2 id="other-parks" className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Best Time for Other Kenya Parks
                        </h2>
                        <div className="space-y-4 mb-8 text-gray-700 dark:text-gray-300">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Amboseli National Park</h3>
                                <p>
                                    <strong>Best:</strong> June-October and January-February (dry seasons).
                                    Kilimanjaro views are clearest in the morning during dry months.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Tsavo National Parks</h3>
                                <p>
                                    <strong>Best:</strong> June-October. Red elephants are most visible when vegetation is sparse.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Lake Nakuru</h3>
                                <p>
                                    <strong>Best:</strong> November-April for flamingos (water levels dependent).
                                </p>
                            </div>
                        </div>

                        <h2 id="month-guide" className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Month-by-Month Kenya Safari Guide
                        </h2>
                        <div className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
                            <p><strong>January-February:</strong> Excellent wildlife viewing, calving season in southern Serengeti</p>
                            <p><strong>March-May:</strong> Long rains, lush landscapes, lower prices, good birding</p>
                            <p><strong>June-September:</strong> Peak safari season, dry weather, Great Migration begins</p>
                            <p><strong>October:</strong> Short rains begin, excellent value, fewer tourists</p>
                            <p><strong>November-December:</strong> Short rains, green season, holiday bookings increase</p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-600 p-6 rounded-r-lg mb-8">
                            <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-3">
                                Our Expert Recommendation
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                For first-time visitors: July-October offers the most reliable wildlife viewing and
                                comfortable weather. For budget-conscious travelers: January-March and November provide
                                excellent value with good wildlife sightings. For photographers: June-September for
                                migration drama, or January-March for predator action during calving season.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                    <div className="container-custom max-w-4xl text-center">
                        <h2 className="heading-secondary text-white mb-6">
                            Ready to Plan Your Kenya Safari?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Let our experts help you choose the perfect time and package for your dream safari.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages">
                                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-white text-lg px-8 py-4">
                                    Browse Safari Packages
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
                                    Get Free Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="section bg-white dark:bg-gray-900">
                    <div className="container-custom max-w-4xl">
                        <h3 className="heading-tertiary text-gray-900 dark:text-white mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Masai Mara Migration Guide', slug: 'masai-mara-migration-guide' },
                                { title: 'Kenya Safari Packing List', slug: 'kenya-safari-packing-list' },
                                { title: 'Big Five Safari Guide', slug: 'big-five-safari-guide' },
                            ].map((article, index) => (
                                <Link key={index} href={`/blog/${article.slug}`}>
                                    <div className="card p-4 hover:shadow-lg transition-shadow cursor-pointer">
                                        <h4 className="font-heading font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                                            {article.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </div>
    );
}
