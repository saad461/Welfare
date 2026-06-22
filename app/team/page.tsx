'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const TeamHero = () => {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 px-6 bg-primary overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-dark opacity-90"></div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-2xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
          <Link href="/" className="hover:text-secondary transition-colors">
            {t.team.hero.breadcrumbHome}
          </Link>
          <ChevronRight size={14} className={isUrdu ? "rotate-180" : ""} />
          <span className="text-white">{t.team.hero.breadcrumbTeam}</span>
        </nav>

        <h1 className={isUrdu ? "urdu text-white mb-4" : "text-white mb-4"}>
          {t.team.hero.heading}
        </h1>
        <p className={isUrdu ? "urdu text-white/80 max-w-2xl mx-auto text-lg" : "text-white/80 max-w-2xl mx-auto text-lg"}>
          {t.team.hero.subtext}
        </p>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, color, initials }: { member: any, color: string, initials: string }) => {
  const { isUrdu } = useLanguage();

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-3xl overflow-hidden shadow-xl border-t-8 ${color} flex flex-col h-full`}
    >
      <div className="p-8 text-center flex-1">
        <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-br ${color === 'border-t-primary' ? 'from-primary to-dark' : 'from-secondary to-yellow-600'}`}>
          {initials}
        </div>
        <h3 className={isUrdu ? "urdu text-2xl font-bold mb-1 text-primary" : "text-2xl font-bold mb-1 text-primary"}>
          {member.name}
        </h3>
        <p className={isUrdu ? "urdu text-secondary font-bold mb-6" : "text-secondary font-bold mb-6"}>
          {member.role}
        </p>
        <p className={isUrdu ? "urdu text-dark/70 text-sm leading-relaxed" : "text-dark/70 text-sm leading-relaxed"}>
          {member.bio}
        </p>
      </div>
      {member.phone && (
        <div className="p-6 bg-background border-t border-gray-100 mt-auto">
          <a
            href={`tel:${member.phone}`}
            className="flex items-center justify-center gap-3 text-primary font-bold hover:text-secondary transition-colors"
          >
            <Phone size={18} />
            <span>{member.phone}</span>
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default function TeamPage() {
  const { t, isUrdu } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TeamHero />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <TeamMemberCard
              member={t.team.members.shabbar}
              color="border-t-primary"
              initials="SN"
            />
            <TeamMemberCard
              member={t.team.members.ijaz}
              color="border-t-secondary"
              initials="HI"
            />
            <TeamMemberCard
              member={t.team.members.yousuf}
              color="border-t-primary"
              initials="YN"
            />
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <div className="relative z-10">
                <h2 className={isUrdu ? "urdu text-3xl md:text-5xl mb-6" : "text-3xl md:text-5xl font-display mb-6"}>
                  {t.team.cta.heading}
                </h2>
                <p className={isUrdu ? "urdu text-xl mb-10 opacity-80" : "text-xl mb-10 opacity-80"}>
                  {t.team.cta.subtext}
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-secondary text-primary px-12 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-xl"
                >
                  <span className={isUrdu ? "urdu" : ""}>{t.team.cta.button}</span>
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
