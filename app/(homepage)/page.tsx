'use client';

import { NavMenu } from '../components/navbar';
import { UserIcons } from '../components/user-icons';
import { Footer } from '../components/footer';
import { Hero } from '../components/hero';
import { NavSheet } from '../components/navsheet';
import BlogCards from '../components/blog-cards';

export default function Home() {
  return (
    <main className="h-screen flex flex-col md:transition-all">
      <nav className="hidden md:flex justify-between border-b p-2">
        <NavMenu />
        <UserIcons />
      </nav>
      <nav className="flex md:hidden justify-between border-b p-2">
        <NavSheet />
        <UserIcons />
      </nav>

      <Hero />

      <BlogCards />
      <Footer />
    </main>
  );
}
