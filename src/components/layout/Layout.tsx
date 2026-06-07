import { type ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative my-6 flex-1">{children}</main>
      <Footer />
    </>
  );
}
