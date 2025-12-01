import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Kenya Safari Blog - Tips, Guides & Travel Insights',
    description:
        'Discover expert safari tips, travel guides, and insider insights about Kenya wildlife tours. Learn about the best time to visit, Masai Mara migration, packing tips, and more.',
    keywords: [
        'Kenya safari blog',
        'safari travel tips',
        'Masai Mara guide',
        'best time to visit Kenya',
        'safari packing list',
        'Kenya travel blog',
    ],
};

const blogPosts = [
    {
        title: 'Best Time to Visit Kenya for Safari - Complete Guide',
        slug: 'best-time-to-visit-kenya',
        excerpt: 'Discover the optimal times to visit Kenya for wildlife viewing, including seasonal highlights, weather patterns, and the Great Migration timeline.',
        category: 'Travel Planning',
        readTime: '8 min read',
        date: 'November 15, 2024',
        image: '/images/hero.jpg',
    },
    {
        title: 'Masai Mara Migration Guide - When & Where to Witness It',
        slug: 'masai-mara-migration-guide',
        excerpt: 'Everything you need to know about the Great Wildebeest Migration in the Masai Mara, including the best viewing months and prime locations.',
        category: 'Wildlife',
        readTime: '10 min read',
        date: 'November 10, 2024',
        image: '/images/hero.jpg',
    },
    {
        title: 'Kenya Safari Packing List - Essential Items for Your Trip',
        slug: 'kenya-safari-packing-list',
        excerpt: 'A comprehensive packing guide for your Kenya safari, including clothing recommendations, camera gear, health essentials, and what to leave at home.',
        category: 'Travel Tips',
        readTime: '7 min read',
        date: 'November 5, 2024',
        image: '/images/hero.jpg',
    },
    {
        title: 'Big Five Safari Guide - How to Spot Africa\'s Iconic Wildlife',
        slug: 'big-five-safari-guide',
        excerpt: 'Learn about the Big Five (lion, leopard, elephant, buffalo, rhino), their behaviors, habitats, and expert tips for spotting them on safari.',
        category: 'Wildlife',
        readTime: '9 min read',
        date: 'October 28, 2024',
        image: '/images/hero.jpg',
    },
    {
        title: 'Sustainable Safari Tourism - How to Travel Responsibly in Kenya',
        slug: 'sustainable-safari-tourism',
        excerpt: 'Discover how to minimize your environmental impact while on safari and support local communities and conservation efforts.',
        category: 'Conservation',
        readTime: '6 min read',
        date: 'October 20, 2024',
        image: '/images/hero.jpg',
    },
    {
        title: 'Kenya Safari Photography Tips - Capture Stunning Wildlife Shots',
        slug: 'safari-photography-tips',
        excerpt: 'Master the art of wildlife photography with our expert tips on camera settings, composition, lighting, and ethical photography practices.',
        category: 'Photography',
        readTime: '11 min read',
        date: 'October 15, 2024',
        image: '/images/hero.jpg',
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white py-24 mt-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="heading-primary text-white mb-6">
                            Kenya Safari Travel Blog
                        </h1>
                        <p className="text-xl opacity-90 leading-relaxed">
                            Expert tips, travel guides, and insider insights to help you plan the perfect
                            Kenya safari adventure. From wildlife spotting to travel planning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Link key={index} href={`/blog/${post.slug}`}>
                                <article className="card group cursor-pointer h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="badge bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">{post.category}</span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h2 className="heading-tertiary text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
