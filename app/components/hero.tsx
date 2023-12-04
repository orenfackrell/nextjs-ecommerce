'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="flex-col flex items-center justify-between w-full my-4 md:h-1/3 md:flex-row p-2">
      <div className="flex flex-col items-start justify-center w-full h-full p-6 space-y-6">
        <h1 className="text-4xl font-bold">Terrarium Emporium</h1>
        <p className="text-lg">
          Terrarium Emporium is a fictional e-commerce site built with Next.js and Tailwind CSS.
        </p>
        <a href="/" />
      </div>
      <div className="relative w-full max-w-2xl h-full aspect-video">
        <Image
          className="place-self-end"
          src="/hero-desktop.jpg"
          quality={100}
          fill
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </section>
  );
}
