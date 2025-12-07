import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';

// Lazy load pages for performance optimization
const HomePage = React.lazy(() => import('./pages/HomePage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const SelfDigitalPaintingsGallery = React.lazy(() => import('./pages/SelfDigitalPaintingsGallery'));
const CoupleDigitalPaintingsGallery = React.lazy(() => import('./pages/CoupleDigitalPaintingsGallery'));
const RealisticFamilyDigitalPaintingsGallery = React.lazy(() => import('./pages/RealisticFamilyDigitalPaintingsGallery'));
const KidsDigitalPaintingsGallery = React.lazy(() => import('./pages/KidsDigitalPaintingsGallery'));
const FamilyDigitalPaintingsGallery = React.lazy(() => import('./pages/FamilyDigitalPaintingsGallery'));
const OldPhotoRestorationGallery = React.lazy(() => import('./pages/OldPhotoRestorationGallery'));

// Simple loading spinner component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="self-digital-paintings" element={<SelfDigitalPaintingsGallery />} />
            <Route path="couple-digital-paintings" element={<CoupleDigitalPaintingsGallery />} />
            <Route path="realistic-family-portraits" element={<RealisticFamilyDigitalPaintingsGallery />} />
            <Route path="kids-digital-paintings" element={<KidsDigitalPaintingsGallery />} />
            <Route path="family-digital-paintings" element={<FamilyDigitalPaintingsGallery />} />
            <Route path="old-photo-restoration" element={<OldPhotoRestorationGallery />} />
            <Route path="terms-of-service" element={<TermsPage />} />
            <Route path="privacy-policy" element={<PrivacyPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};

export default App;
