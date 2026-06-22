import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Team | Aal e Imran Welfare Organization Muzaffargarh",
  description: "Meet the dedicated team behind Aal e Imran Welfare Organization. Founded by Syed Shabbar Abbas Naqvi, our team works tirelessly to serve orphans, widows and underprivileged in Muzaffargarh, Punjab, Pakistan.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
