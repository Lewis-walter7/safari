import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Refund Policy - Safari Adventures Kenya',
    description: 'Refund policy for Safari Adventures Kenya. Learn about our refund eligibility, processing times, and cancellation terms.',
};

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 mt-16">
                <div className="container-custom">
                    <h1 className="heading-primary text-white mb-4">
                        Refund Policy
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
                                1. Overview
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We aim to give you a seamless safari booking experience. If something doesn't go right, you may be eligible for a refund depending on the situation described below.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                By making a payment on our platform, you agree to this Refund Policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                2. Eligibility for Refunds
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Refunds may be issued if:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>You were charged twice for the same transaction</li>
                                <li>A payment went through but the booking was not confirmed</li>
                                <li>The safari you purchased was cancelled by us</li>
                                <li>A system or processing error occurred during checkout</li>
                                <li>You made a valid cancellation request within the allowed time window (see Cancellation Policy in Terms & Conditions)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                3. Non-Refundable Cases
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                We cannot issue refunds for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Safaris already completed or services already delivered</li>
                                <li>Digital materials that have been accessed or downloaded (itineraries, guides, etc.)</li>
                                <li>Transactions made using incorrect personal details provided by the user</li>
                                <li>Change of mind after the cancellation period has passed</li>
                                <li>Cancellations made less than 14 days before departure (see Terms &amp; Conditions)</li>
                                <li>No-shows or failure to join scheduled safari activities</li>
                                <li>Services clearly marked as non-refundable at time of booking</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                4. Refund Requests
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                To request a refund, contact us with the following information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                                <li>Full name</li>
                                <li>Phone number or email used during booking</li>
                                <li>Transaction ID or booking reference number (very important)</li>
                                <li>Date of payment</li>
                                <li>Detailed reason for the refund request</li>
                            </ul>
                            <div className="bg-gray-100 dark:bg-gray-800/50 p-4 rounded-lg">
                                <p className="text-gray-900 dark:text-white font-semibold mb-2">Send your request to:</p>
                                <p className="text-gray-600 dark:text-gray-300">📧 support@safariadventureskenya.com</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                5. Refund Processing Time
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Once your refund request is approved, processing times are as follows:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                                <li>
                                    <strong className="text-gray-900 dark:text-white">Mobile Money (M-Pesa & Airtel Money):</strong> 24 hours – 3 business days
                                </li>
                                <li>
                                    <strong className="text-gray-900 dark:text-white">Card Payments:</strong> 3 – 7 business days (depending on your bank)
                                </li>
                                <li>
                                    <strong className="text-gray-900 dark:text-white">Bank Transfers:</strong> 5 – 10 business days for international transfers
                                </li>
                                <li>
                                    <strong className="text-gray-900 dark:text-white">Pesapal Wallet:</strong> Usually instant or within a few hours
                                </li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4 italic">
                                * Processing speed depends on the payment processor (Pesapal), your bank, and your mobile money provider.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                6. Chargebacks
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                If you initiate a chargeback through your bank or mobile money provider:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Your account may be temporarily suspended pending investigation</li>
                                <li>We will cooperate with Pesapal and financial institutions to investigate the claim</li>
                                <li>If the chargeback is found to be fraudulent, we may deny future services</li>
                                <li>Please contact us first before initiating a chargeback - we're here to help resolve issues</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                7. Cancellation Policy
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Our cancellation policy determines refund eligibility:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li><strong className="text-gray-900 dark:text-white">30+ days before departure:</strong> 100% refund</li>
                                <li><strong className="text-gray-900 dark:text-white">14-29 days before departure:</strong> 50% refund</li>
                                <li><strong className="text-gray-900 dark:text-white">0-13 days before departure:</strong> No refund</li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                Late cancellations or no-shows will be charged fully. For complete details, refer to our Terms and Conditions.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                8. Errors & Failed Transactions
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                If payment is deducted from your account but doesn't reflect in our booking system:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Pesapal usually auto-reverses failed transactions within a few hours</li>
                                <li>If the reversal doesn't happen automatically, contact us immediately with your transaction details</li>
                                <li>We'll escalate the issue to Pesapal support on your behalf</li>
                                <li>Keep your transaction confirmation and receipt for reference</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                9. Partial Refunds
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                In some cases, partial refunds may be issued if only part of your safari package was affected by cancellation or service issues. The refund amount will be calculated based on the unused portion of services.
                            </p>
                        </div>

                        <div>
                            <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg">
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                    10. Contact Support
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    For refund inquiries and support, reach us at:
                                </p>
                                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <p>📧 <strong className="text-gray-900 dark:text-white">Email:</strong> support@safariadventureskenya.com</p>
                                    <p>📞 <strong className="text-gray-900 dark:text-white">Phone:</strong> +254 702 075 876 / +254 713 091 092</p>
                                    <p>🏢 <strong className="text-gray-900 dark:text-white">Office:</strong> 123 Safari Street, Nairobi, Kenya 00100</p>
                                    <p className="mt-4 text-sm italic">Available Monday - Friday, 8:00 AM - 6:00 PM EAT</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                We're committed to fair and transparent refund practices. If you have any questions or concerns about this policy, please don't hesitate to contact our support team.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
