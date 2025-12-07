import React from 'react';
import GenericGallery from '../components/GenericGallery';

const galleryImages = [
    { src: "/assets/product_single0.avif", type: "portrait" },
    { src: "/assets/product_single7.avif", type: "portrait" },
    { src: "/assets/product_single1.avif", type: "portrait" },
    { src: "/assets/product_single6.avif", type: "portrait" },
    { src: "/assets/product_single3.avif", type: "portrait" },
    { src: "/assets/product_single4.avif", type: "portrait" },
];

const SelfDigitalPaintingsGallery = () => {
    return (
        <GenericGallery
            title="Self Digital Paintings"
            subtitle="Explore our collection of individual masterpieces"
            images={galleryImages}
            columns={3}
        />
    );
};

export default SelfDigitalPaintingsGallery;
