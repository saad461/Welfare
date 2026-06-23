import { Metadata } from 'next';
import BlogPage from './page';

export const metadata: Metadata = {
  title: "Blog | Aal e Imran Welfare | Islamic Articles & Welfare News",
  description: "Read articles about Islamic giving, orphan care, Zakat, Sadqah and welfare news from Aal e Imran Welfare Organization Muzaffargarh Pakistan.",
  keywords: "islamic welfare blog, zakat articles urdu, orphan care pakistan blog, sadqah importance, aal e imran news",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
