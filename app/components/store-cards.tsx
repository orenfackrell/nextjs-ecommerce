import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StoreCardProps {
  title: string;
  alt: string;
}

function StoreCardBG({ title, alt }: StoreCardProps) {
  return (
    <Image
      src={`/${title}.png`}
      alt={alt}
      width={512}
      height={512}
      style={{
        height: '100%',
        aspectRatio: 1 / 1,
        objectFit: 'cover',
        borderRadius: '12px',
      }}
      quality={100}
    />
  );
}

function StoreCard({ title, alt }: StoreCardProps) {
  return (
    <div className="w-full h-full rounded-xl">
      <Link href="/">
        <div className="pb-2 rounded-xl border border-black flex-col justify-end items-start gap-2.5 inline-flex">
          <StoreCardBG title={title} alt={alt} />
          <div className="mx-2 text-32 font-bold leading-38.40px">{title}</div>
        </div>
      </Link>
    </div>
  );
}

export function StoreCards() {
  return (
    <div className="w-full h-max p-6 flex-col justify-start items-center gap-6 inline-flex">
      <div className="text-4xl font-bold leading-[57.60px]">Our Store</div>

      <div className="w-full h-max p-2.5 grid grid-cols-2 justify-center items-center gap-2.5 inline-flex md:flex flex-row h-full">
        <StoreCard
          title={'Glassware'}
          alt="An image showing a piece of glassware containing a terrarium"
        />
        <StoreCard
          title={'Ingredients'}
          alt="An image showing minerals used for terrarium maintenance"
        />
        <StoreCard
          title={'Terrestrial'}
          alt="An image showing plants grown on land for terrariums"
        />
        <StoreCard title={'Aquatic'} alt="An image showing aquatic plants for terrariums" />
        <StoreCard
          title={'Microfauna'}
          alt="An image showing examples of miniature creatures that live in a terrarium"
        />
        <StoreCard title={'Tools'} alt="An image showing tools used for crafting a terrarium" />
      </div>
    </div>
  );
}
