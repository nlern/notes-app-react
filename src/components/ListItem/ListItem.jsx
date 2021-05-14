import React from 'react';

export default function ListItem({
  item: { title, lastModifiedDate, shortDescription },
}) {
  const lstModDate = new Date(lastModifiedDate);
  const formmatedLstModDate = `${lstModDate.getDate()}-${(
    lstModDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${lstModDate.getFullYear()}`;
  return (
    <div className='transition delay-150 ease-in-out transform group border p-4 mb-2 hover:shadow relative'>
      <div className='relative'>
        <h1 className='text-gray-800 font-medium'>{title}</h1>
        <span className='absolute right-0 top-0 text-sm text-gray-400'>
          {formmatedLstModDate}
        </span>
      </div>
      <div className='transition delay-150 ease-in-out absolute right-0 bottom-0 opacity-0 group-hover:opacity-100'>
        <ul className='flex flex-row space-x-2 m-2 text-sm'>
          <li>
            <button className='text-blue-600'>Edit</button>
          </li>
          <li>
            <button className='text-red-600'>Delete</button>
          </li>
        </ul>
      </div>
      <div className='text-sm text-gray-500'>{shortDescription}</div>
    </div>
  );
}
