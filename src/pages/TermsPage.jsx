import React from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const TermsPage = () => {
    return (
        <>
            <SEO
                title="Terms of Service"
                description="Read the Terms of Service for PixelBoxIndia. Understand our ordering process, return policy, and shipping details."
                canonical="/terms-of-service"
            />
            <section className="py-20 bg-white min-h-[60vh]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-secondary mb-12 text-center">Terms of Service</h1>
                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <p>By shopping with Pixelboxindia, you acknowledge and accept the following terms regarding our artistic services and delivery.</p>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Ordering & Approval Process</h3>
                            <p><strong>Artistic Workflow:</strong> Once you place an order, we create a digital preview. We will not proceed to printing or framing until you explicitly approve this preview.</p>
                            <p className="mt-2"><strong>Revisions:</strong> We offer revisions on the digital draft to ensure your satisfaction. If you are unhappy with the artwork before approval, you may request changes.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Return & Refund Policy</h3>
                            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Return Window</h4>
                            <p>We provide a 3-day return window. Customers must notify us within 3 days of delivery so we can review and assist with a return or replacement.</p>

                            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Refunds (if applicable)</h4>
                            <p>Eligible refunds (based on order stage) are processed to your original payment method within 7 working days.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Customization & Pricing Details</h3>
                            <p><strong>All-Inclusive Pricing:</strong> Prices listed on the website generally include GST at current rates.</p>
                            <p className="mt-2"><strong>Extra Customization:</strong> Standard prices cover standard requests. If you require complex additional detailing (e.g., merging multiple complex backgrounds, adding specific elements not originally quoted), additional charges may apply. These will be communicated to you for consent before work begins.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Shipping & Fulfillment</h3>
                            <p><strong>Timelines:</strong> Delivery dates displayed are estimates based on your location. While we strive for punctuality, delays due to couriers or unforeseen events can occur.</p>
                            <p className="mt-2"><strong>Liability:</strong> We communicate proactively regarding delays but are not liable for personal distress caused by shipping delays beyond our control.</p>
                            <p className="mt-2"><strong>Dimensions:</strong> Frame and print sizes are approximate.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Intellectual Property</h3>
                            <p>All digital assets, designs, and final products created by Pixelboxindia remain the intellectual property of the Company.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default TermsPage;
