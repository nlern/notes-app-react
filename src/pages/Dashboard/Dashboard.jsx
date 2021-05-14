import React from 'react';
import List from '../../components/List/List';

export default function Dashboard() {
  const notes = [
    {
      id: 1,
      title: 'My First Note',
      shortDescription: 'This is my first note.',
      createdDate: new Date(),
      lastModifiedDate: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'My Second Note',
      shortDescription: 'This is my second note.',
      createdDate: new Date(),
      lastModifiedDate: new Date().toISOString(),
    },
  ];
  return (
    <section>
      <section>
        <h1 className='text-xl py-4 my-2 relative'>
          <span>My Notes</span>
          <button
            className='absolute right-0 px-4 py-1 text-base text-white bg-green-600 font-semibold rounded border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2'
            title='Add New Note'
          >
            + New
          </button>
        </h1>
        <List items={notes} />
      </section>
    </section>
  );
}
