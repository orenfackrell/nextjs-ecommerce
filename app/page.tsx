'use client';

import { NavMenu } from './components/navbar';
import { UserIcons } from './components/user-icons';
import { Footer } from './components/footer';
import { Hero } from './components/hero';

export default function Home() {
  return (
    <>
      <nav className="flex justify-between border-b p-2 mb-2">
        <NavMenu />
        <UserIcons />
      </nav>

      <Hero />
      <Footer />
    </>
  );
}
