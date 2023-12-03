'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/app/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Glassware',
    href: '/',
    description: 'A range of glassware to suit all your spaces.',
  },
  {
    title: 'Terrarium Ingredients',
    href: '/',
    description: 'All essential minerals and materials for any terrarium.',
  },
  {
    title: 'Terrestrial plants',
    href: '/',
    description: 'Find the perfect plant to bring your terrarium to life.',
  },
  {
    title: 'Aquatic plants',
    href: '/',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Microfauna',
    href: '/',
    description: 'These critters will keep your terrarium clean and healthy.',
  },
  {
    title: 'Terrarium Tools',
    href: '/',
    description: 'All the tools needed to build and maintain your terrarium.',
  },
];

export function NavMenu() {
  return (
    <NavigationMenu className="place-self-start">
      <NavigationMenuList>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Homepage</NavigationMenuLink>
        </Link>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Discover our starter kits</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Hand Crafted by our team, these starter kits are the perfect way to get into
                      making your own terrarium.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Introduction">
                Find out all about the basics from our wonderful team.
              </ListItem>
              <ListItem href="/" title="Beginning">
                Helpful tips and tricks on how to get you started.
              </ListItem>
              <ListItem href="/" title="Maintenance">
                Discover best practices to keep your personal ecosystem healthy.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Equipment</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
