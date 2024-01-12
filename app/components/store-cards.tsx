import React from 'react';
import Link from 'next/link';
import { cn, getURL } from '@/lib/utils';

interface StoreCardProps {
  title: string;
}

function StoreCard({ title }: StoreCardProps) {
  const img = getURL(title);
  return (
    <div className={cn('w-full h-full bg-cover bg-center rounded-xl', img)}>
      <Link href="/">
        <div className="w-full h-full p-2.5 bg-black bg-opacity-40 rounded-xl border border-black flex-col justify-end items-start gap-2.5 inline-flex">
          <div className="text-white text-32 font-bold leading-38.40px">{title}</div>
        </div>
      </Link>
    </div>
  );
}

export function StoreCards() {
  return (
    <div className="w-full h-full p-6 flex-col justify-start items-center gap-6 inline-flex">
      <div className="text-4xl font-bold leading-[57.60px]">Our Store</div>

      <div className="w-full h-[360px] p-2.5 justify-center items-center gap-2.5 inline-flex">
        <StoreCard title={'Glassware'} />
        <StoreCard title={'Ingredients'} />
        <StoreCard title={'Terrestrial'} />
        <StoreCard title={'Aquatic'} />
        <StoreCard title={'Microfauna'} />
        <StoreCard title={'Tools'} />
      </div>
    </div>
  );
}
