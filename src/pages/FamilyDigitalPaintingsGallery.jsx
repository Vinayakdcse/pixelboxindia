import React from 'react';
import GenericGallery from '../components/GenericGallery';

const galleryImages = [
    { src: "/assets/product_fam1.avif", type: "landscape" },
    { src: "/assets/product_fam2.avif", type: "landscape" },
    { src: "/assets/product_fam3.avif", type: "landscape" },
    { src: "/assets/product_fam4.avif", type: "landscape" },
    { src: "/assets/product_fam5.avif", type: "landscape" },
    { src: "/assets/product_fam6.avif", type: "landscape" },
];

const FamilyDigitalPaintingsGallery = () => {
    return (
        <GenericGallery
            title="Family Digital Paintings"
            subtitle="Explore our collection of family masterpieces"
            images={galleryImages}
            columns={2}
        />
    );
};

export default FamilyDigitalPaintingsGallery;
