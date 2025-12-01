'use client';

import React, { useState } from 'react';

type Season = 'Peak' | 'Shoulder' | 'Low';

interface MonthData {
    name: string;
    season: Season;
    weather: string;
    highlights: string[];
    parks: string[];
}

const months: MonthData[] = [
    {
        name: 'January',
        season: 'Peak',
        weather: 'Hot & Dry',
        highlights: ['Calving Season', 'Excellent Birding', 'Clear Views of Kilimanjaro'],
        parks: ['Amboseli', 'Tsavo', 'Masai Mara'],
    },
    {
        name: 'February',
        season: 'Peak',
        weather: 'Hot & Dry',
        highlights: ['Best for Big Cats', 'Calving Season Continues', 'Dry Landscapes'],
        parks: ['Masai Mara', 'Samburu', 'Laikipia'],
    },
    {
        name: 'March',
        season: 'Shoulder',
        weather: 'Hot, Occasional Rain',
        highlights: ['Lush Landscapes', 'Fewer Crowds', 'Good for Photography'],
        parks: ['Lake Nakuru', 'Tsavo'],
    },
    {
        name: 'April',
        season: 'Low',
        weather: 'Long Rains',
        highlights: ['Green Season', 'Baby Animals', 'Lowest Rates'],
        parks: ['Lake Nakuru', 'Nairobi National Park'],
    },
    {
        name: 'May',
        season: 'Low',
        weather: 'Long Rains',
        highlights: ['Lush Green Scenery', 'Exclusive Sightings', 'Bird Watching'],
        parks: ['Samburu', 'Ol Pejeta'],
    },
    {
        name: 'June',
        season: 'Shoulder',
        weather: 'Cool & Dry',
        highlights: ['Start of Dry Season', 'Migration Moving North', 'Good Visibility'],
        parks: ['Masai Mara', 'Amboseli'],
    },
    {
        name: 'July',
        season: 'Peak',
        weather: 'Cool & Dry',
        highlights: ['Great Migration Arrival', 'River Crossings', 'Peak Wildlife'],
        parks: ['Masai Mara', 'Lake Nakuru'],
    },
    {
        name: 'August',
        season: 'Peak',
        weather: 'Cool & Dry',
        highlights: ['Great Migration Peak', 'Dramatic River Crossings', 'Predator Action'],
        parks: ['Masai Mara'],
    },
    {
        name: 'September',
        season: 'Peak',
        weather: 'Warming Up',
        highlights: ['Migration Still Present', 'Excellent Game Viewing', 'Clear Skies'],
        parks: ['Masai Mara', 'Samburu'],
    },
    {
        name: 'October',
        season: 'Peak',
        weather: 'Warm & Dry',
        highlights: ['Migration Moving South', 'Short Rains Begin Late', 'Good for Walking Safaris'],
        parks: ['Masai Mara', 'Tsavo'],
    },
    {
        name: 'November',
        season: 'Shoulder',
        weather: 'Short Rains',
        highlights: ['Migratory Birds Arrive', 'Green Landscapes', 'Lower Rates'],
        parks: ['Amboseli', 'Meru'],
    },
    {
        name: 'December',
        season: 'Peak',
        weather: 'Warm, Short Rains',
        highlights: ['Festive Season', 'Bird Watching', 'Lush Scenery'],
        parks: ['Coast (Diani)', 'Tsavo', 'Amboseli'],
    },
];

const seasonColors: Record<Season, string> = {
    Peak: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    Shoulder: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
    Low: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
};

export default function BestTimeCalendar() {
    const [selectedMonth, setSelectedMonth] = useState<MonthData>(months[6]); // Default to July

    return (
        <section className="section bg-white dark:bg-gray-950">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="badge badge-primary mb-4">Plan Your Timing</span>
                    <h2 className="heading-secondary text-gray-900 dark:text-white mb-4">
                        Best Time to Visit Kenya
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Kenya is a year-round destination, but each month offers a unique experience.
                        Click on a month to see what to expect.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Calendar Grid */}
                    <div className="lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 gap-4">
                        {months.map((month) => (
                            <button
                                key={month.name}
                                onClick={() => setSelectedMonth(month)}
                                className={`p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-2 ${selectedMonth.name === month.name
                                        ? 'border-gray-900 dark:border-white shadow-lg scale-105 z-10'
                                        : 'border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900'
                                    } ${seasonColors[month.season]}`}
                            >
                                <span className="font-bold text-lg">{month.name.slice(0, 3)}</span>
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/50 dark:bg-black/20">
                                    {month.season}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Details Panel */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg animate-fade-in">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">
                                {selectedMonth.name}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${seasonColors[selectedMonth.season]}`}>
                                {selectedMonth.season} Season
                            </span>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Weather
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                    {selectedMonth.weather}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Highlights
                                </h4>
                                <ul className="space-y-2">
                                    {selectedMonth.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                            <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Best Parks
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedMonth.parks.map((park) => (
                                        <span key={park} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                                            {park}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-200 dark:bg-green-900"></div>
                        <span className="text-gray-600 dark:text-gray-400"><strong>Peak:</strong> Best wildlife viewing</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-amber-200 dark:bg-amber-900"></div>
                        <span className="text-gray-600 dark:text-gray-400"><strong>Shoulder:</strong> Good balance of price & weather</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-200 dark:bg-blue-900"></div>
                        <span className="text-gray-600 dark:text-gray-400"><strong>Low:</strong> Best rates, lush scenery</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
