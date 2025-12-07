import React, { useState, useEffect } from 'react';

const stats = [
    { number: "24/7", label: "Support" },
    { number: "3", label: "Days Delivery" },
    { number: "50K+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
];

const carouselImages = [
    "/assets/hero_mockup.avif",
    "/assets/hero_mockup1.avif",
    "/assets/product_family1.avif"
];

const Hero = () => {
    const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentInfoIndex((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="pt-8 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8 text-secondary">
                            From Your Photos to Cherished Family Portraits
                        </h1>
                    </div>

                    {/* Carousel Section */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative rounded-[2rem] shadow-xl overflow-hidden group">
                        {/* Spacer Image to maintain original aspect ratio */}
                        <img
                            src={carouselImages[0]}
                            alt=""
                            className="w-full h-auto opacity-0 pointer-events-none relative z-0"
                        />

                        {carouselImages.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Showcase ${idx + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentInfoIndex ? 'opacity-100' : 'opacity-0'} z-10`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex w-max animate-scroll gap-20">
                        {/* Original Items */}
                        {stats.map((stat, index) => (
                            <div key={`original-${index}`} className="flex flex-col items-center min-w-[150px]">
                                <span className="text-3xl font-bold text-primary mb-1">{stat.number}</span>
                                <span className="text-secondary font-medium">{stat.label}</span>
                            </div>
                        ))}
                        {/* Duplicated Items for Loop */}
                        {stats.map((stat, index) => (
                            <div key={`duplicate-${index}`} className="flex flex-col items-center min-w-[150px]">
                                <span className="text-3xl font-bold text-primary mb-1">{stat.number}</span>
                                <span className="text-secondary font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
