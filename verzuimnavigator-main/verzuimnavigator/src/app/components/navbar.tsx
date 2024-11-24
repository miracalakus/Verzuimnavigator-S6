"use client";
//install Heroicons V2 for the hamburger menu icons
//npm install @heroicons/react

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-beige">
      {/* discuss max-w-full as alternative */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={100} height={40} />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="/" className="text-darkblue hover:bg-darkblue hover:text-white hover:rounded-full py-2 px-4">Home</a>
            <a href="/verzuim" className="text-darkblue hover:bg-darkblue hover:text-white hover:rounded-full py-2 px-4">Verzuim</a>
            <a href="/" className="text-darkblue hover:bg-darkblue hover:text-white hover:rounded-full py-2 px-4">Preventie</a>
            <div>
              <SearchBar />
            </div>
            <a href="/" className="text-darkblue hover:bg-darkblue hover:text-white hover:rounded-full py-2 px-4">Contact</a>
            <a href="/" className="text-darkblue hover:bg-darkblue hover:text-white hover:rounded-full py-2 px-4">Inloggen</a>
          </div>

          
          <div className='block md:hidden'>
              <SearchBar />
            </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-yellow items-center p-3 rounded-full text-black">   
              {isOpen ? (
                <XMarkIcon className="block w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} bg-beige absolute h-full w-full z-30 md:hidden`}>
      <div className="pt-2 pb-3 space-y-3 sm:px-3">
          <a href="/" className="block text-5xl text-black rounded-full">Home</a>
          <a href="/verzuim" className="block text-5xl text-black">Verzuim</a>
          <a href="/" className="block text-5xl text-black">Preventie</a>
          <a href="/" className="block text-5xl text-black">Contact</a>
          <a href="/" className="block text-5xl text-black">Inloggen</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
