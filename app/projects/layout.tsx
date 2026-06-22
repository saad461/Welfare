import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Projects | Aal e Imran Yateem Khana & Zainab e Alia | Aal e Imran Welfare",
  description: "Discover how Aal e Imran Welfare is changing lives through two powerful programs — Aal e Imran Yateem Khana providing shelter and education to orphans, and Zainab e Alia offering comprehensive care for orphaned children and quality education in Muzaffargarh, Punjab.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
