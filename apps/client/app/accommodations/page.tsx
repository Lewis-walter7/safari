import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Luxury Safari Lodges & Camps in Kenya and Tanzania',
    description:
        'Discover our handpicked selection of premium safari lodges and tented camps. From Sarova Mara to Serengeti Serena, experience the best accommodation in East Africa.',
    keywords: [
        'Kenya safari lodges',
        'Tanzania safari camps',
        'Sarova Mara Game Camp',
        'Serengeti Serena',
        'Ngorongoro Serena',
        'luxury safari accommodation',
    ],
};

const accommodations = [
    {
        name: 'Sarova Mara Game Camp',
        location: 'Masai Mara, Kenya',
        description: 'Ideally located in the heart of the Masai Mara Game Reserve, offering a unique safari experience with luxury tents.',
        image: '/images/hotels/displayImages/sarovamara.png',
        rating: 4.8,
    },
    {
        name: 'Rhino Tourist Camp',
        location: 'Masai Mara, Kenya',
        description: 'A budget-friendly tented camp located near the Oloolaimutia Gate of the Masai Mara National Reserve.',
        image: '/images/hotels/displayImages/rhinocamp.png',
        rating: 4.2,
    },
    {
        name: 'Flamingo Hill Tented Camp',
        location: 'Lake Nakuru, Kenya',
        description: 'Nestled between the "honeymoon hills", offering a eco-friendly and luxurious safari experience in Lake Nakuru National Park.',
        image: '/images/hotels/displayImages/flamingo.png',
        rating: 4.7,
    },
    {
        name: 'Mara Simba Lodge',
        location: 'Masai Mara, Kenya',
        description: 'Situated along the Talek River, this lodge offers stunning views of the river and the wildlife that comes to drink.',
        image: '/images/hotels/displayImages/marasimba.png',
        rating: 4.5,
    },
    {
        name: 'Kibo Safari Camp',
        location: 'Amboseli, Kenya',
        description: 'A luxury tented camp in Amboseli National Park with spectacular views of Mount Kilimanjaro.',
        image: '/images/hotels/displayImages/kibosafari.png',
        rating: 4.6,
    },
    {
        name: 'Sarova Lion Hill Lodge',
        location: 'Lake Nakuru, Kenya',
        description: 'Located on a hill overlooking Lake Nakuru, offering panoramic views of the pink lake and the national park.',
        image: '/images/hotels/displayImages/sarovalion.png',
        rating: 4.8,
    },
    {
        name: 'Lake Manyara Serena',
        location: 'Lake Manyara, Tanzania',
        description: 'Perched on the edge of the Mto wa Mbu escarpment, offering breathtaking views of the Great Rift Valley and Lake Manyara.',
        image: '/images/hotels/displayImages/lakemanyara.png',
        rating: 4.7,
    },
    {
        name: 'Ngorongoro Serena Safari Lodge',
        location: 'Ngorongoro Crater, Tanzania',
        description: 'Built into the rim of the crater, this lodge offers arguably the best views of the Ngorongoro Crater.',
        image: '/images/hotels/displayImages/ngorongoroserena.png',
        rating: 4.9,
    },
    {
        name: 'Serengeti Serena Safari Lodge',
        location: 'Serengeti, Tanzania',
        description: 'Inspired by a traditional African village, this lodge is set high on a hill with sweeping views of the Serengeti plains.',
        image: '/images/hotels/displayImages/serengetiserena.png',
        rating: 4.8,
    },
    {
        name: 'Lake Burunge Tented Camp',
        location: 'Tarangire, Tanzania',
        description: 'Located on the shores of Lake Burunge, offering a close encounter with nature and wildlife in the Tarangire ecosystem.',
        image: '/images/hotels/displayImages/lakeburunge.png',
        rating: 4.5,
    },
    {
        name: 'Rhino Lodge',
        location: 'Ngorongoro, Tanzania',
        description: 'Ideally situated on the edge of the Ngorongoro Crater rim, offering a perfect base for exploring the crater.',
        image: '/images/hotels/displayImages/rhinolodge.png',
        rating: 4.4,
    },
    {
        name: 'Serengeti Katikati Tented Camp',
        location: 'Serengeti, Tanzania',
        description: 'A mobile tented camp located in Central Serengeti, offering a comfortable and authentic safari experience.',
        image: '/images/hotels/displayImages/serengetikatikati.png',
        rating: 4.6,
    },
    {
        name: 'Mbalageti Tented Camp',
        location: 'Serengeti, Tanzania',
        description: 'Located in the Western Corridor of the Serengeti, offering stunning views of the plains and the Mbalageti River.',
        image: '/images/hotels/displayImages/mbalageti.png',
        rating: 4.7,
    },
];

export default function AccommodationsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-amber-700 to-orange-700 dark:from-gray-800 dark:to-gray-900 text-white py-24 mt-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="heading-primary text-white mb-6">
                            Hotels & Lodges
                        </h1>
                        <p className="text-xl opacity-90 leading-relaxed">
                            Experience the best of African hospitality. We have handpicked the finest
                            lodges and camps to ensure your safari is comfortable, luxurious, and unforgettable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accommodations Grid */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {accommodations.map((lodge, index) => (
                            <article key={index} className="card group h-full flex flex-col overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={lodge.image}
                                        alt={lodge.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {lodge.rating}
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="mb-2">
                                        <span className="text-sm font-medium text-amber-600 dark:text-amber-500">
                                            {lodge.location}
                                        </span>
                                    </div>
                                    <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">
                                        {lodge.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow">
                                        {lodge.description}
                                    </p>

                                    <Link href="/contact">
                                        <Button variant="outline" className="w-full">
                                            Check Availability
                                        </Button>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
