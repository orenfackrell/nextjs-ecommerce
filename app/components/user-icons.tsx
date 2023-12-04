'use client';

import { Button } from './ui/button';
import { ModeToggle } from './ui/theme-toggle';
import { ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function UserIcons() {
  return (
    <div className="flex justify-between w-1/12">
      <Button variant="outline" className="rounded-full p-0">
        <Avatar>
          <AvatarImage alt="Oren Fackrell" src="./favicon.ico" />
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
      </Button>
      <ModeToggle />
      <Button variant="outline" size="icon" className="flex">
        <ShoppingCart />
      </Button>
    </div>
  );
}
