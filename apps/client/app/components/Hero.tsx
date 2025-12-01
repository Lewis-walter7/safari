'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

const slides = [
    {
        image: '/images/hero/maasaimaralions.png',
        location: 'Maasai Mara National Reserve',
        tagline: 'Witness the Great Migration',
        link: '/destinations/masai-mara',
    },
    {
        image: '/images/hero/amboseli.png',
        location: 'Amboseli National Park',
        tagline: 'Elephants with Kilimanjaro backdrop',
        link: '/destinations/amboseli',
    },
    {
        image: '/images/hero/lakenakuru.png',
        location: 'Lake Nakuru National Park',
        tagline: 'Flamingos and rhino sanctuary',
        link: '/destinations/lake-nakuru',
    },
    {
        image: '/images/hero/ngorongoro.png',
        location: 'Ngorongoro Crater',
        tagline: 'Africa\'s Garden of Eden',
        link: '/destinations/ngorongoro',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setIsTransitioning(false);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, 500); // Match the transition duration
    };

    const goToNextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 500); // Match the transition duration
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Carousel Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={`${slide.location} - ${slide.tagline}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for contrast */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hidden md:block"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hidden md:block"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Main Hero Content */}
            <div className="container-custom relative z-10 text-center text-white animate-fade-in pt-32">
                <h1 className="heading-primary mb-6 text-white drop-shadow-lg">
                    Your African Safari Adventure Awaits
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
                    Embark on an unforgettable journey through the heart of Africa. Discover breathtaking wildlife, stunning landscapes, and rich cultural experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <Link href="#packages">
                        <Button variant="primary" className="text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform">
                            Explore Safari Packages
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-lg hover:scale-105 transition-all font-semibold">
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

            {/* Floating Info Card - Bottom Right on Desktop, Bottom Center on Mobile */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 left-8 md:left-auto z-20 max-w-sm">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/15">
                    <h3 className="text-white text-2xl font-heading font-bold mb-2">
                        {slides[currentSlide].location}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                        {slides[currentSlide].tagline}
                    </p>
                    <Link href={slides[currentSlide].link}>
                        <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
