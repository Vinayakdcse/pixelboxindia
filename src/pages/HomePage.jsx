import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import { About, CTA } from '../components/AboutCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <SEO
                title="PixelBoxIndia - Custom Merge Digital Paintings"
                description="Turn your memories into stunning merge digital paintings. Family, couple, and single portraits with premium framing and free shipping across India."
                canonical="/"
            />
            <Hero />
            <Products />
            <HowItWorks />
            <Features />
            <Testimonials />
            <About />
            <FAQ />
            <CTA />
            <Footer />
        </>
    );
};

export default HomePage;
