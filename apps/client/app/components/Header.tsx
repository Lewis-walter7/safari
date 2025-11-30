'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { theme, toggleTheme } = useTheme();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${isScrolled
                ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg py-3'
                : 'bg-gradient-to-r from-amber-600/90 to-orange-600/90 dark:from-gray-900/90 dark:to-gray-800/90 py-4 shadow-md'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <svg
                            className={`w-10 h-10 transition-colors ${isScrolled
                                ? 'text-amber-600 dark:text-amber-500'
                                : 'text-white'
                                }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" />
                        </svg>
                        <div>
                            <div className={`font-heading font-bold text-xl transition-colors ${isScrolled
                                ? 'text-gray-900 dark:text-white'
                                : 'text-white'
                                }`}>
                                Safari Adventures
                            </div>
                            <div className={`text-xs transition-colors ${isScrolled
                                ? 'text-amber-600 dark:text-amber-500'
                                : 'text-amber-100'
                                }`}>
                                Kenya
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Safari', href: '/packages' },
                            { name: 'Destinations', href: '/destinations' },
                            { name: 'Hotels & Lodges', href: '/accommodations' },
                            { name: 'About', href: '/about' },
                            { name: 'Blog', href: '/blog' },
                            { name: 'Contact', href: '/contact' },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400 ${isScrolled
                                        ? 'text-gray-700 dark:text-gray-200'
                                        : 'text-white hover:text-amber-100'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Theme Toggle */}
                        <li>
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg transition-all hover:scale-110 ${isScrolled
                                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                    }`}
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                            </button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all ${isScrolled
                                ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
                                : 'bg-white/20 text-white'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className={`p-2 rounded-lg transition-all ${isScrolled
                                ? 'text-gray-900 dark:text-gray-200'
                                : 'text-white'
                                }`}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <ul className="flex flex-col">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Safari Packages', href: '/packages' },
                                { name: 'Destinations', href: '/destinations' },
                                { name: 'Hotels & Lodges', href: '/accommodations' },
                                { name: 'About', href: '/about' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
