import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Terms and Conditions - Safari Adventures Kenya',
    description: 'Terms and conditions for Safari Adventures Kenya safari bookings and services.',
};

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 mt-16">
                <div className="container-custom">
                    <h1 className="heading-primary text-white mb-4">
                        Terms and Conditions
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
                                1. Agreement to Terms
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                By accessing or using Safari Adventures Kenya's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                2. Booking and Reservations
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p className="font-semibold text-gray-900 dark:text-white">Booking Confirmation:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>All bookings are subject to availability</li>
                                    <li>A booking is confirmed only upon receipt of the deposit payment</li>
                                    <li>We reserve the right to refuse any booking at our discretion</li>
                                    <li>Prices are subject to change until booking is confirmed</li>
                                </ul>

                                <p className="font-semibold text-gray-900 dark:text-white mt-6">Deposit Requirements:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>30-50% deposit required to confirm booking</li>
                                    <li>Full payment due 7 days before departure</li>
                                    <li>Bookings made within 7 days require immediate full payment</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                3. Payment Terms
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>All prices are quoted in USD unless otherwise stated.</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>We accept major credit cards, bank transfers, and PayPal</li>
                                    <li>All payments are processed through secure, encrypted channels</li>
                                    <li>Bank transfer fees are the responsibility of the client</li>
                                    <li>Prices include VAT where applicable</li>
                                    <li>International/domestic flight costs are excluded unless explicitly stated</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                4. Cancellation Policy
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>Cancellation refunds apply as follows:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-gray-900 dark:text-white">30+ days before departure:</strong> 100% refund</li>
                                    <li><strong className="text-gray-900 dark:text-white">14-29 days before departure:</strong> 50% refund</li>
                                    <li><strong className="text-gray-900 dark:text-white">0-13 days before departure:</strong> No refund</li>
                                </ul>
                                <p className="mt-4">
                                    All cancellations must be submitted in writing. We strongly recommend purchasing travel insurance.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                5. Changes and Modifications
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p className="font-semibold text-gray-900 dark:text-white">By the Client:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Changes requested 60+ days before departure: $100 admin fee</li>
                                    <li>Changes requested within 60 days: treated as cancellation and rebooking</li>
                                    <li>Some changes may not be possible depending on supplier policies</li>
                                </ul>

                                <p className="font-semibold text-gray-900 dark:text-white mt-6">By Safari Adventures Kenya:</p>
                                <p>
                                    We reserve the right to make minor changes to itineraries. In case of significant changes, we will notify you immediately and offer alternatives or a full refund.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                6. Travel Documents and Requirements
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>Clients are responsible for:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Possessing a valid passport (minimum 6 months validity)</li>
                                    <li>Obtaining necessary visas and permits</li>
                                    <li>Meeting health requirements and vaccinations</li>
                                    <li>Having appropriate travel insurance</li>
                                    <li>Complying with customs and immigration regulations</li>
                                    <li>Providing correct and accurate travel documents</li>
                                    <li>Arriving on time for all scheduled activities</li>
                                    <li>Following guide instructions at all times</li>
                                </ul>
                                <p className="mt-4">
                                    We can assist with visa applications but cannot guarantee approval. Costs for visas and permits are not included in safari prices.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                7. Health and Safety
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Clients must:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Disclose any medical conditions that may affect their trip</li>
                                <li>Obtain necessary vaccinations and malaria prophylaxis</li>
                                <li>Follow safety instructions from guides and staff</li>
                                <li>Have comprehensive travel insurance covering medical emergencies</li>
                                <li>Understand that safaris involve inherent risks</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                8. Liability and Insurance
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>Safari Adventures Kenya:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Acts as an agent for hotels, transportation, and other service providers</li>
                                    <li>Is not liable for acts, errors, or omissions of third-party suppliers</li>
                                    <li>Does not accept liability for loss, damage, injury, or delay</li>
                                    <li>Is not liable for delays or cancellations of scheduled services</li>
                                    <li>Is not liable for loss of personal items or belongings</li>
                                    <li>Is not liable for medical expenses incurred during the safari</li>
                                    <li>Strongly recommends comprehensive travel insurance</li>
                                </ul>
                                <p className="mt-4 font-semibold text-gray-900 dark:text-white">
                                    Travel insurance should cover trip cancellation, medical expenses, emergency evacuation, and personal belongings.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                9. Conduct and Behavior
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Clients agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                                <li>Behave in a manner that does not endanger themselves or others</li>
                                <li>Respect local cultures, customs, and wildlife</li>
                                <li>Follow park rules and conservation guidelines</li>
                                <li>Not engage in illegal activities</li>
                            </ul>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                We reserve the right to terminate services without refund if a client's behavior poses risk or violates regulations.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                10. Force Majeure
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We are not liable for failure to perform services due to circumstances beyond our control, including but not limited to: natural disasters, war, terrorism, political unrest, government restrictions, pandemics, strikes, or acts of God. In such cases, we will work with clients to find alternative arrangements where possible.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                11. Complaints and Disputes
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>If issues arise during your safari:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Report problems immediately to your guide or our operations team</li>
                                    <li>We will make reasonable efforts to resolve issues on-site</li>
                                    <li>Formal complaints must be submitted in writing within 30 days of trip completion</li>
                                    <li>Disputes will be governed by Kenyan law</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                12. Intellectual Property
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                All content on our website, including text, images, logos, and itineraries, is the property of Safari Adventures Kenya and protected by copyright laws. Unauthorized use or reproduction is prohibited.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                13. Photography and Marketing
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                By participating in our safaris, you consent to Safari Adventures Kenya using photographs and videos taken during the trip for marketing purposes unless you opt out in writing.
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                14. Governing Law
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                These Terms and Conditions are governed by the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of Kenyan courts.
                            </p>
                        </div>

                        <div>
                            <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg">
                                <h2 className="heading-tertiary text-gray-900 dark:text-white mb-4">
                                    15. Contact Information
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    For questions about these Terms and Conditions, please contact us:
                                </p>
                                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <p><strong className="text-gray-900 dark:text-white">Safari Adventures Kenya</strong></p>
                                    <p>123 Safari Street, Nairobi, Kenya 00100</p>
                                    <p>Email: info@safariadventureskenya.com</p>
                                    <p>Phone: +254 702 075 876 / +254 713 091 092</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                By booking with Safari Adventures Kenya, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
