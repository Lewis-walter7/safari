import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Privacy Policy - Safari Adventures Kenya',
    description: 'Privacy policy for Safari Adventures Kenya. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 mt-16">
                <div className="container-custom">
                    <h1 className="heading-primary text-white mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg opacity-90">
                        Last updated: December 1, 2024
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div className="container-custom max-w-4xl">
                    <div className="card p-8 md:p-12 space-y-8">

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                1. Introduction
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Safari Adventures Kenya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or book our safari services.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                2. Information We Collect
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p className="font-semibold text-gray-900 dark:text-white">Personal Information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name, email address, phone number, and postal address</li>
                                    <li>Payment information (processed securely through third-party providers)</li>
                                    <li>Passport details and travel preferences</li>
                                    <li>Dietary requirements and special needs</li>
                                    <li>Emergency contact information</li>
                                </ul>

                                <p className="font-semibold text-gray-900 dark:text-white mt-6">Automatically Collected Information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>IP address and browser type</li>
                                    <li>Device information and operating system</li>
                                    <li>Pages visited and time spent on our website</li>
                                    <li>Referring website addresses</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                3. How We Use Your Information
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Processing and managing your safari bookings</li>
                                <li>Communicating with you about your trip</li>
                                <li>Providing customer support and responding to inquiries</li>
                                <li>Sending promotional materials (with your consent)</li>
                                <li>Improving our services and website functionality</li>
                                <li>Complying with legal obligations</li>
                                <li>Preventing fraud and ensuring security</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                4. Information Sharing and Disclosure
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>We may share your information with:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-gray-900 dark:text-white">Service Providers:</strong> Hotels, lodges, airlines, and ground transportation companies</li>
                                    <li><strong className="text-gray-900 dark:text-white">Payment Processors:</strong> Secure third-party payment gateways</li>
                                    <li><strong className="text-gray-900 dark:text-white">Government Authorities:</strong> When required by law or for visa/permit processing</li>
                                    <li><strong className="text-gray-900 dark:text-white">Insurance Providers:</strong> If you purchase travel insurance through us</li>
                                </ul>
                                <p className="mt-4">
                                    We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                5. Data Security
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                6. Cookies and Tracking Technologies
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookies through your browser settings. Types of cookies we use:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li><strong className="text-gray-900 dark:text-white">Essential Cookies:</strong> Required for website functionality</li>
                                <li><strong className="text-gray-900 dark:text-white">Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                <li><strong className="text-gray-900 dark:text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                7. Your Rights
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Access your personal information</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data (subject to legal obligations)</li>
                                <li>Object to processing of your information</li>
                                <li>Withdraw consent for marketing communications</li>
                                <li>Request data portability</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                8. Data Retention
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Booking records are typically retained for 7 years for tax and legal purposes.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                9. Children's Privacy
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our services are not directed to children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                10. International Transfers
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Your information may be transferred to and processed in countries other than Kenya. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                11. Changes to This Policy
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg">
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                12. Contact Us
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                            </p>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                <p><strong className="text-gray-900 dark:text-white">Safari Adventures Kenya</strong></p>
                                <p>123 Safari Street, Nairobi, Kenya 00100</p>
                                <p>Email: privacy@safariadventureskenya.com</p>
                                <p>Phone: +254 702 075 876 / +254 713 091 092</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
