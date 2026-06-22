-- Videos table
CREATE TABLE videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  project TEXT CHECK (project IN
    ('yateemkhana', 'zainabalia', 'general')),
  video_url TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Gallery table
CREATE TABLE gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT CHECK (category IN
    ('yateemkhana', 'zainabalia', 'events')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  category TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Events table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE,
  location TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Donations table
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT,
  phone TEXT,
  email TEXT,
  amount INTEGER,
  project TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orphan sponsors table
CREATE TABLE sponsors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sponsor_name TEXT,
  phone TEXT,
  email TEXT,
  cnic TEXT,
  tier TEXT,
  project TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Qurbani bookings table
CREATE TABLE qurbani_bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  phone TEXT,
  animal_type TEXT,
  shares INTEGER,
  city TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  subject TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Team members table
CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  bio TEXT,
  photo_url TEXT,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Impact stats table
CREATE TABLE impact_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  label_ur TEXT,
  value TEXT NOT NULL,
  icon TEXT,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
