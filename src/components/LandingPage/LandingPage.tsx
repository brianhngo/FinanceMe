import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import KeyFeatures from './KeyFeatures';
import Preview1 from './Preview1';
import Preview2 from './Preview2';
import Reviews from './Reviews';
import GetStartedNow from './GetStartedNow';
import Footer from './Footer';
export default function LandingPage() {
  return (
    <div className="w-[100%]">
      <Navbar />
      <HeroBanner />
      <KeyFeatures />
      <Preview2 />
      <Preview1 />
      <Reviews />
      <GetStartedNow />
      <Footer />
    </div>
  );
}
