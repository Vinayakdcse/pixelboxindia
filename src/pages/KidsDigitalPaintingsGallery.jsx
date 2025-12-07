import React from 'react';
import GenericGallery from '../components/GenericGallery';

const galleryImages = [
    { src: "/assets/product_kids1.avif", type: "portrait" },
    { src: "/assets/product_kids2.avif", type: "portrait" },
    { src: "/assets/product_kids3.avif", type: "portrait" },
    { src: "/assets/product_kids4.avif", type: "portrait" },
];

const KidsDigitalPaintingsGallery = () => {
    return (
        <GenericGallery
            title="Kids Digital Paintings"
            subtitle="Explore our collection of kids masterpieces"
            images={galleryImages}
            columns={3}
        />
    );
};

export default KidsDigitalPaintingsGallery;
