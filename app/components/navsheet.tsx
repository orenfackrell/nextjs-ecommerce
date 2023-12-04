import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

import { Menu } from 'lucide-react';

export function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger className="flex p-auto my-auto w-max align-self-start">
        <Menu className="h-6 w-6" />
        Terrarium Emporium
      </SheetTrigger>
      <SheetContent side={'left'} className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Come explore what we have to offer</SheetTitle>
          <SheetDescription>
            Search below and be taken to the terrarium of your dreams
          </SheetDescription>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="getting-started">
            <AccordionTrigger>Getting Started</AccordionTrigger>
            <AccordionContent>
              <ol className="flex flex-col gap-2">
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Introduction
                  </a>
                  <p>Find out all about the basics from our wonderful team.</p>
                </li>
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Beginning
                  </a>
                  <p> Helpful tips and tricks on how to get you started.</p>
                </li>
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Maintenance
                  </a>
                  <p> Discover best practices to keep your personal ecosystem healthy.</p>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="store">
            <AccordionTrigger>Store</AccordionTrigger>
            <AccordionContent>
              <ol className="flex flex-col gap-2">
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Glassware
                  </a>
                  <p>A range of glassware to suit all your spaces.</p>
                </li>
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Terrarium Ingredients
                  </a>
                  <p>All essential minerals and materials for any terrarium.</p>
                </li>{' '}
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Terrestrial plants
                  </a>
                  <p>Find the perfect plant to bring your terrarium to life.</p>
                </li>
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Aquatic plants
                  </a>
                  <p>Visually or semantically separates content.</p>
                </li>
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Microfauna
                  </a>
                  <p>These critters will keep your terrarium clean and healthy.</p>
                </li>{' '}
                <li className="flex flex-col">
                  <a href="/" className="text-xl hover:underline">
                    Terrarium Tools
                  </a>
                  <p>All the tools needed to build and maintain your terrarium.</p>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
