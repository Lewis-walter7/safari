import React from 'react';
import Link from 'next/link';
import Button from './Button';

export interface SafariPackage {
    id: string;
    title: string;
    slug: string;
    duration: string;
    image: string;
    highlights: string[];
    rating: number;
    reviews: number;
}

interface SafariPackageCardProps {
    pkg: SafariPackage;
}

export default function SafariPackageCard({ pkg }: SafariPackageCardProps) {
    return (
        <article className="card group h-full flex flex-col overflow-hidden">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {pkg.rating} ({pkg.reviews})
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {pkg.title}
                </h3>

                <div className="mb-4 flex-grow">
                    <ul className="space-y-2">
                        {pkg.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{pkg.duration}</p>
                    </div>
                    <Link href={`/packages/${pkg.slug}`}>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
