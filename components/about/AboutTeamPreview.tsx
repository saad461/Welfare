'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutTeamPreview() {
  const { t, isUrdu } = useLanguage();

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={isUrdu ? "urdu text-primary mb-4" : "text-primary mb-4"}
            >
              {t.aboutPage.team.heading}
            </motion.h2>
            <div className="w-20 h-1 bg-secondary mx-auto md:mx-0"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors group shadow-lg"
            >
              <span className={isUrdu ? "urdu" : ""}>{t.aboutPage.team.button}</span>
              <ArrowRight size={18} className={isUrdu ? "rotate-180" : "group-hover:translate-x-1 transition-transform"} />
            </Link>
          </motion.div>
        </div>

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
  );
}
