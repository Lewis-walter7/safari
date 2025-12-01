import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Kenya Safari Packing List - Essential Items for Your Trip',
    description:
        'A comprehensive packing guide for your Kenya safari, including clothing recommendations, camera gear, health essentials, and what to leave at home.',
    keywords: [
        'Kenya safari packing list',
        'what to pack for safari',
        'safari clothing guide',
        'safari gear checklist',
        'Kenya travel essentials',
    ],
};

export default function PackingListPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Article Header */}
            <article className="mt-16">
                <section className="bg-white dark:bg-gray-900 py-12">
                    <div className="container-custom max-w-4xl">
                        <div className="mb-6">
                            <span className="badge bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Travel Tips</span>
                        </div>
                        <h1 className="heading-primary text-gray-900 dark:text-white mb-6">
                            Kenya Safari Packing List - Essential Items for Your Trip
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <span>Published: November 5, 2024</span>
                            <span>•</span>
                            <span>7 min read</span>
                            <span>•</span>
                            <span>By Safari Adventures Kenya</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            Packing for a safari can be tricky. You need to be prepared for cool mornings, hot afternoons,
                            dusty game drives, and potentially fancy dinners. Plus, small aircraft flights often have strict
                            luggage limits (usually 15kg in soft bags). Here is your ultimate checklist.
                        </p>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Clothing: The "Safari Look"
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Stick to neutral colors (khaki, beige, brown, green). Avoid bright colors (which can scare animals),
                            white (gets dirty instantly), and dark blue/black (attracts tsetse flies).
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li><strong>3-4 T-shirts/tops:</strong> Breathable fabrics are best.</li>
                            <li><strong>2 Long-sleeved shirts:</strong> For sun protection and cool evenings.</li>
                            <li><strong>2 Pairs of trousers:</strong> Zip-off convertible pants are very practical.</li>
                            <li><strong>1-2 Pairs of shorts:</strong> For lounging at the lodge.</li>
                            <li><strong>Warm fleece or jacket:</strong> Essential! Morning game drives are surprisingly cold.</li>
                            <li><strong>Lightweight rain jacket:</strong> Especially if traveling during the rainy season.</li>
                            <li><strong>Comfortable walking shoes:</strong> Hiking boots aren't necessary unless you're doing a walking safari; sturdy trainers work well.</li>
                            <li><strong>Sandals/flip-flops:</strong> For around the pool/lodge.</li>
                            <li><strong>Swimwear:</strong> Most lodges have pools.</li>
                            <li><strong>Sun hat & sunglasses:</strong> Non-negotiable.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Toiletries & Health
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li><strong>Sunscreen:</strong> High SPF, the equatorial sun is strong.</li>
                            <li><strong>Insect repellent:</strong> Look for DEET-based products.</li>
                            <li><strong>Malaria prophylaxis:</strong> Consult your doctor before travel.</li>
                            <li><strong>Personal first aid kit:</strong> Painkillers, antihistamines, plasters, rehydration salts.</li>
                            <li><strong>Hand sanitizer & wet wipes:</strong> Very useful on dusty game drives.</li>
                            <li><strong>Moisturizer & lip balm:</strong> The air can be very dry.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Gadgets & Gear
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li><strong>Camera & lenses:</strong> Don't forget extra memory cards!</li>
                            <li><strong>Binoculars:</strong> Every guest should have their own pair (8x42 or 10x42 are ideal).</li>
                            <li><strong>Power bank:</strong> To charge phones/cameras on the go.</li>
                            <li><strong>Travel adapter:</strong> Kenya uses Type G (British style) plugs.</li>
                            <li><strong>Headlamp/flashlight:</strong> Useful for walking around camps at night.</li>
                        </ul>

                        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-600 p-6 rounded-r-lg mb-8">
                            <p className="text-gray-900 dark:text-white font-medium">
                                <strong>Important Luggage Tip:</strong> If you are flying between parks (e.g., Nairobi to Masai Mara),
                                airlines like Safarilink and Airkenya strictly enforce a 15kg (33lbs) limit, including hand luggage.
                                Bags MUST be soft-sided (duffel bags) to fit into the small cargo pods. Hard-shell suitcases may be left behind!
                            </p>
                        </div>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            Documents & Money
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li><strong>Passport:</strong> Valid for at least 6 months beyond travel dates.</li>
                            <li><strong>eTA (Electronic Travel Authorisation):</strong> Apply online before travel.</li>
                            <li><strong>Yellow Fever Certificate:</strong> Required if arriving from a country with risk of yellow fever.</li>
                            <li><strong>Travel Insurance Policy:</strong> Printed copy or saved on phone.</li>
                            <li><strong>US Dollars:</strong> Bring newer bills (2009 onwards) for tips and souvenirs. Credit cards are widely accepted at lodges.</li>
                        </ul>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                    <div className="container-custom max-w-4xl text-center">
                        <h2 className="heading-secondary text-white mb-6">
                            Packed and Ready to Go?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Now that you know what to bring, let's get your safari booked!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages">
                                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-white text-lg px-8 py-4">
                                    Browse Safari Packages
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
