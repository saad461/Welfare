import type { Metadata } from "next";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutHero from '@/components/about/AboutHero';
import AboutIntroduction from '@/components/about/AboutIntroduction';
import MissionVision from '@/components/about/MissionVision';
import IslamicFoundation from '@/components/about/IslamicFoundation';
import Manifesto from '@/components/Manifesto';
import Timeline from '@/components/about/Timeline';
import HowWeWork from '@/components/about/HowWeWork';
import ImpactStats from '@/components/ImpactStats';
import AboutTeamPreview from '@/components/about/AboutTeamPreview';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: "About Us | Aal e Imran Welfare Organization Muzaffargarh Pakistan",
  description: "Learn about Aal e Imran Welfare Organization founded in 2008 in Muzaffargarh, Punjab, Pakistan. A non-political, non-sectarian welfare organization serving orphans, widows and underprivileged purely for the pleasure of Allah.",
  keywords: "aal e imran welfare about, welfare organization muzaffargarh, islamic ngo pakistan, orphan care pakistan, non profit muzaffargarh, syed shabbar abbas naqvi",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <AboutIntroduction />
      <MissionVision />
      <IslamicFoundation />
      <Manifesto background="green" showTitle={true} columns={3} />
      <Timeline />
      <HowWeWork />
      <ImpactStats />
      <AboutTeamPreview />
      <AboutCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
