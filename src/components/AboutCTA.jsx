import React from 'react';
import { ChevronRight } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-gray-50 rounded-[2.5rem] p-8 lg:p-12">
                    {/* Content */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl font-bold text-secondary">Why Choose Pixelboxindia?</h2>
                        <ul className="space-y-4">
                            {[
                                "✨ Hand-crafted digital paintings",
                                "🖼️ Artwork will be previewed for approval",
                                "🚚 Free shipping all over India",
                                "⚡ Fast 3–5 day delivery",
                                "❤️ Trusted by thousands of families"
                            ].map((item, i) => (
                                <li key={i} className="text-gray-600 text-lg font-medium">{item}</li>
                            ))}
                        </ul>
                        <a
                            href="https://wa.me/919150115861"
                            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all"
                        >
                            Get Yours Now
                        </a>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <img
                            src="/assets/about_collage.avif"
                            alt="Artwork Collage"
                            loading="lazy"
                            className="w-full rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const CTA = () => {
    return (
        <section className="pb-20 pt-10 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-[2.5rem] p-12 text-center border border-pink-100 shadow-xl shadow-pink-100/50">
                    <h2 className="text-4xl font-bold text-secondary mb-4">Your Portrait Begins Here</h2>
                    <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
                        Trusted by thousands of families across India. Turn your photos into beautiful artwork, and start your order with confidence today.
                    </p>
                    <a
                        href="https://wa.me/919150115861"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all"
                    >
                        Get Started
                        <ChevronRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};
