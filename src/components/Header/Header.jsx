import React from 'react';

export default function Header() {
  return (
    <header className='flex flex-wrap flex-row justify-around items-center md:space-x-4 bg-white fixed w-full h-16 p-4 shadow-lg'>
      <span className='text-xl'>Notes</span>
    </header>
  );
}
