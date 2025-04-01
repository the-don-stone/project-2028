
import React from 'react';
import Header from '@/components/Header';
import Vision from '@/components/Vision';
import Principles from '@/components/Principles';
import Goals from '@/components/Goals';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Vision />
      <Principles />
      <Goals />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
