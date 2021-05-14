import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List({ items }) {
  return Array.isArray(items) && items.length > 0 ? (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{<ListItem item={item} />}</li>
      ))}
    </ul>
  ) : (
    <div>List empty</div>
  );
}
