'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ZAKAT_CONFIG } from '@/lib/constants';

export default function ZakatCalculator() {
  const { t, isUrdu } = useLanguage();

  const [formData, setFormData] = useState({
    cash: '',
    gold: '',
    silver: '',
    business: '',
    loansR: '',
    assets: '',
    debts: ''
  });

  const [results, setResults] = useState({
    totalAssets: 0,
    netWealth: 0,
    zakatDue: 0,
    isEligible: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === '' || /^\d+$/.test(value)) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    const cash = Number(formData.cash) || 0;
    const gold = Number(formData.gold) || 0;
    const silver = Number(formData.silver) || 0;
    const business = Number(formData.business) || 0;
    const loansR = Number(formData.loansR) || 0;
    const assets = Number(formData.assets) || 0;
    const debts = Number(formData.debts) || 0;

    const totalAssets = cash + gold + silver + business + loansR + assets;
    const netWealth = totalAssets - debts;
    const isEligible = netWealth >= ZAKAT_CONFIG.nisabValuePKR;
    const zakatDue = isEligible ? netWealth * (ZAKAT_CONFIG.zakatPercentage / 100) : 0;

    setResults({
      totalAssets,
      netWealth,
      zakatDue,
      isEligible
    });
  }, [formData]);

  const inputFields = [
    { name: 'cash', label: t.zakat.fields.cash.label, placeholder: t.zakat.fields.cash.placeholder },
    { name: 'gold', label: t.zakat.fields.gold.label, placeholder: t.zakat.fields.gold.placeholder },
    { name: 'silver', label: t.zakat.fields.silver.label, placeholder: t.zakat.fields.silver.placeholder },
    { name: 'business', label: t.zakat.fields.business.label, placeholder: t.zakat.fields.business.placeholder },
    { name: 'loansR', label: t.zakat.fields.loansR.label, placeholder: t.zakat.fields.loansR.placeholder },
    { name: 'assets', label: t.zakat.fields.assets.label, placeholder: t.zakat.fields.assets.placeholder },
    { name: 'debts', label: t.zakat.fields.debts.label, placeholder: t.zakat.fields.debts.placeholder, isDeduction: true },
  ];

  return (
    <section className="py-24 px-6 bg-white" id="zakat-calculator">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4"
          >
            <Calculator size={20} />
            <span className="font-bold tracking-wider text-sm">{t.footer.programs.zakat}</span>
          </motion.div>
          <h2 className={`text-4xl md:text-5xl font-display font-bold text-dark mb-6 ${isUrdu ? 'urdu' : ''}`}>
            {t.zakat.heading}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isUrdu ? 'urdu' : ''}`}>
            {t.zakat.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Green Header */}
          <div className="bg-primary p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${isUrdu ? 'urdu' : ''}`}>{t.zakat.nisabBox.title}</h3>
                <div className={`space-y-1 opacity-90 text-sm ${isUrdu ? 'urdu' : ''}`}>
                  <p>{t.zakat.nisabBox.gold}</p>
                  <p>{t.zakat.nisabBox.silver}</p>
                  <div className="pt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs opacity-80">
                    <p>{t.zakat.nisabBox.goldRate}</p>
                    <p>{t.zakat.nisabBox.silverRate}</p>
                    <p>{t.zakat.nisabBox.goldValue}</p>
                    <p>{t.zakat.nisabBox.silverValue}</p>
                  </div>
                  <p className="font-bold text-secondary mt-2">{t.zakat.nisabBox.instruction}</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className={`text-xs uppercase tracking-widest mb-1 opacity-80 ${isUrdu ? 'urdu' : ''}`}>{isUrdu ? 'نصاب کی مالیت' : 'Nisab Value'}</p>
                <p className="text-3xl font-bold text-secondary">PKR {ZAKAT_CONFIG.nisabValuePKR.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="space-y-6">
              {inputFields.map((field) => (
                <div key={field.name}>
                  <label className={`block text-sm font-bold mb-2 ${field.isDeduction ? 'text-red-600' : 'text-dark'} ${isUrdu ? 'urdu' : ''}`}>
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className={`w-full px-4 py-3 rounded-xl border ${field.isDeduction ? 'border-red-100 focus:ring-red-500' : 'border-gray-200 focus:ring-primary'} focus:outline-none focus:ring-2 transition-all`}
                  />
                </div>
              ))}

              <div className="bg-secondary/10 p-4 rounded-xl border border-secondary/20">
                <p className={`text-xs text-secondary font-medium leading-relaxed ${isUrdu ? 'urdu' : ''}`}>
                  {t.zakat.nisabBox.note}
                </p>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              <div className="sticky top-24">
                <div className={`p-8 rounded-3xl border-2 border-dashed flex flex-col items-center text-center transition-all ${
                  results.isEligible ? 'bg-secondary/5 border-secondary' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h4 className={`text-lg font-bold mb-4 ${isUrdu ? 'urdu' : ''}`}>
                    {results.isEligible ? t.zakat.results.eligible : t.zakat.results.below}
                  </h4>

                  <div className="mb-6">
                    <p className={`text-sm text-gray-500 mb-1 ${isUrdu ? 'urdu' : ''}`}>{t.zakat.results.due}</p>
                    <p className={`text-5xl font-bold text-primary ${isUrdu ? 'font-sans' : ''}`}>
                      {Math.round(results.zakatDue).toLocaleString()}
                    </p>
                  </div>

                  {results.isEligible ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2 mb-6"
                    >
                      <CheckCircle2 size={14} />
                      {t.zakat.results.badge}
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 mb-6">
                      <AlertCircle size={24} className="text-gray-400" />
                      <p className={`text-sm text-gray-600 ${isUrdu ? 'urdu' : ''}`}>{t.zakat.results.notRequired}</p>
                      <p className={`text-sm font-bold text-secondary ${isUrdu ? 'urdu' : ''}`}>{t.zakat.results.sadqah}</p>
                    </div>
                  )}

                  <a
                    href="#donate"
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                      results.isEligible
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    } ${isUrdu ? 'urdu' : ''}`}
                  >
                    {t.zakat.results.payNow}
                  </a>

                  <p className={`mt-6 text-sm text-gray-500 italic ${isUrdu ? 'urdu' : ''}`}>
                    {t.zakat.results.impact}
                  </p>
                </div>

                {/* Hadith Box */}
                <div className="mt-8 p-6 bg-background rounded-2xl border border-gray-100">
                  <p className={`text-primary font-bold italic mb-2 text-center ${isUrdu ? 'urdu' : ''}`}>
                    {t.zakat.islamic.hadith}
                  </p>
                  <p className={`text-xs text-gray-500 text-center ${isUrdu ? 'urdu' : ''}`}>
                    {t.zakat.islamic.ref}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
