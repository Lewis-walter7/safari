'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

type Step = 'when' | 'who' | 'what' | 'budget' | 'contact' | 'success';

interface FormData {
    month: string;
    year: string;
    travelers: string;
    travelerType: string;
    interests: string[];
    budget: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}

const INTERESTS = [
    'Big Five',
    'Great Migration',
    'Bird Watching',
    'Photography',
    'Cultural Visits',
    'Beach Relaxation',
    'Hiking/Trekking',
    'Luxury Lodges',
];

export default function PlanYourSafariPage() {
    const [currentStep, setCurrentStep] = useState<Step>('when');
    const [formData, setFormData] = useState<FormData>({
        month: '',
        year: new Date().getFullYear().toString(),
        travelers: '2',
        travelerType: 'Couple',
        interests: [],
        budget: '',
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleNext = () => {
        const steps: Step[] = ['when', 'who', 'what', 'budget', 'contact', 'success'];
        const currentIndex = steps.indexOf(currentStep);
        if (currentIndex < steps.length - 1) {
            setCurrentStep(steps[currentIndex + 1]);
        }
    };

    const handleBack = () => {
        const steps: Step[] = ['when', 'who', 'what', 'budget', 'contact', 'success'];
        const currentIndex = steps.indexOf(currentStep);
        if (currentIndex > 0) {
            setCurrentStep(steps[currentIndex - 1]);
        }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/planner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setCurrentStep('success');
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting plan:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const updateField = (field: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const toggleInterest = (interest: string) => {
        setFormData((prev) => {
            const newInterests = prev.interests.includes(interest)
                ? prev.interests.filter((i) => i !== interest)
                : [...prev.interests, interest];
            return { ...prev, interests: newInterests };
        });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 'when':
                return (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="heading-secondary text-gray-900 dark:text-white">When do you want to travel?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Month</label>
                                <select
                                    value={formData.month}
                                    onChange={(e) => updateField('month', e.target.value)}
                                    className="input w-full"
                                >
                                    <option value="">Select Month</option>
                                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Year</label>
                                <select
                                    value={formData.year}
                                    onChange={(e) => updateField('year', e.target.value)}
                                    className="input w-full"
                                >
                                    {[2024, 2025, 2026].map((y) => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                );
            case 'who':
                return (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="heading-secondary text-gray-900 dark:text-white">Who are you traveling with?</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Number of Travelers</label>
                            <input
                                type="number"
                                min="1"
                                value={formData.travelers}
                                onChange={(e) => updateField('travelers', e.target.value)}
                                className="input w-full"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Group Type</label>
                            <div className="grid grid-cols-2 gap-4">
                                {['Solo', 'Couple', 'Family', 'Group of Friends', 'Corporate'].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => updateField('travelerType', type)}
                                        className={`p-4 rounded-lg border-2 transition-all ${formData.travelerType === type
                                            ? 'border-amber-600 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
                                            : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'what':
                return (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="heading-secondary text-gray-900 dark:text-white">What are your interests?</h2>
                        <p className="text-gray-600 dark:text-gray-400">Select all that apply</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {INTERESTS.map((interest) => (
                                <button
                                    key={interest}
                                    type="button"
                                    onClick={() => toggleInterest(interest)}
                                    className={`p-4 rounded-lg border-2 transition-all text-sm font-medium ${formData.interests.includes(interest)
                                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
                                        }`}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'budget':
                return (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="heading-secondary text-gray-900 dark:text-white">What is your budget?</h2>
                        <p className="text-gray-600 dark:text-gray-400">Per person, excluding international flights</p>
                        <div className="grid grid-cols-1 gap-4">
                            {['$1,000 - $2,000 (Budget)', '$2,000 - $4,000 (Mid-Range)', '$4,000 - $7,000 (Luxury)', '$7,000+ (Ultra Luxury)'].map((range) => (
                                <button
                                    key={range}
                                    type="button"
                                    onClick={() => updateField('budget', range)}
                                    className={`p-4 rounded-lg border-2 transition-all text-left ${formData.budget === range
                                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400'
                                        : 'border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-700'
                                        }`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="space-y-6 animate-fadeIn">
                        <h2 className="heading-secondary text-gray-900 dark:text-white">How can we reach you?</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => updateField('name', e.target.value)}
                                    className="input w-full"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => updateField('email', e.target.value)}
                                    className="input w-full"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number (Optional)</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => updateField('phone', e.target.value)}
                                    className="input w-full"
                                    placeholder="+1 234 567 890"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Any specific requests?</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => updateField('message', e.target.value)}
                                    className="input w-full h-32"
                                    placeholder="Tell us more about your dream safari..."
                                />
                            </div>
                        </div>
                    </div>
                );
            case 'success':
                return (
                    <div className="text-center space-y-6 animate-fadeIn py-12">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="heading-secondary text-gray-900 dark:text-white">Request Received!</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                            Thank you for planning your safari with us. One of our expert travel consultants will review your preferences and contact you within 24 hours with a custom itinerary.
                        </p>
                        <div className="pt-8">
                            <Button href="/" variant="primary">
                                Return to Home
                            </Button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            <div className="container-custom py-32">
                <div className="max-w-3xl mx-auto">
                    {/* Progress Bar */}
                    {currentStep !== 'success' && (
                        <div className="mb-12">
                            <div className="flex justify-between mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                <span>Start</span>
                                <span>Preferences</span>
                                <span>Finish</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-amber-600 transition-all duration-500 ease-out"
                                    style={{
                                        width: `${(['when', 'who', 'what', 'budget', 'contact', 'success'].indexOf(currentStep) / 4) * 100}%`
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                        <form onSubmit={handleSubmit}>
                            {renderStep()}

                            {currentStep !== 'success' && (
                                <div className="flex justify-between mt-12 pt-8 border-t border-gray-100 dark:border-gray-700">
                                    {currentStep !== 'when' ? (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="px-6 py-3 text-gray-600 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
                                        >
                                            Back
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}

                                    {currentStep === 'contact' ? (
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            className="px-8"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit Request'}
                                        </Button>
                                    ) : (
                                        <Button type="button" onClick={handleNext} variant="primary" className="px-8">
                                            Next Step
                                        </Button>
                                    )}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
