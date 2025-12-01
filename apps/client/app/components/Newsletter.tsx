'use client';

import React, { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting newsletter:', error);
            setStatus('error');
        }
    };

    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 mb-16 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Get Your Free Safari Packing Guide
                    </h3>
                    <p className="text-amber-100 dark:text-gray-300 text-lg">
                        Join our community of travelers and receive our ultimate packing checklist, expert tips, and exclusive safari offers directly to your inbox.
                    </p>
                </div>

                <div className="w-full max-w-md">
                    {status === 'success' ? (
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 animate-fade-in">
                            <svg className="w-12 h-12 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="text-xl font-bold text-white mb-2">You're on the list!</h4>
                            <p className="text-amber-100">Check your inbox for your free guide.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all"
                                    disabled={status === 'loading'}
                                />
                                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-8 py-4 bg-white text-amber-600 font-bold text-lg rounded-xl hover:bg-amber-50 hover:scale-105 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Me The Guide'}
                            </button>
                            <p className="text-xs text-amber-100/60 text-center">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
