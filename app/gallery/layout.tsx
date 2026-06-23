import { Metadata } from 'next';
import GalleryPage from './page';

export const metadata: Metadata = {
  title: "Gallery | Aal e Imran Welfare Muzaffargarh | Yateem Khana & Zainab e Alia Photos",
  description: "View photos from Aal e Imran Welfare Organization's projects in Muzaffargarh. See our Yateem Khana orphan care, Zainab e Alia girls program, community events, flood relief and Qurbani activities.",
  keywords: "aal e imran welfare gallery, yateem khana photos, zainab e alia pictures, welfare organization muzaffargarh photos, orphan care pakistan pictures",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
