'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { LucideArrowBigRightDash } from 'lucide-react';

export function Hero() {
  return (
    <div className="w-full h-full p-6 bg-black bg-opacity-60 flex-col justify-center items-center gap-4 inline-flex">
      <div className="self-stretch text-center text-white text-7xl font-bold leading-[86.40px]">
        Discover the Art of Terrariums
      </div>
      <div className="self-stretch text-center text-white text-[32px] font-bold leading-[38.40px]">
        <br />
        Terrarium Emporium is a fictional e-commerce site built with Next.js and Tailwind CSS.
        <br />
        If you happen upon this page please feel free to provide any feedback on the project.
      </div>
      <Button className="mb-4">
        <a
          href="https://github.com/orenfackrell/nextjs-ecommerce"
          className="underline flex gap-x-2"
        >
          Source Code <LucideArrowBigRightDash />
        </a>
      </Button>
    </div>
  );
}
