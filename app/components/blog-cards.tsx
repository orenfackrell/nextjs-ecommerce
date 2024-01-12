import React from 'react';
import { MoveRight } from 'lucide-react';

function BlogCard({ title }) {
  return (
    <div className="w-full h-full p-4 rounded-3xl shadow border border-opacity-25 flex flex-col justify-start gap-4 inline-flex">
      <div className="flex gap-6 items-center self-stretch text-2xl font-bold leading-[28.80px] underline">
        <a href="/" className="underline flex gap-x-2">
          {title} <MoveRight />
        </a>
      </div>
      <div className="self-stretch text-base font-normal leading-normal">
        Lorem ipsum dolor sit amet consectetur. Volutpat consequat in nulla enim amet tellus nec
        posuere accumsan. Feugiat turpis consectetur magnis tellus pretium nulla massa quis. Ligula
        ipsum convallis in leo urna sed tempus sit. Convallis amet non justo dui.
      </div>
    </div>
  );
}

export function BlogCards() {
  return (
    <section className="w-full h-full px-6 py-20 flex-col justify-center items-center gap-6 inline-flex">
      <div className="">
        <h1 className="text-4xl font-bold mt-2">Getting Started</h1>
      </div>
      <div className="w-full h-full justify-center items-center gap-6 inline-flex flex-col md:flex-row">
        <BlogCard title={'Introduction'} />
        <BlogCard title={'Beginning'} />
        <BlogCard title={'Maintenance'} />
      </div>
    </section>
  );
}

export default BlogCards;
