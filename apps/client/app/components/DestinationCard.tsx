import React from 'react';
import Link from 'next/link';
import { Destination } from '../data/destinations';

export default function DestinationCard({ destination }: { destination: Destination }) {
    return (
        <Link href={`/destinations/${destination.slug}`}>
            <article className="card group cursor-pointer">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                    <img
                        src={destination.image}
                        alt={`${destination.name} - Kenya safari destination`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        {destination.featured && (
                            <span className="badge badge-secondary mb-2">{destination.featured}</span>
                        )}
                        <h3 className="heading-tertiary text-white mb-2">{destination.name}</h3>
                        <p className="text-sm text-gray-200 line-clamp-2">{destination.description}</p>
                    </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        Explore Destination
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </div>
            </article>
        </Link>
    );
}
