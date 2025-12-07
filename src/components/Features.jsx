import React from 'react';
import { Frame, Layers, ShieldCheck, Hammer, Gift, Smile } from 'lucide-react';

const features = [
    { icon: Frame, label: "Premium Wood Frame" },
    { icon: Layers, label: "Matte Lamination" },
    { icon: ShieldCheck, label: "Lifetime Durability" },
    { icon: Hammer, label: "Hanging Hardware" },
    { icon: Gift, label: "Gift Ready Packaging" },
    { icon: Smile, label: "Satisfaction Guaranteed" },
];

const Features = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-xl text-gray-400 font-medium mb-12">
                    Every order includes:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50/50 to-white hover:bg-white hover:border-primary/30 hover:-translate-y-1 transition-all duration-200">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <feature.icon size={20} />
                            </div>
                            <span className="font-semibold text-secondary">{feature.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
