import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sustainable Safari Tourism - How to Travel Responsibly in Kenya',
    description:
        'Discover how to minimize your environmental impact while on safari and support local communities and conservation efforts.',
    keywords: [
        'sustainable tourism Kenya',
        'eco-friendly safari',
        'responsible travel Africa',
        'conservation safari',
        'community based tourism',
    ],
};

export default function SustainableTourismPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Article Header */}
            <article className="mt-16">
                <section className="bg-white dark:bg-gray-900 py-12">
                    <div className="container-custom max-w-4xl">
                        <div className="mb-6">
                            <span className="badge bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Conservation</span>
                        </div>
                        <h1 className="heading-primary text-gray-900 dark:text-white mb-6">
                            Sustainable Safari Tourism - How to Travel Responsibly in Kenya
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <span>Published: October 20, 2024</span>
                            <span>•</span>
                            <span>6 min read</span>
                            <span>•</span>
                            <span>By Safari Adventures Kenya</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            Tourism is a double-edged sword. It brings vital revenue for conservation and community development,
                            but it can also strain fragile ecosystems. As a traveler, your choices matter. Here is how you
                            can ensure your Kenya safari leaves a positive footprint.
                        </p>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            1. Choose Eco-Certified Lodges
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Look for camps and lodges that are "Eco-rated" by Ecotourism Kenya. These properties are audited
                            on their waste management, energy use, and community engagement. Gold and Silver rated camps
                            often use solar power, recycle water, and ban single-use plastics.
                        </p>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            2. Support Community Conservancies
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Conservancies are land owned by local communities (often Maasai or Samburu) who lease it for
                            tourism. This model ensures that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li>Local people benefit directly from tourism revenue.</li>
                            <li>Wildlife habitat is expanded beyond national park boundaries.</li>
                            <li>You get a more exclusive experience with fewer vehicles.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            3. Respect Wildlife
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Your guide wants you to get a great photo, but never at the expense of the animal's distress.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li>Never ask your driver to go off-road (unless in a designated area). It destroys habitat.</li>
                            <li>Keep noise levels down.</li>
                            <li>Never feed animals. It makes them aggressive and dependent.</li>
                            <li>Don't crowd around a sighting. If there are already 5 vehicles, wait your turn or move on.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            4. Reduce Plastic Waste
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Kenya has a strict ban on single-use plastic bags. Take it a step further:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li>Bring a reusable water bottle. Most lodges provide filtered water refill stations.</li>
                            <li>Refuse plastic straws.</li>
                            <li>Bring your own toiletries to avoid small plastic bottles.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            5. Buy Local and Ethical
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            When buying souvenirs, support local artisans directly. Visit village markets or women's
                            cooperatives (like the Kazuri Beads). Avoid buying products made from shells, coral, ivory,
                            or animal skins, as this fuels illegal trade.
                        </p>

                        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-600 p-6 rounded-r-lg mt-12 mb-8">
                            <p className="text-gray-900 dark:text-white font-medium">
                                <strong>Our Commitment:</strong> At Safari Adventures Kenya, we prioritize partners who share
                                our values. We employ local guides, support community projects, and offset our carbon footprint.
                                Ask us about our specific eco-friendly itineraries!
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                    <div className="container-custom max-w-4xl text-center">
                        <h2 className="heading-secondary text-white mb-6">
                            Travel with Purpose
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Experience the beauty of Kenya while helping to preserve it for future generations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages">
                                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-white text-lg px-8 py-4">
                                    View Eco-Safaris
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
                                    Contact Us
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
