'use client';

import React from 'react';
import LocalHero from '../components/localhero';
import InnerHero from '../components/InnerHero';
import CtaLarge from '../components/CtaLarge';
import LocalFeatures from '../components/LocalFeatures';
import Clients from '../components/Clients';

export default function LocalBusiness() {
  return (
    <main className="min-h-screen">
      <LocalHero />
      <Clients />
      <InnerHero />
      <LocalFeatures />
      <CtaLarge />
    </main>
  );
} 