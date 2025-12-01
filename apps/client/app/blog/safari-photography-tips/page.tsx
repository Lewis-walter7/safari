import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Kenya Safari Photography Tips - Capture Stunning Wildlife Shots',
    description:
        'Master the art of wildlife photography with our expert tips on camera settings, composition, lighting, and ethical photography practices.',
    keywords: [
        'safari photography tips',
        'wildlife photography Kenya',
        'camera settings for safari',
        'best lens for safari',
        'photographic safari guide',
    ],
};

export default function PhotographyTipsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Article Header */}
            <article className="mt-16">
                <section className="bg-white dark:bg-gray-900 py-12">
                    <div className="container-custom max-w-4xl">
                        <div className="mb-6">
                            <span className="badge bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">Photography</span>
                        </div>
                        <h1 className="heading-primary text-gray-900 dark:text-white mb-6">
                            Kenya Safari Photography Tips - Capture Stunning Wildlife Shots
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <span>Published: October 15, 2024</span>
                            <span>•</span>
                            <span>11 min read</span>
                            <span>•</span>
                            <span>By Safari Adventures Kenya</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            You don't need to be a National Geographic pro to take amazing photos on safari. With stunning
                            landscapes and abundant wildlife, Kenya does half the work for you. However, wildlife photography
                            presents unique challenges. Here are our top tips to help you capture the magic.
                        </p>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            1. The Golden Hour is King
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            The light in Africa is harsh at midday. The best photos are taken during the "Golden Hour"—the
                            first hour after sunrise and the last hour before sunset. The light is soft, warm, and
                            directional, adding depth and texture to your images.
                        </p>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            2. Composition: Rule of Thirds & Eye Level
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li><strong>Rule of Thirds:</strong> Don't just put the animal in the center. Place the subject off-center for a more dynamic composition.</li>
                            <li><strong>Eye Level:</strong> Try to get down to the animal's eye level (safely!). Photos taken looking down on an animal can feel detached. Bean bags on the vehicle door help with stability.</li>
                            <li><strong>Space to Move:</strong> Leave space in the frame for the animal to "look" or "move" into.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            3. Camera Settings Cheat Sheet
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Wildlife moves fast. You need to be ready.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700 dark:text-gray-300">
                            <li><strong>Shutter Speed:</strong> Keep it fast! At least 1/1000s for moving animals, faster for birds in flight.</li>
                            <li><strong>Aperture:</strong> Use a wide aperture (low f-number like f/2.8 or f/4) to blur the background and isolate the subject (bokeh).</li>
                            <li><strong>ISO:</strong> Don't be afraid to bump up your ISO in low light. A grainy sharp photo is better than a blurry clean one.</li>
                            <li><strong>Burst Mode:</strong> Always shoot in continuous/burst mode to capture the perfect split-second moment.</li>
                        </ul>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            4. Focus on the Eyes
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            If the eyes aren't sharp, the photo usually doesn't work. Use single-point autofocus and aim
                            directly for the eye of the subject.
                        </p>

                        <h2 className="heading-tertiary text-gray-900 dark:text-white mt-12 mb-6">
                            5. Don't Forget the Environment
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            Close-up portraits are great, but "environmental portraits" tell a story. Zoom out to show the
                            animal in its vast habitat—a lone elephant against Mount Kilimanjaro or a lion in the tall grass.
                        </p>

                        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-600 p-6 rounded-r-lg mt-12 mb-8">
                            <p className="text-gray-900 dark:text-white font-medium">
                                <strong>Equipment Tip:</strong> You don't need a $10,000 lens. A zoom lens reaching 300mm or
                                400mm is plenty for most situations. Even modern smartphones take incredible landscape and
                                close-range video!
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                    <div className="container-custom max-w-4xl text-center">
                        <h2 className="heading-secondary text-white mb-6">
                            Capture Your Masterpiece
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join our specialized photographic safaris with expert guides who understand lighting and positioning.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages">
                                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-white text-lg px-8 py-4">
                                    View Photo Safaris
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
