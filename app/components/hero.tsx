'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="flex items-center justify-center w-full">
      <Image
        src="/hero-desktop.jpg"
        width={1000}
        height={760}
        sizes="(max-width: 768px) 100vw, 33vw"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </section>
  );
}
