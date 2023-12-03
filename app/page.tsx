'use client';

import { NavMenu } from './components/navbar';
import { Footer } from './components/footer';
import { Hero } from './components/hero';

export default function Home() {
  return (
    <>
      <NavMenu />

      <Hero />
      <Footer />
    </>
  );
}
