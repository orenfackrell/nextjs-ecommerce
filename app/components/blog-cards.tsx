import React from 'react';
import { Card } from './ui/card';
import { MoveRight } from 'lucide-react';

function BlogCard() {
  return (
    <Card>
      <div className="content min-h-fit p-8">
        <div className="flex mb-4 content-center">
          <a href="/" className="underline text-lg">
            Blog Title
          </a>
          <MoveRight className="ml-2 my-auto" />
        </div>
        <div className="flex justify-between min-w-fit w-1/2 text-sm">
          <p className="align-left w-max mr-4 ">By Author Name</p>
          <span className="align-right">Read time...</span>
        </div>
      </div>
    </Card>
  );
}

export function BlogCards() {
  return (
    <section className="w-full p-2">
      <div className="">
        <h1 className="text-4xl font-bold mt-2">Getting Started</h1>
      </div>
      <div className="flex flex-col gap-y-4 m-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}

export default BlogCards;
