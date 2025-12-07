import React from 'react';
import { Star, Check } from 'lucide-react';

const testimonials = [
    {
        name: "Muthu Lakshmi",
        title: "Seamless Family Merge",
        text: "Absolutely loved the painting! The merging of different photos was seamless. Highly recommended!",
        image: "/assets/testimonial_1.avif"
    },
    {
        name: "Vignesh Kumar",
        title: "Realistic Oil Finish",
        text: "Great quality frame and the artwork looks just like a real oil painting. Delivered on time.",
        image: "/assets/testimonial_2.avif"
    },
    {
        name: "Swathi Prakash",
        title: "Perfect Anniversary Gift",
        text: "Best gift for my parents' anniversary. They were so emotional seeing the family together in one frame.",
        image: "/assets/testimonial_9.avif"
    },
    {
        name: "Anjali Mehta",
        title: "Worth Every Penny",
        text: "The attention to detail is amazing. It’s the centerpiece of our living room now. Thank you PixelBox!",
        image: "/assets/testimonial_4.avif"
    },
    {
        name: "Rahul Khanna",
        title: "Better Than Expected",
        text: "I was skeptical about the merging process, but the final result looks so natural. Great job guys.",
        image: "/assets/testimonial_5.avif"
    },
    {
        name: "Pooja Reddy",
        title: "Emotional Moment",
        text: "Seeing my late grandfather in a family portrait with my kids brought tears to my eyes. Priceless.",
        image: "/assets/testimonial_6.avif"
    },
    {
        name: "Arjun Das",
        title: "Professional Service",
        text: "Very professional team. They sent a preview, asked for feedback, and delivered exactly what I wanted.",
        image: "/assets/testimonial_7.avif"
    },
    {
        name: "Sneha Kapoor",
        title: "High Quality Frame",
        text: "The frame quality is top-notch. It feels heavy and premium, not cheap plastic. Very satisfied.",
        image: "/assets/testimonial_8.avif"
    },
    {
        name: "Karthik Raja",
        title: "Fast Delivery",
        text: "Ordered it for a last-minute birthday gift and they delivered it in express time. You saved the day!",
        image: "/assets/testimonial_3.avif"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-2">What Our Customers Say</h2>
                    <p className="text-xl text-gray-500">Real stories from real customers</p>
                </div>

                <div className="columns-1 md:columns-3 gap-6 space-y-6 mb-20">
                    {testimonials.map((t, i) => (
                        <div key={i} className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">

                            {/* Stars */}
                            <div className="flex gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-secondary mb-2">{t.title}</h3>

                            {/* Text */}
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                "{t.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-3">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    loading="lazy"
                                />
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3.5 h-3.5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <Check size={8} strokeWidth={4} />
                                        </div>
                                        <span className="text-xs font-medium text-gray-400">Verified Customer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Fade Effect */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export default Testimonials;
