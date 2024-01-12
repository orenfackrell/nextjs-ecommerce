import { UserIcon } from 'lucide-react';
import { Hero } from './hero';
import { NavMenu } from './navbar';
import { NavSheet } from './navsheet';
import { UserIcons } from './user-icons';

export default function AboveFold() {
  return (
    <div className="h-screen flex-col bg-cover bg-center bg-[url('/hero.jpeg')] justify-start items-start inline-flex">
      <div className="flex self-stretch p-6 bg-black bg-opacity-60 justify-between items-center gap-6 inline-flex md:hidden">
        <NavSheet />
        <UserIcons />
      </div>
      <div className="flex-row self-stretch p-6 bg-black bg-opacity-60 justify-between items-center gap-6 inline-flex hidden md:flex">
        <NavMenu />
        <UserIcons />
      </div>

      <Hero />
    </div>
  );
}
