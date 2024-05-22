"use client"
import Image from 'next/image';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import logo from '@/public/assets/logo.svg';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-wrap items-center justify-between w-full px-5 py-4 border-b-2 border-black'>
      <Image src={logo} width={150} />

      {/* Hamburger Menu */}
      <div className='md:hidden'>
        {isOpen ? (
          <IoClose className='text-3xl' onClick={toggleMenu} />
        ) : (
          <HiMenu className='text-3xl' onClick={toggleMenu} />
        )}
      </div>

      {/* Navbar Links */}
      <div className={`md:flex items-center gap-3 sm:w-fit w-full ${isOpen ? 'flex flex-col mt-3' : 'hidden'}`}>
        <Link hre className='px-3 py-1 text-lg border-black hover:border-b-2' href='/'>
          Home
        </Link>
        <Link className='px-3 py-1 text-lg border-black hover:border-b-2' href='/blog/1'>
          Popular
        </Link>
        <Link className='px-3 py-1 text-lg border-black hover:border-b-2' href='#'>
          Trending
        </Link>
        <button className='px-6 py-2 text-lg border border-black rounded-lg'>Login</button>
        <button className='px-6 py-2 text-lg text-white bg-black border border-black rounded-lg'>Sign Up</button>
      </div>
    </div>
  );
}
