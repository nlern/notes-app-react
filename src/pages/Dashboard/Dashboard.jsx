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
        <h1 className='text-xl my-2'>My Notes</h1>
        <List items={notes} />
      </section>
    </section>
  );
}
