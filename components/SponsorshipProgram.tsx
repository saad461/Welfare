'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Home, GraduationCap, Check, Heart, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { supabase, isSupabaseConnected } from '@/lib/supabase';
import { DONATION_INFO, CONTACT_INFO } from '@/lib/constants';

type ProgramType = 'yateemkhana' | 'zainabalia' | 'zainabalia-school';

export default function SponsorshipProgram() {
  const { t, isUrdu } = useLanguage();
  const formRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cnic: '',
    program: 'yateemkhana',
    howHeard: 'Website',
    message: ''
  });

  const scrollToForm = (program?: string) => {
    if (program) {
      setFormData(prev => ({ ...prev, program }));
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Map tier based on program
    let tier = 'basic-7500';
    let project = 'yateemkhana';

    if (formData.program === 'zainabalia') {
      tier = 'girls-8500';
      project = 'zainabalia';
    } else if (formData.program === 'zainabalia-school') {
      tier = 'education-2500';
      project = 'zainabalia-school';
    }

    try {
      if (isSupabaseConnected) {
        const { error: dbError } = await supabase
          .from('sponsors')
          .insert([
            {
              sponsor_name: formData.name,
              phone: formData.phone,
              email: formData.email,
              cnic: formData.cnic,
              tier: tier,
              project: project,
              how_heard: formData.howHeard,
              message: formData.message,
              created_at: new Date()
            }
          ]);

        if (dbError) throw dbError;
      } else {
        console.warn('Supabase not connected. Form data:', formData);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        cnic: '',
        program: 'yateemkhana',
        howHeard: 'Website',
        message: ''
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please contact us directly on WhatsApp: +923002038612');
    } finally {
      setLoading(false);
    }
  };

  const tiers = [
    {
      id: 'yateemkhana',
      icon: <Home className="w-8 h-8" />,
      color: 'bg-primary',
      textColor: 'text-primary',
      title: t.sponsorPage.tiers.boys.title,
      urduTitle: t.sponsorPage.tiers.boys.title,
      amount: t.sponsorPage.tiers.boys.amount,
      badge: t.sponsorPage.tiers.boys.badge,
      features: [
        t.projects.yateemKhana.features.shelter.title,
        t.projects.yateemKhana.features.meals.title,
        t.projects.yateemKhana.features.education.title,
        t.projects.yateemKhana.features.healthcare.title,
        t.projects.yateemKhana.features.islamic.title,
        t.projects.yateemKhana.features.recreation.title,
        isUrdu ? 'ماہانہ رپورٹ' : 'Monthly progress updates'
      ],
      cta: t.sponsorPage.tiers.cta.boys
    },
    {
      id: 'zainabalia',
      icon: <Home className="w-8 h-8" />,
      color: 'bg-secondary',
      textColor: 'text-secondary',
      title: t.sponsorPage.tiers.girls.title,
      urduTitle: t.sponsorPage.tiers.girls.title,
      amount: t.sponsorPage.tiers.girls.amount,
      badge: t.sponsorPage.tiers.girls.badge,
      popular: true,
      features: [
        isUrdu ? 'بچیوں کے لیے محفوظ رہائش' : 'Safe residential shelter for girls',
        t.projects.yateemKhana.features.meals.title,
        t.projects.yateemKhana.features.education.title,
        t.projects.yateemKhana.features.healthcare.title,
        t.projects.yateemKhana.features.islamic.title,
        isUrdu ? 'ہنرمندی کی تربیت' : 'Vocational skills training',
        isUrdu ? 'ماہانہ رپورٹ' : 'Monthly progress updates'
      ],
      cta: t.sponsorPage.tiers.cta.girls
    },
    {
      id: 'zainabalia-school',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      title: t.sponsorPage.tiers.education.title,
      urduTitle: t.sponsorPage.tiers.education.title,
      amount: t.sponsorPage.tiers.education.amount,
      badge: t.sponsorPage.tiers.education.badge,
      features: [
        isUrdu ? 'سکول ٹیوشن اور فیس' : 'School tuition & fees',
        isUrdu ? 'کتب اور اسٹیشنری' : 'Books & stationery',
        isUrdu ? 'سکول یونیفارم' : 'Uniform provided',
        isUrdu ? 'سکول کے بعد تعلیمی مدد' : 'After-school support',
        isUrdu ? 'امتحانی فیس' : 'Exam fees covered',
        isUrdu ? 'مزدور طبقے کے بچوں کے لیے' : 'Supporting working class families'
      ],
      cta: t.sponsorPage.tiers.cta.edu
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-6xl font-display font-bold text-dark mb-6 ${isUrdu ? 'urdu' : ''}`}
          >
            {t.sponsorPage.hero.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-lg text-primary font-bold italic max-w-3xl mx-auto ${isUrdu ? 'urdu' : ''}`}
          >
            {t.sponsorPage.hero.subtext}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-t-8 ${
                tier.id === 'yateemkhana' ? 'border-primary' : tier.id === 'zainabalia' ? 'border-secondary' : 'border-green-500'
              } flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {t.sponsorPage.tiers.girls.popular}
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl ${tier.color} text-white flex items-center justify-center mb-6`}>
                {tier.icon}
              </div>

              <span className={`text-xs font-bold uppercase tracking-widest ${tier.textColor} mb-2 ${isUrdu ? 'urdu' : ''}`}>
                {tier.badge}
              </span>

              <h3 className={`text-2xl font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{tier.title}</h3>

              <div className="mb-6">
                <span className="text-3xl font-bold text-dark">{tier.amount}</span>
              </div>

              <div className="flex-grow">
                <p className={`font-bold text-sm mb-4 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.tiers.includes}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${tier.textColor} shrink-0 mt-0.5`} />
                      <span className={`text-gray-600 text-sm ${isUrdu ? 'urdu' : ''}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => scrollToForm(tier.id)}
                className={`w-full py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1 ${
                  tier.id === 'zainabalia' ? 'bg-secondary text-white' : 'bg-primary text-white'
                } ${isUrdu ? 'urdu' : ''}`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship Form */}
        <div ref={formRef} className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-primary p-8 text-white text-center">
            <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className={`text-3xl font-bold ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.title}</h3>
          </div>

          <div className="p-8 md:p-12">
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
                <p className={`text-gray-600 mb-8 ${isUrdu ? 'urdu' : ''}`}>
                  {t.sponsorPage.form.success}
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl text-left space-y-4 border border-gray-100 mb-8">
                  <p className="font-bold text-primary">Bank Details for Payment:</p>
                  <p className="text-sm">
                    <strong>Bank:</strong> {DONATION_INFO.bankName}<br />
                    <strong>Account:</strong> {DONATION_INFO.accountTitle}<br />
                    <strong>IBAN:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-primary">{DONATION_INFO.iban}</code>
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all"
                  >
                    Contact on WhatsApp
                  </a>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
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
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.name} *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.phone} *</label>
                    <input
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
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.cnic}</label>
                    <input
                      type="text"
                      name="cnic"
                      value={formData.cnic}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.program} *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    >
                      <option value="yateemkhana">{t.sponsorPage.form.programs.boys}</option>
                      <option value="zainabalia">{t.sponsorPage.form.programs.girls}</option>
                      <option value="zainabalia-school">{t.sponsorPage.form.programs.edu}</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.howHeard}</label>
                    <select
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    >
                      <option value="Facebook">{t.sponsorPage.form.sources.fb}</option>
                      <option value="WhatsApp">{t.sponsorPage.form.sources.wa}</option>
                      <option value="Friend">{t.sponsorPage.form.sources.friend}</option>
                      <option value="Website">{t.sponsorPage.form.sources.web}</option>
                      <option value="Other">{t.sponsorPage.form.sources.other}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-bold text-dark mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.sponsorPage.form.message}</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  ></textarea>
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
                    t.sponsorPage.form.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
