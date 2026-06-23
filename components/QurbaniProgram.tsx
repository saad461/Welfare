'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Calendar, Users, MapPin, Loader2, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase, isSupabaseConnected } from '@/lib/supabase';
import { CONTACT_INFO, DONATION_INFO } from '@/lib/constants';

export default function QurbaniProgram() {
  const { t, isUrdu } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    types: [] as string[],
    shares: '1',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSupabaseConnected) {
        const { error: dbError } = await supabase
          .from('qurbani_bookings')
          .insert([
            {
              name: formData.name,
              phone: formData.phone,
              whatsapp: formData.whatsapp,
              email: formData.email,
              animal_type: formData.types.join(','),
              shares: parseInt(formData.shares),
              city: formData.city,
              year: 2027,
              status: 'interest',
              created_at: new Date()
            }
          ]);

        if (dbError) throw dbError;
      } else {
        console.warn('Supabase not connected. Form data:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSuccess(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please contact us directly on WhatsApp: +923002038612');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, ...t.qurbaniPage.howItWorks.step1, icon: "🤝" },
    { id: 2, ...t.qurbaniPage.howItWorks.step2, icon: "💳" },
    { id: 3, ...t.qurbaniPage.howItWorks.step3, icon: "🐄" },
    { id: 4, ...t.qurbaniPage.howItWorks.step4, icon: "🎁" }
  ];

  const referencePrices = [
    { title: t.qurbaniPage.prices.card1, desc: t.qurbaniPage.prices.card1Desc },
    { title: t.qurbaniPage.prices.card2, desc: t.qurbaniPage.prices.card2Desc },
    { title: t.qurbaniPage.prices.card3, desc: t.qurbaniPage.prices.card3Desc }
  ];

  const galleryImages = [
    "/images/qurbani/IMG-20250607-WA0060.webp",
    "/images/qurbani/IMG-20250607-WA0044.webp",
    "/images/qurbani/IMG-20250607-WA0067.webp",
    "/images/qurbani/IMG-20250607-WA0072.webp",
    "/images/qurbani/IMG-20250607-WA0073.webp",
    "/images/qurbani/IMG-20250607-WA0106.webp",
    "/images/qurbani/IMG-20250607-WA0095.webp",
    "/images/qurbani/IMG-20250607-WA0053.webp"
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* SECTION 1 — Hero Banner */}
      <section className="relative min-h-[80dvh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/qurbani/IMG-20250607-WA0060.webp"
            alt="Qurbani Program Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[1px]" />
        </div>
        <div className="max-w-7xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/30"
          >
            <span className={`font-bold tracking-wider text-sm ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.hero.badge}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-7xl font-display font-bold mb-8 ${isUrdu ? 'urdu' : ''}`}
          >
            {t.qurbaniPage.hero.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed ${isUrdu ? 'urdu' : ''}`}
          >
            {t.qurbaniPage.hero.subtext}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — 2026 Impact Stats Row */}
      <section className="py-12 px-4 md:px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: t.qurbaniPage.stats.animals, value: "10+", icon: <Calendar className="text-secondary" /> },
              { label: t.qurbaniPage.stats.families, value: "50+", icon: <Users className="text-secondary" /> },
              { label: t.qurbaniPage.stats.areas, value: isUrdu ? "مظفرگڑھ اور گردونواح" : "Muzaffargarh & Surrounding", icon: <MapPin className="text-secondary" /> },
              { label: t.qurbaniPage.stats.year, value: "2026", icon: <Calendar className="text-secondary" /> }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-6 rounded-3xl border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-dark mb-1">{stat.value}</div>
                <div className={`text-sm text-gray-500 font-medium ${isUrdu ? 'urdu' : ''}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Qurbani 2026 Photo Gallery */}
      <section className="py-20 md:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl md:text-5xl font-display font-bold text-dark mb-4 ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.gallery.title}
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[4/3] sm:aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Qurbani Impact ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — How It Works */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl md:text-5xl font-display font-bold text-dark mb-4 ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.howItWorks.title}
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-background rounded-3xl border border-gray-100"
              >
                <div className="text-4xl mb-6">{step.icon}</div>
                <div className="absolute top-8 right-8 text-6xl font-bold text-primary/5">0{step.id}</div>
                <h3 className={`text-xl font-bold text-dark mb-3 ${isUrdu ? 'urdu' : ''}`}>{step.title}</h3>
                <p className={`text-gray-600 leading-relaxed ${isUrdu ? 'urdu' : ''}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Qurbani Prices Reference */}
      <section className="py-20 md:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className={`text-3xl md:text-5xl font-display font-bold text-dark mb-4 ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.prices.title}
            </h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {referencePrices.map((price, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 grayscale opacity-70 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                  {t.qurbaniPage.prices.done}
                </div>
                <h3 className={`text-2xl font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{price.title}</h3>
                <p className={`text-gray-500 mb-6 ${isUrdu ? 'urdu' : ''}`}>{price.desc}</p>
                <div className={`text-primary font-bold ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.prices.contact}</div>
              </div>
            ))}
          </div>

          <div className="text-center bg-secondary/10 p-6 rounded-2xl border border-secondary/20">
            <p className={`text-secondary font-bold ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.prices.note}</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Register for Qurbani 2027 */}
      <section id="register-2027" className="py-20 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-primary p-8 md:p-12 text-white text-center">
            <h2 className={`text-3xl md:text-5xl font-display font-bold mb-4 ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.register.title}
            </h2>
            <p className={`text-white/80 max-w-2xl mx-auto ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.register.subtitle}
            </p>
          </div>

          <div className="p-6 md:p-12">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} />
                </div>
                <h4 className={`text-2xl font-bold text-dark mb-4 ${isUrdu ? 'urdu' : ''}`}>JazakAllah Khair!</h4>
                <p className={`text-gray-600 ${isUrdu ? 'urdu' : ''}`}>
                  {t.qurbaniPage.register.success}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Register another interest
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.register.name} *</label>
                    <input
                      id="name"
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.register.phone} *</label>
                    <input
                      id="phone"
                      required
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.register.whatsapp}</label>
                    <input
                      type="text"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.register.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.register.type}</label>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {Object.entries(t.qurbaniPage.register.types).map(([key, label]) => (
                      <label key={key} className="flex items-center gap-2 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={formData.types.includes(key)}
                            onChange={() => handleCheckboxChange(key)}
                            className="sr-only"
                          />
                          <div className={`w-6 h-6 rounded border-2 transition-all flex items-center justify-center ${
                            formData.types.includes(key) ? 'bg-primary border-primary' : 'border-gray-200 group-hover:border-primary'
                          }`}>
                            {formData.types.includes(key) && <Check size={16} className="text-white" />}
                          </div>
                        </div>
                        <span className={`text-gray-700 font-medium ${isUrdu ? 'urdu' : ''}`}>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.register.shares}</label>
                    <input
                      type="number"
                      name="shares"
                      min="1"
                      value={formData.shares}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.register.city}</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      {isUrdu ? 'ارسال ہو رہا ہے...' : 'Submitting...'}
                    </>
                  ) : (
                    t.qurbaniPage.register.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Islamic Content */}
      <section className="py-20 md:py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 md:mb-12">
            <h3 className="text-3xl md:text-5xl font-display text-primary mb-4 urdu leading-relaxed px-4">فَصَلِّ لِرَبِّكَ وَانْحَرْ</h3>
            <p className={`text-xl text-gray-600 ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.islamic.ayah}
              <span className="block text-sm mt-2 opacity-60">{t.qurbaniPage.islamic.ref}</span>
            </p>
          </div>
          <div className="w-24 h-px bg-gray-200 mx-auto mb-12" />
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
            <p className={`text-2xl md:text-3xl font-display text-dark italic leading-relaxed mb-6 ${isUrdu ? 'urdu' : ''}`}>
              {t.qurbaniPage.islamic.hadith}
            </p>
            <p className={`text-primary font-bold ${isUrdu ? 'urdu' : ''}`}>{t.qurbaniPage.islamic.hadithRef}</p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Contact for Qurbani */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${isUrdu ? 'urdu' : ''}`}>
                {isUrdu ? 'ہم سے رابطہ کریں' : 'Have Questions About Qurbani?'}
              </h2>
              <p className={`text-xl text-white/80 mb-8 ${isUrdu ? 'urdu' : ''}`}>
                {isUrdu ? 'ہم آپ کی خدمت کے لیے حاضر ہیں۔ کسی بھی معلومات کے لیے ہم سے رابطہ کریں۔' : 'We are here to help. Contact us via WhatsApp, Phone or Email for any queries regarding your sacrifice.'}
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Check className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest">{t.donation.quickContact.whatsapp}</p>
                    <p className="text-xl font-bold">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Check className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest">{t.donation.quickContact.phone}</p>
                    <p className="text-xl font-bold">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Check className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest">{t.donation.quickContact.email}</p>
                    <p className="text-xl font-bold">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Bank Account Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">{t.donation.bankTransfer.bank}</p>
                  <p className="text-xl font-bold">{DONATION_INFO.bankName}</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">{t.donation.bankTransfer.title}</p>
                  <p className="text-xl font-bold">{DONATION_INFO.accountTitle}</p>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">{t.donation.bankTransfer.iban}</p>
                  <p className="text-xl font-bold break-all font-mono">{DONATION_INFO.iban}</p>
                </div>
              </div>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all"
              >
                Chat on WhatsApp <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
