'use client';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <div className="flex sm:hidden">
        <MobileMenu />
      </div>
      <h1 className="text-md sm:text-xl">The Parfum Society</h1>
      <div className="items-center justify-between hidden sm:flex">
        <DesktopMenu />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <Search strokeWidth="1.5" className="cursor-pointer w-5 h-5" />
        <ShoppingCart
          strokeWidth="1.5"
          className="cursor-pointer w-5 h-5"
          onClick={() => router.push('/cart')}
        />
        <User strokeWidth="1.5" className="cursor-pointer w-5 h-5" />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
