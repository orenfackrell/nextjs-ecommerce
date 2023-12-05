'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { LucideArrowBigRightDash } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex-col flex items-center justify-between w-full my-4 md:h-1/3 md:flex-row p-2">
      <div className="flex flex-col items-start justify-center w-full h-full p-6 space-y-6">
        <h1 className="text-4xl font-bold">Discover the Art of Terrariums</h1>
        <p className="text-lg">
          Terrarium Emporium is a fictional e-commerce site built with Next.js and Tailwind CSS.
        </p>
        <p>If you happen upon this page please feel free to provide any feedback on the project.</p>
        <Button>
          <a
            href="https://github.com/orenfackrell/nextjs-ecommerce"
            className="underline flex gap-x-2"
          >
            Source Code <LucideArrowBigRightDash />
          </a>
        </Button>
      </div>
      <div className="relative w-full max-w-xl h-full aspect-video">
        <Image
          className="place-self-end"
          src="/hero-desktop.jpg"
          quality={100}
          fill={true}
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </section>
  );
}
