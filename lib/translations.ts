export type Language = 'EN' | 'UR';

export const translations = {
  EN: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      gallery: "Gallery",
      blog: "Blog",
      events: "Events",
      qurbani: "Qurbani",
      donate: "Donate",
      contact: "Contact",
      donateNow: "Donate Now",
    },
    hero: {
      eyebrow: "Serving Pakistan Since 2014",
      heading: "Serving Humanity, Honoring Faith",
      subheading: "Providing shelter, care, and hope to orphans and vulnerable women across Pakistan",
      ctaDonate: "Donate Now",
      ctaProjects: "Our Projects",
      stats: {
        orphans: "500+ Orphans",
        women: "300+ Women",
        years: "10+ Years",
      },
    },
    about: {
      eyebrow: "WHO WE ARE",
      heading: "A Mission Rooted in Faith, Driven by Compassion",
      body1: "Aal e Imran Welfare is a registered non-profit organization serving the most vulnerable communities across Pakistan. Founded on the timeless Islamic values of compassion, justice, and generosity, we believe every human being deserves dignity, care, and opportunity — regardless of their circumstances.",
      body2: "Since our founding, we have dedicated ourselves to two transformative programs: providing a safe, nurturing home for orphaned children through our Aal e Imran Yateem Khana, and rebuilding the lives of widows and vulnerable women through our Zainab e Alia program.",
      quranAyah: "And they give food in spite of love for it to the needy, the orphan, and the captive",
      quranRef: "(Surah Al-Insan 76:8)",
      values: {
        faith: {
          title: "Faith",
          desc: "Grounded in Islamic principles of giving",
        },
        compassion: {
          title: "Compassion",
          desc: "Serving with love and dignity",
        },
        transparency: {
          title: "Transparency",
          desc: "Every rupee accountable",
        },
      },
      learnMore: "Learn More About Us",
      statOrphans: "500+ Orphans Cared For",
      statYears: "10+ Years of Service",
    },
    impact: {
      heading: "Our Impact — By The Numbers",
      subtext: "By the grace of Allah, your generosity has transformed thousands of lives across Muzaffargarh and beyond",
      stats: {
        mosques: "Mosques Built",
        houses: "Houses Built",
        weddings: "Weddings Supported",
        trees: "Trees Planted",
        pumps: "Hand Pumps Installed",
        medical: "Medical Treatments",
        orphans: "Orphans Cared For",
        students: "Students Educated",
      }
    },
    projects: {
      hero: {
        heading: "Our Projects",
        subtext: "Two life-changing programs serving the most vulnerable in Muzaffargarh, Punjab",
        breadcrumbHome: "Home",
        breadcrumbProjects: "Projects",
      },
      overview: {
        yateemKhana: {
          title: "Aal e Imran Yateem Khana",
          desc: "Nurturing home and quality education for orphaned children.",
        },
        zainabAlia: {
          title: "Zainab e Alia",
          desc: "Comprehensive orphan care and schooling for underprivileged youth.",
        },
        viewDetails: "View Details",
      },
      tabs: {
        yateemKhana: "Aal e Imran Yateem Khana | آل عمران یتیم خانہ",
        zainabAlia: "Zainab e Alia | زینب عالیہ",
      },
      yateemKhana: {
        eyebrow: "ORPHAN CARE PROGRAM",
        heading: "A Safe Home for Every Orphaned Child",
        body: "Aal e Imran Yateem Khana is our flagship residential care program located in Muzaffargarh, Punjab. We provide orphaned boys and girls from deserving families with a nurturing home environment where they receive shelter, nutritious meals, quality education, healthcare, and the emotional support every child deserves. Your monthly sponsorship of just Rs. 7,500 gives a child everything they need to thrive.",
        monthlyFee: "Rs. 7,500 / month per child",
        features: {
          shelter: { title: "Safe Shelter", desc: "A clean, secure residential home" },
          meals: { title: "Nutritious Meals", desc: "Three healthy meals daily" },
          education: { title: "Quality Education", desc: "School enrollment & tutoring" },
          healthcare: { title: "Healthcare", desc: "Medical & dental care provided" },
          islamic: { title: "Islamic Education", desc: "Quran & moral values" },
          recreation: { title: "Recreation", desc: "Sports & extracurricular activities" },
        },
        stats: {
          orphans: "Orphans Cared For",
          meals: "Meals Served Daily",
          years: "Years Running",
          cost: "Monthly Cost per Child",
        },
        cta: {
          heading: "Sponsor an Orphan Today",
          hadith: 'The Prophet ﷺ said: "I and the one who sponsors an orphan will be in Paradise like these two"',
          hadithRef: "(Sahih al-Bukhari)",
          button: "Sponsor Now",
        }
      },
      zainabAlia: {
        eyebrow: "EDUCATION & ORPHAN CARE",
        heading: "Comprehensive Care & Quality Education",
        body: "The Zainab e Alia program operates two life-changing initiatives in Muzaffargarh — an orphanage providing complete care for deserving children, and a Higher Secondary School delivering quality education to underprivileged children from working-class families (Mazdoor Tabqa). Together, these programs are building a better future for the next generation.",
        programs: {
          orphanage: {
            title: "Orphanage Zainab e Alia",
            fee: "Rs. 8,500 per child",
            purpose: "Comprehensive care for orphaned children including education, food, and shelter",
            features: ["Shelter", "Meals", "Education", "Healthcare", "Counseling"],
            button: "Sponsor a Child",
          },
          school: {
            title: "Zainab e Alia Higher Secondary School",
            fee: "Rs. 2,500 per child",
            purpose: "Quality education for underprivileged children from working class (Mazdoor Tabqa) and needy communities",
            features: ["Qualified Teachers", "Modern Curriculum", "Safe Environment", "After-school Support"],
            button: "Support Education",
          },
          communityPump: {
            title: "Community Hand Pump",
            cost: "Rs. 32,000",
            purpose: "Clean drinking water for entire communities or villages without water access",
          },
          householdPump: {
            title: "Household Hand Pump",
            cost: "Rs. 70,000-80,000",
            purpose: "Individual household clean water access",
          }
        },
        stats: {
          orphans: "Children in Orphanage",
          students: "School Students",
          pumps: "Hand Pumps Installed",
          families: "Families with Clean Water",
        }
      }
    },
    preview: {
      heading: "Our Programs",
      subheading: "Focused initiatives designed to provide long-term impact and dignity.",
      learnMore: "Learn More",
      viewAll: "View All Projects",
    },
    videos: {
      heading: "See Our Work in Action",
      card1: {
        title: "Aal e Imran Yateem Khana — Our Story",
        desc: "See how your donations provide shelter, education and hope to orphaned children",
      },
      card2: {
        title: "Zainab e Alia — Changing Lives",
        desc: "Watch the impact of quality education and care in our Zainab e Alia program",
      },
      comingSoon: "Video coming soon",
    },
    footer: {
      tagline: "Serving humanity through faith and compassion since 2014",
      quickLinks: "Quick Links",
      ourPrograms: "Our Programs",
      contactUs: "Contact Us",
      address: "[PLACEHOLDER — Head Office, Karachi, Pakistan]",
      phone: "[PLACEHOLDER — +92 300 0000000]",
      email: "[PLACEHOLDER — info@aaleimranwelfare.org]",
      whatsapp: "WhatsApp: [PLACEHOLDER — +92 300 0000000]",
      rights: "© 2025 Aal e Imran Welfare. All Rights Reserved.",
      madeWith: "Made with ❤️ for Humanity",
      programs: {
        yateemKhana: "Aal e Imran Yateem Khana",
        zainabAlia: "Zainab e Alia",
        orphanSponsorship: "Orphan Sponsorship",
        qurbani: "Qurbani Program",
        zakat: "Zakat Calculator",
      }
    },
    whatsappTooltip: "Chat with us on WhatsApp",
  },
  UR: {
    nav: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      projects: "منصوبے",
      gallery: "گیلری",
      blog: "بلاگ",
      events: "تقاریب",
      qurbani: "قربانی",
      donate: "عطیہ",
      contact: "رابطہ",
      donateNow: "ابھی عطیہ دیں",
    },
    hero: {
      eyebrow: "2014 سے پاکستان کی خدمت میں",
      heading: "انسانیت کی خدمت، ایمان کا اعزاز",
      subheading: "پاکستان بھر میں یتیموں اور خواتین کو پناہ، دیکھ بھال اور امید فراہم کرنا",
      ctaDonate: "ابھی عطیہ دیں",
      ctaProjects: "ہمارے منصوبے",
      stats: {
        orphans: "500+ یتیم بچے",
        women: "300+ خواتین",
        years: "10+ سال",
      },
    },
    about: {
      eyebrow: "ہم کون ہیں",
      heading: "ایمان سے جڑا مشن، محبت سے چلتا سفر",
      body1: "آل عمران ویلفیئر ایک رجسٹرڈ فلاحی ادارہ ہے جو پاکستان بھر میں مستحق طبقات کی خدمت کر رہا ہے۔ ہم ایمان، انصاف اور سخاوت کی اسلامی اقدار پر یقین رکھتے ہیں کہ ہر انسان وقار، دیکھ بھال اور موقع کا مستحق ہے۔",
      body2: "قیام سے اب تک ہم نے دو بڑے پروگراموں کے لیے خود کو وقف کیا ہے: آل عمران یتیم خانہ کے ذریعے یتیم بچوں کو ایک محفوظ گھر فراہم کرنا، اور زینب عالیہ پروگرام کے ذریعے بیواؤں اور ضرورت مند خواتین کی زندگیوں کو دوبارہ تعمیر کرنا۔",
      quranAyah: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا",
      quranRef: "(سورۃ الانسان 76:8)",
      values: {
        faith: {
          title: "ایمان",
          desc: "عطیہ کرنے کے اسلامی اصولوں پر مبنی",
        },
        compassion: {
          title: "محبت",
          desc: "محبت اور وقار کے ساتھ خدمت",
        },
        transparency: {
          title: "شفافیت",
          desc: "ایک ایک روپے کا حساب",
        },
      },
      learnMore: "مزید جانیں",
      statOrphans: "500+ یتیموں کی دیکھ بھال",
      statYears: "10+ سالہ خدمت",
    },
    impact: {
      heading: "ہمارا اثر — اعداد و شمار میں",
      subtext: "اللہ کے فضل سے، آپ کی سخاوت نے مظفر گڑھ اور اس سے آگے ہزاروں زندگیوں کو بدل دیا ہے",
      stats: {
        mosques: "تعمیر شدہ مساجد",
        houses: "تعمیر شدہ مکانات",
        weddings: "شادیوں میں تعاون",
        trees: "لگائے گئے درخت",
        pumps: "نصب شدہ ہینڈ پمپ",
        medical: "طبی علاج",
        orphans: "یتیموں کی دیکھ بھال",
        students: "تعلیم یافتہ طلباء",
      }
    },
    projects: {
      hero: {
        heading: "ہمارے منصوبے",
        subtext: "مظفر گڑھ، پنجاب میں سب سے زیادہ مستحق افراد کی خدمت کرنے والے دو اہم پروگرام",
        breadcrumbHome: "ہوم",
        breadcrumbProjects: "منصوبے",
      },
      overview: {
        yateemKhana: {
          title: "آل عمران یتیم خانہ",
          desc: "یتیم بچوں کے لیے پرورش گاہ اور معیاری تعلیم۔",
        },
        zainabAlia: {
          title: "زینب عالیہ",
          desc: "مستحق نوجوانوں کے لیے جامع یتیموں کی دیکھ بھال اور تعلیم۔",
        },
        viewDetails: "تفصیلات دیکھیں",
      },
      tabs: {
        yateemKhana: "آل عمران یتیم خانہ | Aal e Imran Yateem Khana",
        zainabAlia: "زینب عالیہ | Zainab e Alia",
      },
      yateemKhana: {
        eyebrow: "یتیموں کی دیکھ بھال کا پروگرام",
        heading: "ہر یتیم بچے کے لیے ایک محفوظ گھر",
        body: "آل عمران یتیم خانہ مظفرگڑھ، پنجاب میں واقع ہمارا مرکزی رہائشی نگہداشت پروگرام ہے۔ ہم مستحق خاندانوں کے یتیم لڑکوں اور لڑکیوں کو گھر جیسا ماحول فراہم کرتے ہیں جہاں انہیں چھت، غذائیت سے بھرپور کھانا، معیاری تعلیم، صحت کی سہولیات اور وہ جذباتی تعاون ملتا ہے جس کا ہر بچہ مستحق ہے۔ صرف 7,500 روپے ماہانہ کی کفالت ایک بچے کو وہ سب کچھ فراہم کرتی ہے جس کی اسے ضرورت ہے۔",
        monthlyFee: "7,500 روپے / ماہ فی بچہ",
        features: {
          shelter: { title: "محفوظ چھت", desc: "ایک صاف اور محفوظ رہائشی گھر" },
          meals: { title: "غذائیت سے بھرپور کھانا", desc: "روزانہ تین وقت کا صحت بخش کھانا" },
          education: { title: "معیاری تعلیم", desc: "سکول میں داخلہ اور ٹیوشن" },
          healthcare: { title: "صحت کی سہولیات", desc: "طبی اور دانتوں کا علاج" },
          islamic: { title: "اسلامی تعلیم", desc: "قرآن اور اخلاقی اقدار" },
          recreation: { title: "تفریح", desc: "کھیل اور غیر نصابی سرگرمیاں" },
        },
        stats: {
          orphans: "یتیم بچوں کی کفالت",
          meals: "روزانہ فراہم کردہ کھانا",
          years: "خدمت کے سال",
          cost: "فی بچہ ماہانہ خرچ",
        },
        cta: {
          heading: "آج ایک یتیم بچے کو سپانسر کریں",
          hadith: 'نبی کریم ﷺ نے فرمایا: "میں اور یتیم کی کفالت کرنے والا جنت میں ان دو (انگلیوں) کی طرح ہوں گے"',
          hadithRef: "(صحیح البخاری)",
          button: "ابھی سپانسر کریں",
        }
      },
      zainabAlia: {
        eyebrow: "تعلیم اور یتیموں کی کفالت",
        heading: "جامع نگہداشت اور معیاری تعلیم",
        body: "زینب عالیہ پروگرام مظفرگڑھ میں دو اہم اقدامات چلاتا ہے — ایک یتیم خانہ جو مستحق بچوں کو مکمل دیکھ بھال فراہم کرتا ہے، اور ایک ہائر سیکنڈری سکول جو مزدور طبقے اور ضرورت مند کمیونٹیز کے بچوں کو معیاری تعلیم فراہم کرتا ہے۔ یہ پروگرام مل کر اگلی نسل کے لیے ایک بہتر مستقبل تعمیر کر رہے ہیں۔",
        programs: {
          orphanage: {
            title: "یتیم خانہ زینب عالیہ",
            fee: "8,500 روپے فی بچہ",
            purpose: "یتیم بچوں کی جامع دیکھ بھال بشمول تعلیم، خوراک اور چھت",
            features: ["چھت", "کھانا", "تعلیم", "صحت", "کونسلنگ"],
            button: "بچے کی کفالت کریں",
          },
          school: {
            title: "زینب عالیہ ہائر سیکنڈری سکول",
            fee: "2,500 روپے فی بچہ",
            purpose: "مزدور طبقے اور ضرورت مند کمیونٹیز کے مستحق بچوں کے لیے معیاری تعلیم",
            features: ["اہل اساتذہ", "جدید نصاب", "محفوظ ماحول", "سکول کے بعد تعاون"],
            button: "تعلیم میں تعاون کریں",
          },
          communityPump: {
            title: "کمیونٹی ہینڈ پمپ",
            cost: "32,000 روپے",
            purpose: "پانی کی رسائی سے محروم پوری کمیونٹیز یا دیہات کے لیے پینے کا صاف پانی",
          },
          householdPump: {
            title: "گھریلو ہینڈ پمپ",
            cost: "70,000-80,000 روپے",
            purpose: "انفرادی گھرانوں کے لیے پینے کے صاف پانی تک رسائی",
          }
        },
        stats: {
          orphans: "یتیم خانے میں بچے",
          students: "سکول کے طلباء",
          pumps: "نصب شدہ ہینڈ پمپ",
          families: "صاف پانی حاصل کرنے والے خاندان",
        }
      }
    },
    preview: {
      heading: "ہمارے پروگرام",
      subheading: "طویل مدتی اثرات اور وقار فراہم کرنے کے لیے بنائے گئے اقدامات۔",
      learnMore: "مزید جانیں",
      viewAll: "تمام منصوبے دیکھیں",
    },
    videos: {
      heading: "ہمارا کام اپنی آنکھوں سے دیکھیں",
      card1: {
        title: "آل عمران یتیم خانہ — ہماری کہانی",
        desc: "دیکھیں کہ آپ کے عطیات یتیم بچوں کو کس طرح چھت، تعلیم اور امید فراہم کرتے ہیں",
      },
      card2: {
        title: "زینب عالیہ — زندگیاں بدلنا",
        desc: "ہمارے زینب عالیہ پروگرام میں معیاری تعلیم اور دیکھ بھال کے اثرات دیکھیں",
      },
      comingSoon: "ویڈیو جلد آرہی ہے",
    },
    footer: {
      tagline: "2014 سے ایمان اور محبت کے ساتھ انسانیت کی خدمت",
      quickLinks: "فوری لنکس",
      ourPrograms: "ہمارے پروگرام",
      contactUs: "رابطہ کریں",
      address: "[PLACEHOLDER — ہیڈ آفس، کراچی، پاکستان]",
      phone: "[PLACEHOLDER — +92 300 0000000]",
      email: "[PLACEHOLDER — info@aaleimranwelfare.org]",
      whatsapp: "واٹس ایپ: [PLACEHOLDER — +92 300 0000000]",
      rights: "© 2025 آل عمران ویلفیئر۔ جملہ حقوق محفوظ ہیں۔",
      madeWith: "انسانیت کے لیے ❤️ کے ساتھ بنایا گیا",
      programs: {
        yateemKhana: "آل عمران یتیم خانہ",
        zainabAlia: "زینب عالیہ",
        orphanSponsorship: "یتیم کفالت",
        qurbani: "قربانی پروگرام",
        zakat: "زکوٰۃ کیلکولیٹر",
      }
    },
    whatsappTooltip: "ہم سے واٹس ایپ پر بات کریں",
  },
};
