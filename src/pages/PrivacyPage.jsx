import React from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const PrivacyPage = () => {
    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Your privacy matters to us. Learn how PixelBoxIndia collects, uses, and protects your personal information."
                canonical="/privacy-policy"
            />
            <section className="py-20 bg-white min-h-[60vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-secondary mb-12 text-center">Privacy Policy</h1>
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <p>Your privacy is important to us at PixelBoxIndia.</p>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">1. Information Collection</h3>
                            <p>We collect information you provide directly to us, such as when you place an order, including your name, email address, phone number, and shipping address.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">2. Photo Usage</h3>
                            <p>The photos you upload or share with us are used strictly for creating your artwork. We permit ourselves to use your artwork for our marketing/portfolio only if you explicitly grant permission or if the identifiable features are not compromised, otherwise your photos remain private.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">3. Data Protection</h3>
                            <p>We implement security measures to maintain the safety of your personal information.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">4. Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy, please contact us via WhatsApp or Email.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default PrivacyPage;
