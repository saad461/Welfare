// TODO Phase 7: Replace with Supabase gallery table fetch

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  titleUr: string;
  description: string;
  descriptionUr: string;
  category: 'yateemkhana' | 'zainabalia' | 'events' | 'qurbani';
  date: string;
}

export const galleryImages: GalleryImage[] = [
  // Yateem Khana
  {
    id: "yk-1",
    src: "/images/yateemkhana/IMG_1974.webp",
    title: "Morning Assembly",
    titleUr: "صبح کی اسمبلی",
    description: "Students of Aal e Imran Yateem Khana gathering for their morning school assembly.",
    descriptionUr: "آل عمران یتیم خانہ کے طلباء صبح کی سکول اسمبلی کے لیے جمع ہو رہے ہیں۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-2",
    src: "/images/yateemkhana/IMG_1979.webp",
    title: "Classroom Learning",
    titleUr: "کلاس روم میں تعلیم",
    description: "Orphaned boys receiving quality education in a supportive environment.",
    descriptionUr: "یتیم لڑکے ایک معاون ماحول میں معیاری تعلیم حاصل کر رہے ہیں۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-3",
    src: "/images/yateemkhana/IMG_1982.webp",
    title: "Children Reciting Holy Quran",
    titleUr: "بچے قرآن پاک کی تلاوت کرتے ہوئے",
    description: "Religious education is a core part of our curriculum at the orphanage.",
    descriptionUr: "دینی تعلیم ہمارے یتیم خانے کے نصاب کا ایک بنیادی حصہ ہے۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-4",
    src: "/images/yateemkhana/IMG_1987.webp",
    title: "Group Activity",
    titleUr: "گروہی سرگرمی",
    description: "Students participating in interactive group learning sessions.",
    descriptionUr: "طلباء انٹرایکٹو گروپ لرننگ سیشنز میں حصہ لے رہے ہیں۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-5",
    src: "/images/yateemkhana/IMG_1995.webp",
    title: "Lunch Time",
    titleUr: "کھانے کا وقت",
    description: "Providing nutritious meals to our residents every day.",
    descriptionUr: "اپنے مکینوں کو ہر روز غذائیت سے بھرپور کھانا فراہم کرنا۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-6",
    src: "/images/yateemkhana/IMG_2009.webp",
    title: "Outdoor Play",
    titleUr: "باہر کھیل کود",
    description: "Recreational activities are essential for the healthy growth of children.",
    descriptionUr: "بچوں کی صحت مند نشوونما کے لیے تفریحی سرگرمیاں ضروری ہیں۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-7",
    src: "/images/yateemkhana/IMG_20210903_201434-400x284.webp",
    title: "Institutional Visit",
    titleUr: "ادارے کا دورہ",
    description: "Community members visiting the Yateem Khana to support our mission.",
    descriptionUr: "کمیونٹی ممبران ہمارے مشن کی حمایت کے لیے یتیم خانہ کا دورہ کر رہے ہیں۔",
    category: "yateemkhana",
    date: "2021"
  },
  {
    id: "yk-8",
    src: "/images/yateemkhana/IMG_20230101_142923-scaled.webp",
    title: "New Year Celebration",
    titleUr: "نئے سال کی تقریب",
    description: "Special event organized for children to celebrate and share joy.",
    descriptionUr: "بچوں کے لیے جشن منانے اور خوشیاں بانٹنے کے لیے خصوصی تقریب کا انعقاد کیا گیا۔",
    category: "yateemkhana",
    date: "2023"
  },
  {
    id: "yk-9",
    src: "/images/yateemkhana/IMG_2032.webp",
    title: "Computer Lab",
    titleUr: "کمپیوٹر لیب",
    description: "Equipping our students with modern digital skills.",
    descriptionUr: "اپنے طلباء کو جدید ڈیجیٹل مہارتوں سے آراستہ کرنا۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-10",
    src: "/images/yateemkhana/IMG_2052.webp",
    title: "Evening Prayers",
    titleUr: "شام کی دعائیں",
    description: "Children performing congregational prayers together.",
    descriptionUr: "بچے مل کر باجماعت نماز ادا کر رہے ہیں۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-11",
    src: "/images/yateemkhana/IMG_2064.webp",
    title: "Art Class",
    titleUr: "آرٹ کلاس",
    description: "Encouraging creativity and self-expression through art.",
    descriptionUr: "آرٹ کے ذریعے تخلیقی صلاحیتوں اور اظہار رائے کی حوصلہ افزائی کرنا۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-12",
    src: "/images/yateemkhana/IMG_2070.webp",
    title: "Library Time",
    titleUr: "لائبریری کا وقت",
    description: "Fostering a love for reading among our students.",
    descriptionUr: "اپنے طلباء میں مطالعہ کا شوق پیدا کرنا۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-13",
    src: "/images/yateemkhana/IMG_2080.webp",
    title: "Health Checkup",
    titleUr: "طبی معائنہ",
    description: "Regular medical checkups to ensure the well-being of every child.",
    descriptionUr: "ہر بچے کی فلاح و بہبود کو یقینی بنانے کے لیے باقاعدہ طبی معائنہ۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-14",
    src: "/images/yateemkhana/IMG_2083.webp",
    title: "Award Ceremony",
    titleUr: "تقریب تقسیم انعامات",
    description: "Recognizing academic and extracurricular achievements.",
    descriptionUr: "تعلیمی اور غیر نصابی کامیابیوں کا اعتراف۔",
    category: "yateemkhana",
    date: "2025"
  },
  {
    id: "yk-15",
    src: "/images/yateemkhana/IMG_2085.webp",
    title: "Sports Day",
    titleUr: "کھیلوں کا دن",
    description: "Promoting physical fitness and team spirit.",
    descriptionUr: "جسمانی فٹنس اور ٹیم ورک کے جذبے کو فروغ دینا۔",
    category: "yateemkhana",
    date: "2025"
  },

  // Zainab e Alia
  {
    id: "za-1",
    src: "/images/zainabalia/IMG_1771.webp",
    title: "Girls Education at Zainab e Alia",
    titleUr: "زینب عالیہ میں بچیوں کی تعلیم",
    description: "Empowering girls through quality education in Muzaffargarh.",
    descriptionUr: "مظفرگڑھ میں معیاری تعلیم کے ذریعے بچیوں کو بااختیار بنانا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-2",
    src: "/images/zainabalia/IMG_1779.webp",
    title: "Girls of Zainab e Alia Reciting Quran",
    titleUr: "زینب عالیہ کی بچیاں تلاوت قرآن کرتے ہوئے",
    description: "Strong emphasis on Islamic values and Quranic education.",
    descriptionUr: "اسلامی اقدار اور قرآنی تعلیم پر بھرپور زور۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-3",
    src: "/images/zainabalia/IMG_1790.webp",
    title: "Science Lab Experiment",
    titleUr: "سائنس لیب کا تجربہ",
    description: "Providing modern educational facilities for all students.",
    descriptionUr: "تمام طلباء کے لیے جدید تعلیمی سہولیات کی فراہمی۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-4",
    src: "/images/zainabalia/IMG_1797.webp",
    title: "Zainab e Alia School Building",
    titleUr: "زینب عالیہ سکول کی عمارت",
    description: "A safe and modern environment for learning.",
    descriptionUr: "سیکھنے کے لیے ایک محفوظ اور جدید ماحول۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-5",
    src: "/images/zainabalia/IMG_1799.webp",
    title: "Visit of Caretaker Syed Shabbir Abbas Naqvi",
    titleUr: "خادم سید شبیر عباس نقوی کا دورہ",
    description: "Caretaker overseeing operations and interacting with students.",
    descriptionUr: "خادم آپریشنز کی نگرانی کر رہے ہیں اور طلباء کے ساتھ بات چیت کر رہے ہیں۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-6",
    src: "/images/zainabalia/IMG_1802.webp",
    title: "Student Discussion",
    titleUr: "طلباء کا تبادلہ خیال",
    description: "Encouraging critical thinking and collaborative learning.",
    descriptionUr: "تنقیدی سوچ اور باہمی سیکھنے کی حوصلہ افزائی کرنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-7",
    src: "/images/zainabalia/IMG_1805.webp",
    title: "Classroom Activity",
    titleUr: "کلاس روم کی سرگرمی",
    description: "Interactive learning sessions at Zainab e Alia Higher Secondary School.",
    descriptionUr: "زینب عالیہ ہائر سیکنڈری سکول میں انٹرایکٹو لرننگ سیشنز۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-8",
    src: "/images/zainabalia/IMG_1812.webp",
    title: "Teacher Interaction",
    titleUr: "استاد کے ساتھ بات چیت",
    description: "Dedicated teachers guiding the next generation.",
    descriptionUr: "سرشار اساتذہ اگلی نسل کی رہنمائی کر رہے ہیں۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-9",
    src: "/images/zainabalia/IMG_1816.webp",
    title: "School Library",
    titleUr: "سکول کی لائبریری",
    description: "Access to a wide range of books for research and leisure.",
    descriptionUr: "تحقیق اور تفریح کے لیے کتابوں کی وسیع رینج تک رسائی۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-10",
    src: "/images/zainabalia/IMG_1819.webp",
    title: "Morning Prayers",
    titleUr: "صبح کی دعائیں",
    description: "Starting the day with spiritual reflection and prayer.",
    descriptionUr: "دن کا آغاز روحانی فکر اور دعا کے ساتھ کرنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-11",
    src: "/images/zainabalia/IMG_1827.webp",
    title: "Computer Class",
    titleUr: "کمپیوٹر کلاس",
    description: "Learning essential tech skills for the modern world.",
    descriptionUr: "جدید دنیا کے لیے ضروری ٹیکنالوجی کی مہارتیں سیکھنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-12",
    src: "/images/zainabalia/IMG_1833.webp",
    title: "Outdoor Recreation",
    titleUr: "باہر تفریح",
    description: "Students enjoying their break time in the courtyard.",
    descriptionUr: "طلباء صحن میں اپنے وقفے کے وقت سے لطف اندوز ہو رہے ہیں۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-13",
    src: "/images/zainabalia/IMG_1841.webp",
    title: "School Hall",
    titleUr: "سکول ہال",
    description: "A large space for assemblies and community events.",
    descriptionUr: "اسمبلیوں اور کمیونٹی تقریبات کے لیے ایک بڑی جگہ۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-14",
    src: "/images/zainabalia/IMG_1845.webp",
    title: "Student Presentation",
    titleUr: "طلباء کی پریزنٹیشن",
    description: "Building confidence through public speaking and presentations.",
    descriptionUr: "پبلک سپیکنگ اور پریزنٹیشنز کے ذریعے اعتماد پیدا کرنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-15",
    src: "/images/zainabalia/IMG_1849.webp",
    title: "Primary Classroom",
    titleUr: "پرائمری کلاس روم",
    description: "Foundational education for the youngest students.",
    descriptionUr: "سب سے چھوٹے طلباء کے لیے بنیادی تعلیم۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-16",
    src: "/images/zainabalia/IMG_1859.webp",
    title: "Secondary Education",
    titleUr: "سیکنڈری ایجوکیشن",
    description: "Preparing older students for their future careers.",
    descriptionUr: "بڑے طلباء کو ان کے مستقبل کے کیریئر کے لیے تیار کرنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-17",
    src: "/images/zainabalia/IMG_1863.webp",
    title: "Staff Meeting",
    titleUr: "اسٹاف میٹنگ",
    description: "Coordinating efforts to improve educational outcomes.",
    descriptionUr: "تعلیمی نتائج کو بہتر بنانے کے لیے کوششوں کو مربوط کرنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-18",
    src: "/images/zainabalia/IMG_1869.webp",
    title: "Vocational Training",
    titleUr: "پیشہ ورانہ تربیت",
    description: "Teaching practical skills for self-reliance.",
    descriptionUr: "خود انحصاری کے لیے عملی مہارتیں سکھانا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-19",
    src: "/images/zainabalia/IMG_1876.webp",
    title: "Creative Arts",
    titleUr: "تخلیقی فنون",
    description: "Exploring artistic talents in our students.",
    descriptionUr: "اپنے طلباء میں فنکارانہ صلاحیتوں کو اجاگر کرنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-20",
    src: "/images/zainabalia/IMG_1879.webp",
    title: "School Garden",
    titleUr: "سکول کا باغ",
    description: "Learning about nature and sustainability.",
    descriptionUr: "فطرت اور پائیداری کے بارے میں سیکھنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-21",
    src: "/images/zainabalia/IMG_1897.webp",
    title: "Reading Session",
    titleUr: "مطالعہ کا سیشن",
    description: "Quiet time dedicated to individual reading.",
    descriptionUr: "انفرادی مطالعہ کے لیے وقف پرسکون وقت۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-22",
    src: "/images/zainabalia/IMG_1909.webp",
    title: "Math Lesson",
    titleUr: "ریاضی کا سبق",
    description: "Strengthening numerical skills and problem-solving.",
    descriptionUr: "عددی مہارتوں اور مسائل حل کرنے کی صلاحیتوں کو مضبوط بنانا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-23",
    src: "/images/zainabalia/IMG_1913.webp",
    title: "Language Lab",
    titleUr: "لینگویج لیب",
    description: "Improving communication skills in multiple languages.",
    descriptionUr: "متعدد زبانوں میں بات چیت کی مہارت کو بہتر بنانا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-24",
    src: "/images/zainabalia/IMG_1921.webp",
    title: "Social Studies",
    titleUr: "سوشل سٹڈیز",
    description: "Learning about the world and our community.",
    descriptionUr: "دنیا اور اپنی کمیونٹی کے بارے میں سیکھنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-25",
    src: "/images/zainabalia/IMG_1931.webp",
    title: "Physical Education",
    titleUr: "جسمانی تعلیم",
    description: "Staying active and healthy through regular exercise.",
    descriptionUr: "باقاعدہ ورزش کے ذریعے متحرک اور صحت مند رہنا۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-26",
    src: "/images/zainabalia/IMG_1937.webp",
    title: "Science Fair",
    titleUr: "سائنس میلہ",
    description: "Showcasing student projects and innovations.",
    descriptionUr: "طلباء کے منصوبوں اور اختراعات کی نمائش۔",
    category: "zainabalia",
    date: "2025"
  },
  {
    id: "za-27",
    src: "/images/zainabalia/IMG_1941.webp",
    title: "Graduation Prep",
    titleUr: "گریجویشن کی تیاری",
    description: "Celebrating the milestones of our students.",
    descriptionUr: "اپنے طلباء کے سنگ میلوں کا جشن منانا۔",
    category: "zainabalia",
    date: "2025"
  },

  // Qurbani
  {
    id: "qb-1",
    src: "/images/qurbani/IMG-20250607-WA0044.webp",
    title: "Qurbani 2026 — Sacrifice Preparations",
    titleUr: "قربانی 2026 — تیاریاں",
    description: "Preparation for the sacrifice according to Shariah guidelines.",
    descriptionUr: "شرعی اصولوں کے مطابق قربانی کی تیاریاں۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-2",
    src: "/images/qurbani/IMG-20250607-WA0053.webp",
    title: "Qurbani Animal Selection",
    titleUr: "قربانی کے جانوروں کا انتخاب",
    description: "Carefully selecting healthy animals for the sacrifice.",
    descriptionUr: "قربانی کے لیے صحت مند جانوروں کا احتیاط سے انتخاب۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-3",
    src: "/images/qurbani/IMG-20250607-WA0060.webp",
    title: "Community Involvement",
    titleUr: "کمیونٹی کی شمولیت",
    description: "Local community members assisting in the Qurbani process.",
    descriptionUr: "قربانی کے عمل میں مقامی کمیونٹی کے اراکین کی مدد۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-4",
    src: "/images/qurbani/IMG-20250607-WA0067.webp",
    title: "Meat Packing",
    titleUr: "گوشت کی پیکنگ",
    description: "Hygienic packing of fresh meat for distribution.",
    descriptionUr: "تقسیم کے لیے تازہ گوشت کی حفظان صحت کے مطابق پیکنگ۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-5",
    src: "/images/qurbani/IMG-20250607-WA0072.webp",
    title: "Distribution Center",
    titleUr: "تقسیم کا مرکز",
    description: "Setting up centers for efficient distribution of meat.",
    descriptionUr: "گوشت کی موثر تقسیم کے لیے مراکز کا قیام۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-6",
    src: "/images/qurbani/IMG-20250607-WA0073.webp",
    title: "Loading for Distribution",
    titleUr: "تقسیم کے لیے لوڈنگ",
    description: "Loading meat packs for delivery to remote areas.",
    descriptionUr: "دور دراز علاقوں میں ترسیل کے لیے گوشت کے پیکٹ لوڈ کرنا۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-7",
    src: "/images/qurbani/IMG-20250607-WA0077.webp",
    title: "Serving the Destitute",
    titleUr: "ناداروں کی خدمت",
    description: "Ensuring every deserving family receives their share.",
    descriptionUr: "اس بات کو یقینی بنانا کہ ہر مستحق خاندان کو ان کا حصہ ملے۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-8",
    src: "/images/qurbani/IMG-20250607-WA0085.webp",
    title: "Meat Distribution in Muzaffargarh",
    titleUr: "مظفرگڑھ میں گوشت کی تقسیم",
    description: "Reaching out to widows and orphans on Eid day.",
    descriptionUr: "عید کے دن بیواؤں اور یتیموں تک پہنچنا۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-9",
    src: "/images/qurbani/IMG-20250607-WA0095.webp",
    title: "Distribution Outreach",
    titleUr: "تقسیم کی رسائی",
    description: "Extending our reach to the farthest corners of the district.",
    descriptionUr: "ضلع کے دور دراز کونوں تک اپنی رسائی کو بڑھانا۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-10",
    src: "/images/qurbani/IMG-20250607-WA0106.webp",
    title: "Qurbani 2026 — Meat Distribution",
    titleUr: "قربانی 2026 — گوشت کی تقسیم",
    description: "Successfull completion of the 2026 Qurbani program.",
    descriptionUr: "2026 کے قربانی پروگرام کی کامیابی سے تکمیل۔",
    category: "qurbani",
    date: "2026"
  },
  {
    id: "qb-11",
    src: "/images/qurbani/IMG-20250609-WA0010.webp",
    title: "Post-Eid Distribution",
    titleUr: "عید کے بعد کی تقسیم",
    description: "Continuing distribution to ensure no one is left behind.",
    descriptionUr: "تقسیم کو جاری رکھنا تاکہ اس بات کو یقینی بنایا جا سکے کہ کوئی پیچھے نہ رہے۔",
    category: "qurbani",
    date: "2026"
  },

  // Events (Using Zainab Alia/Yateem Khana images that look like events)
  {
    id: "ev-1",
    src: "/images/hero/Black and White Red Gradient Syria and Turkey Earthquake Donation Instagram_20250414_145933_0000.webp",
    title: "Flood Relief Drive",
    titleUr: "سیلاب سے بچاؤ کی مہم",
    description: "Emergency relief distribution to flood victims in the region.",
    descriptionUr: "علاقے میں سیلاب متاثرین کے لیے ہنگامی امداد کی تقسیم۔",
    category: "events",
    date: "2025"
  },
  {
    id: "ev-2",
    src: "/images/hero/Black and White Red Gradient Syria and Turkey Earthquake Donation Instagram_20250418_190917_0000.webp",
    title: "Ration Distribution",
    titleUr: "راشن کی تقسیم",
    description: "Providing essential food supplies to deserving families.",
    descriptionUr: "مستحق خاندانوں کو ضروری اشیائے خوردونوش کی فراہمی۔",
    category: "events",
    date: "2025"
  },
  {
    id: "ev-3",
    src: "/images/hero/Black and White Red Gradient Syria and Turkey Earthquake Donation Instagram_20250421_231618_0000.webp",
    title: "Community Outreach",
    titleUr: "کمیونٹی آؤٹ ریچ",
    description: "Engaging with the local community to identify and serve those in need.",
    descriptionUr: "ضرورت مندوں کی شناخت اور خدمت کے لیے مقامی کمیونٹی کے ساتھ مشغول ہونا۔",
    category: "events",
    date: "2025"
  }
];
