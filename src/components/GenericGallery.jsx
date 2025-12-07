import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from './AboutCTA';
import SEO from './SEO';

const GenericGallery = ({
    title,
    subtitle,
    images,
    columns = 3
}) => {
    // Start with default 3 cols
    let gridClass = "grid grid-cols-1 md:grid-cols-3 gap-8";

    // If explicit 2 columns requested (like for Realistic/Family landscape galleries)
    if (columns === 2) {
        gridClass = "grid grid-cols-1 md:grid-cols-2 gap-8";
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <SEO
                title={title}
                description={subtitle}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="flex items-center gap-4 self-start md:self-auto">
                        <Link to="/" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all">
                            <ArrowLeft size={20} />
                        </Link>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-secondary">{title}</h1>
                            <p className="text-gray-500 mt-2">{subtitle}</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/919150115861"
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all"
                    >
                        Order Your Own
                    </a>
                </div>

                {/* Gallery Grid */}
                <div className={gridClass}>
                    {images.map((item, index) => (
                        <div key={index} className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Dynamic aspect ratio based on item.type */}
                            <div className={`w-full overflow-hidden bg-gray-200 ${item.type === 'landscape' ? 'aspect-video' : 'aspect-[3/4]'}`}>
                                <img
                                    src={item.src}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CTA />
        </div>
    );
};

export default GenericGallery;
