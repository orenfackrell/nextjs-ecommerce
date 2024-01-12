'use client';

import { Footer } from '../components/footer';
import BlogCards from '../components/blog-cards';
import AboveFold from '../components/above-fold';
import { StoreCards } from '../components/store-cards';

export default function Home() {
  return (
    <main className="flex flex-col md:transition-all">
      <AboveFold />
      <BlogCards />
      <StoreCards />
      <Footer />
    </main>
  );
}
