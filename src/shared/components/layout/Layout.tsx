import { type ReactNode } from 'react';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative mx-auto mt-6 mb-2 w-[95%] flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
