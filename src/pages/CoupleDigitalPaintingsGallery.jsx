import React from 'react';
import GenericGallery from '../components/GenericGallery';

const galleryImages = [
    { src: "/assets/Frame-1.avif", type: "portrait" },
    { src: "/assets/Frame-2.avif", type: "portrait" },
    { src: "/assets/Frame-3.avif", type: "portrait" },
    { src: "/assets/Frame-4.avif", type: "portrait" },
    { src: "/assets/Frame-5.avif", type: "portrait" },
    { src: "/assets/Frame-0.avif", type: "portrait" },
];

const CoupleDigitalPaintingsGallery = () => {
    return (
        <GenericGallery
            title="Couple Digital Painting"
            subtitle="Explore our collection of couple masterpieces"
            images={galleryImages}
            columns={3}
        />
    );
};

export default CoupleDigitalPaintingsGallery;
