'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex flex-col items-start justify-center w-full h-full p-6 space-y-6">
        <h1 className="text-4xl font-bold">Terrarium Emporium</h1>
        <p className="text-lg">
          Terrarium Emporium is a fictional e-commerce site built with Next.js and Tailwind CSS.
        </p>
        <a href="/" />
      </div>
      <Image
        className="place-self-end"
        src="/hero-desktop.jpg"
        width={720}
        height={760}
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </section>
  );
}
