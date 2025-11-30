import React from 'react';
import Link from 'next/link';
import Button from './Button';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero.jpg"
                    alt="Stunning Kenya safari landscape with elephants and acacia trees at sunset"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 gradient-overlay"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center text-white animate-fade-in pt-32">
                <h1 className="heading-primary mb-6 text-white drop-shadow-lg">
                    Discover Unforgettable Kenya Safari Packages
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
                    Experience the magic of Masai Mara tours, witness the Great Migration,
                    and explore Africa's most spectacular wildlife safaris with Kenya's trusted tour operator.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <Link href="#packages">
                        <Button variant="primary" className="text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform">
                            Explore Safari Packages
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-amber-600 shadow-lg hover:scale-105 transition-all font-semibold">
                            Talk to an Expert
                        </Button>
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap gap-8 justify-center items-center text-sm opacity-90">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>5-Star Rated Tours</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Licensed & Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span>10,000+ Happy Travelers</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
