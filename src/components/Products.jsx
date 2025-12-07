import React from 'react';
import { Link } from 'react-router-dom';

export const products = [
    {
        id: 1,
        title: "Self Digital Paintings",
        image: "/assets/product_single.avif",
        alt: "Family Merge Digital Painting",
        link: "/self-digital-paintings"
    },
    {
        id: 2,
        title: "Couple Digital Painting",
        image: "/assets/product_couple.avif",
        alt: "Couple Merge Digital Painting",
        link: "/couple-digital-paintings"
    },
    {
        id: 3,
        title: "Realistic Family Digital Portraits",
        image: "/assets/product_merge.avif",
        alt: "Single Portrait Digital Painting",
        link: "/realistic-family-portraits"
    },
    {
        id: 4,
        title: "Kids Digital Paintings",
        image: "/assets/product_kids.avif",
        alt: "Baby Mosaic Art",
        link: "/kids-digital-paintings"
    },
    {
        id: 5,
        title: "Family Digital Paintings",
        image: "/assets/product_fam.avif",
        alt: "Pet Portrait",
        link: "/family-digital-paintings"
    },
    {
        id: 6,
        title: "Old Photo Restoration",
        image: "/assets/product_oldphoto.avif",
        alt: "Old Photo Restoration",
        link: "/old-photo-restoration"
    }
];

const Products = () => {
    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-secondary mb-12">
                    Choose Your Portrait Type
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-[2rem] border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">

                            {/* Badge */}
                            {product.badge && (
                                <span className="absolute top-4 right-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    {product.badge}
                                </span>
                            )}

                            {/* Image Container */}
                            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-secondary mb-4 min-h-[3.5rem] flex items-center justify-center">
                                    {product.title}
                                </h3>
                                <Link
                                    to={product.link}
                                    className="inline-block px-8 py-2 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
