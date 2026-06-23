'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  phone?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  color: string;
  initials: string;
}

const TeamMemberCard = ({ member, color, initials }: TeamMemberCardProps) => {
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

export default TeamMemberCard;
