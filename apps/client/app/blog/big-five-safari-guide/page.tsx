import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Big Five Safari Guide - How to Spot Africa\'s Iconic Wildlife',
    description:
        'Learn about the Big Five (lion, leopard, elephant, buffalo, rhino), their behaviors, habitats, and expert tips for spotting them on safari.',
    keywords: [
        'Big Five safari',
        'African wildlife guide',
        'spotting lions Kenya',
        'rhino conservation Kenya',
        'leopard tracking tips',
    ],
};

export default function BigFivePage() {
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
                            Big Five Safari Guide - How to Spot Africa's Iconic Wildlife
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <span>Published: October 28, 2024</span>
                            <span>•</span>
                            <span>9 min read</span>
                            <span>•</span>
                            <span>By Safari Adventures Kenya</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container-custom max-w-4xl prose prose-lg dark:prose-invert">
                        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                            The term "Big Five" was originally coined by big-game hunters to refer to the five most difficult
                            animals to hunt on foot. Today, the only shooting we do is with cameras, but the name has stuck.
                            Seeing all five—Lion, Leopard, Elephant, Buffalo, and Rhino—on a single safari is the ultimate prize.
                        </p>

                        <div className="space-y-12">
                            {/* Lion */}
                            <div>
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">1. The Lion (Simba)</h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    The undisputed king of the savannah. Lions are social cats living in prides.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Where to spot them:</strong> Masai Mara, Amboseli, Tsavo.</li>
                                    <li><strong>Best time:</strong> Early morning or late afternoon when they are active. Midday, they sleep in the shade.</li>
                                    <li><strong>Fun fact:</strong> A lion's roar can be heard up to 8km (5 miles) away.</li>
                                </ul>
                            </div>

                            {/* Leopard */}
                            <div>
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">2. The Leopard (Chui)</h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    The most elusive and solitary of the Big Five. Masters of camouflage.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Where to spot them:</strong> Samburu, Masai Mara, Lake Nakuru. Look up in acacia trees!</li>
                                    <li><strong>Best time:</strong> Dawn and dusk. They are nocturnal hunters.</li>
                                    <li><strong>Fun fact:</strong> Leopards are strong enough to haul a kill heavier than themselves up a tree to keep it safe from hyenas.</li>
                                </ul>
                            </div>

                            {/* Elephant */}
                            <div>
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">3. The African Elephant (Tembo)</h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    The world's largest land mammal. Highly intelligent and emotional.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Where to spot them:</strong> Amboseli (famous for big tuskers), Tsavo, Samburu.</li>
                                    <li><strong>Best time:</strong> Anytime! They are huge and hard to miss.</li>
                                    <li><strong>Fun fact:</strong> Elephants communicate using low-frequency rumbles that can travel through the ground.</li>
                                </ul>
                            </div>

                            {/* Buffalo */}
                            <div>
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">4. The Cape Buffalo (Nyati)</h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Often considered the most dangerous of the Big Five due to their unpredictable nature.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Where to spot them:</strong> Almost all national parks in Kenya.</li>
                                    <li><strong>Best time:</strong> Often found near water sources.</li>
                                    <li><strong>Fun fact:</strong> Old, solitary bulls are known as "dagga boys" (mud boys) and are notoriously grumpy.</li>
                                </ul>
                            </div>

                            {/* Rhino */}
                            <div>
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">5. The Rhinoceros (Kifaru)</h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Critically endangered. Kenya is one of the best places to see both Black and White Rhinos.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li><strong>Where to spot them:</strong> Lake Nakuru, Ol Pejeta Conservancy, Lewa Conservancy.</li>
                                    <li><strong>Best time:</strong> Early morning.</li>
                                    <li><strong>Fun fact:</strong> The difference between black and white rhinos isn't color, but lip shape (hooked for black, square for white).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-600 p-6 rounded-r-lg mt-12 mb-8">
                            <p className="text-gray-900 dark:text-white font-medium">
                                <strong>Conservation Note:</strong> While spotting the Big Five is exciting, remember that
                                they face threats from poaching and habitat loss. By visiting national parks and conservancies,
                                your park fees contribute directly to their protection.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-gray-700 to-gray-800 text-white">
                    <div className="container-custom max-w-4xl text-center">
                        <h2 className="heading-secondary text-white mb-6">
                            Go on a Big Five Safari
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Our expert guides know exactly where to find them. Join us for the adventure of a lifetime!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/packages">
                                <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-white text-lg px-8 py-4">
                                    View Safari Packages
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
