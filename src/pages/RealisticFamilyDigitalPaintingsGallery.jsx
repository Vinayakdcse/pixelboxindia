import React from 'react';
import GenericGallery from '../components/GenericGallery';

const galleryImages = [
    { src: "/assets/product_merge1.avif", type: "landscape" },
    { src: "/assets/product_merge2.avif", type: "landscape" },
    { src: "/assets/product_merge3.avif", type: "landscape" },
    { src: "/assets/product_merge4.avif", type: "landscape" },
    { src: "/assets/product_merge5.avif", type: "landscape" },
    { src: "/assets/product_merge6.avif", type: "landscape" },
];

const RealisticFamilyDigitalPaintingsGallery = () => {
    return (
        <GenericGallery
            title="Realistic Family Digital Portraits"
            subtitle="Explore our collection of realistic family portraits"
            images={galleryImages}
            columns={2}
        />
    );
};

export default RealisticFamilyDigitalPaintingsGallery;
