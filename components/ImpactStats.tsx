'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  Building,
  Home,
  Gem,
  TreeDeciduous,
  Droplets,
  CloudRain,
  Heart,
  ShoppingBag,
  Baby,
  GraduationCap,
  Calendar,
  UserCheck
} from 'lucide-react';

const CountUp = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Extract number from string like "10+", "20,000+", "100%", "2008"
  const cleanValue = value.replace(/,/g, '');
  const target = parseInt(cleanValue.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (end === 0) {
        setCount(0);
        return;
      }
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-secondary">
      {target > 999 ? count.toLocaleString() : count}{suffix}
    </span>
  );
};

export default function ImpactStats() {
  const { t, isUrdu } = useLanguage();

  const stats = [
    { icon: Building, value: '10+', label: t.impact.stats.mosques },
    { icon: Home, value: '3+', label: t.impact.stats.houses },
    { icon: Gem, value: '20+', label: t.impact.stats.weddings },
    { icon: TreeDeciduous, value: '20,000+', label: t.impact.stats.trees },
    { icon: Droplets, value: '77', label: t.impact.stats.pumps },
    { icon: CloudRain, value: '500+', label: t.impact.stats.flood },
    { icon: Heart, value: '20+', label: t.impact.stats.widows },
    { icon: ShoppingBag, value: '300+', label: t.impact.stats.ration },
    { icon: Baby, value: '50', label: t.impact.stats.boys },
    { icon: GraduationCap, value: '50', label: t.impact.stats.girls },
    { icon: Calendar, value: '2008', label: t.impact.stats.founded },
    { icon: UserCheck, value: '100%', label: t.impact.stats.pleasure },
  ];

  return (
    <section id="impact" className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={isUrdu ? "urdu text-white mb-4" : "text-white mb-4"}
          >
            {t.impact.heading}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={isUrdu ? "urdu text-white/80 max-w-2xl mx-auto" : "max-w-2xl mx-auto text-white/80"}
          >
            {t.impact.subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mb-4">
                <stat.icon size={32} />
              </div>
              <CountUp value={stat.value} />
              <p className={isUrdu ? "urdu mt-2 text-sm font-medium text-white/90" : "mt-2 text-sm font-medium text-white/90"}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
