'use client';

import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectTabs, { ProjectTabsRef } from '@/components/ProjectTabs';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ProjectHero = () => {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="relative pt-24 md:pt-32 pb-20 px-6 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-dark opacity-90"></div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
          <Link href="/" className="hover:text-secondary transition-colors">
            {t.projects.hero.breadcrumbHome}
          </Link>
          <ChevronRight size={14} className={isUrdu ? "rotate-180" : ""} />
          <span className="text-white">{t.projects.hero.breadcrumbProjects}</span>
        </nav>

        <h1 className={isUrdu ? "urdu text-white mb-4" : "text-white mb-4"}>
          {t.projects.hero.heading}
        </h1>
        <p className={isUrdu ? "urdu text-white/80 max-w-2xl mx-auto text-lg" : "text-white/80 max-w-2xl mx-auto text-lg"}>
          {t.projects.hero.subtext}
        </p>
      </div>
    </section>
  );
};

const ProjectOverview = ({ onSwitchTab }: { onSwitchTab: (index: number) => void }) => {
  const { t, isUrdu } = useLanguage();

  const cards = [
    {
      title: t.projects.overview.yateemKhana.title,
      icon: '🏠',
      desc: t.projects.overview.yateemKhana.desc,
      targetTab: 0
    },
    {
      title: t.projects.overview.zainabAlia.title,
      icon: '🎓',
      desc: t.projects.overview.zainabAlia.desc,
      targetTab: 1
    }
  ];

  return (
    <section className="py-12 px-6 -mt-16 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl flex items-center gap-6 border border-gray-100 hover:shadow-2xl transition-shadow group">
              <div className="text-5xl">{card.icon}</div>
              <div className="flex-1">
                <h3 className={isUrdu ? "urdu text-xl font-bold mb-1 text-primary" : "text-xl font-bold mb-1 text-primary"}>
                  {card.title}
                </h3>
                <p className={isUrdu ? "urdu text-sm text-dark/60 mb-4" : "text-sm text-dark/60 mb-4"}>
                  {card.desc}
                </p>
                <button
                  onClick={() => {
                    onSwitchTab(card.targetTab);
                    const tabsSection = document.getElementById('project-tabs');
                    if (tabsSection) {
                      tabsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-secondary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  <span className={isUrdu ? "urdu" : ""}>{t.projects.overview.viewDetails}</span>
                  <ChevronRight size={16} className={isUrdu ? "rotate-180" : ""} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ProjectsPage() {
  const tabsRef = useRef<ProjectTabsRef>(null);

  const handleSwitchTab = (index: number) => {
    tabsRef.current?.setActiveTab(index);
  };

  return (
    <>
      <Navbar />
      <ProjectHero />
      <ProjectOverview onSwitchTab={handleSwitchTab} />

      <div id="project-tabs">
        <ProjectTabs ref={tabsRef} />
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
