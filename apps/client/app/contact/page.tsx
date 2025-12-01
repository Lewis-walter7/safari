'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        travelDates: '',
        groupSize: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white py-24 mt-16">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="heading-primary text-white mb-6">
                            Contact Us - Book Your Kenya Safari
                        </h1>
                        <p className="text-xl opacity-90 leading-relaxed">
                            Ready for an unforgettable African adventure? Get in touch with our safari experts
                            for a free,  personalized quote tailored to your preferences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-6">
                                Get in Touch
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            123 Safari Street<br />
                                            Nairobi, Kenya 00100
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            +254 702 075 876 / +254 713 091 092<br />
                                            Available 24/7
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            info@safariadventureskenya.com<br />
                                            Response within 24 hours
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800/50 rounded-xl">
                                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-3">
                                    Office Hours
                                </h3>
                                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday:</span>
                                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span className="font-medium">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="card p-8">
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-6">
                                    Request a Free Quote
                                </h2>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-gray-100 border-l-4 border-emerald-600 text-emerald-800 rounded">
                                        Thank you for your inquiry! We'll get back to you within 24 hours.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="input"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="input"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="input"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Preferred Destination
                                            </label>
                                            <select
                                                id="destination"
                                                name="destination"
                                                value={formData.destination}
                                                onChange={handleChange}
                                                className="input"
                                            >
                                                <option value="">Select a destination</option>
                                                <option value="masai-mara">Masai Mara</option>
                                                <option value="amboseli">Amboseli</option>
                                                <option value="tsavo">Tsavo</option>
                                                <option value="samburu">Samburu</option>
                                                <option value="lake-nakuru">Lake Nakuru</option>
                                                <option value="custom">Custom/Multiple</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="travelDates" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Preferred Travel Dates
                                            </label>
                                            <input
                                                type="text"
                                                id="travelDates"
                                                name="travelDates"
                                                value={formData.travelDates}
                                                onChange={handleChange}
                                                className="input"
                                                placeholder="e.g., July 2025"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Group Size
                                            </label>
                                            <input
                                                type="text"
                                                id="groupSize"
                                                name="groupSize"
                                                value={formData.groupSize}
                                                onChange={handleChange}
                                                className="input"
                                                placeholder="e.g., 2 adults, 1 child"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Additional Information
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="textarea"
                                            placeholder="Tell us about your safari preferences, budget, special requirements..."
                                        />
                                    </div>

                                    <Button type="submit" variant="primary" className="w-full text-lg py-4">
                                        Send Inquiry
                                    </Button>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                                        By submitting this form, you agree to our privacy policy and terms of service.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
