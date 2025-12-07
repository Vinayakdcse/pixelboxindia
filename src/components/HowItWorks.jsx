import React from 'react';
import { ShoppingBag, Upload, Eye, Truck, Check } from 'lucide-react';

const steps = [
    {
        step: 1,
        title: "Place Order",
        desc: "Choose your preferred size and frame options, then place your order securely on our website.",
        icon: ShoppingBag
    },
    {
        step: 2,
        title: "Upload Photos",
        desc: "Share your photos via WhatsApp or Email. Our processing team will help you select the best ones for merging.",
        icon: Upload
    },
    {
        step: 3,
        title: "Preview & Approve",
        desc: "Receive a artwork preview. Request unlimited changes until it's absolutely perfect.",
        icon: Eye
    },
    {
        step: 4,
        title: "Fast Delivery",
        desc: "Once approved, we print, frame, and ship it for free. Your artwork arrives ready to hang.",
        icon: Truck
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-2">Our process</h2>
                    <p className="text-2xl text-secondary">And how we work</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((item, index) => (
                        <div key={item.step} className="bg-white p-8 rounded-[2rem] border border-gray-200 hover:-translate-y-2 hover:border-primary transition-all duration-300 relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                                    Step {item.step}
                                </span>
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <item.icon size={20} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Progress Bar (Desktop) - Matched to Legacy */}
                <div className="hidden lg:flex items-center h-2 bg-transparent rounded-full mt-12 relative max-w-4xl mx-auto">
                    <div className="flex-1 h-full bg-gradient-to-r from-transparent to-primary rounded-full"></div>
                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(233,65,133,0.6)] -ml-2 z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
