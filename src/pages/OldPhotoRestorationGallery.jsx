import React from 'react';
import GenericGallery from '../components/GenericGallery';

const galleryImages = [
    { src: "/assets/product_oldphoto1.avif", type: "portrait" },
    { src: "/assets/product_oldphoto2.avif", type: "portrait" },
    { src: "/assets/product_oldphoto3.avif", type: "portrait" },
    { src: "/assets/product_oldphoto4.avif", type: "landscape" },
    { src: "/assets/product_oldphoto5.avif", type: "landscape" },
    { src: "/assets/product_oldphoto6.avif", type: "landscape" },
];

const OldPhotoRestorationGallery = () => {
    return (
        <GenericGallery
            title="Old Photo Restoration"
            subtitle="Explore our collection of restored memories"
            images={galleryImages}
            columns={3}
        />
    );
};

export default OldPhotoRestorationGallery;
