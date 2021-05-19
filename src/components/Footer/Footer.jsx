import React from 'react';

export default function Footer() {
  return (
    <footer className='p-4 border bg-gray-300'>
      © {new Date().getFullYear()} Shantanu Dutta, All rights reserved.
    </footer>
  );
}
