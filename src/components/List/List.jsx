import { useState, useContext, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { GlobalContext } from '../../context/GlobalState';

import ListItem from '../ListItem/ListItem';

export default function List({ items }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [note, setNote] = useState(null);

  const { deleteNote } = useContext(GlobalContext);

  const handleDeleteClick = (note) => {
    setNote(note);
    setIsConfirmOpen(true);
  };

  const handleDeleteNote = () => {
    const { id } = note;
    deleteNote(id);
    closeConfirmDialog();
  };

  const closeConfirmDialog = () => {
    setIsConfirmOpen(false);
    setNote(null);
  };

  return Array.isArray(items) && items.length > 0 ? (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {
              <ListItem
                item={item}
                onDeleteClick={() => handleDeleteClick(item)}
                onEditClick={() => handleEditClick(item)}
              />
            }
          </li>
        ))}
      </ul>
      <Transition appear show={isConfirmOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeConfirmDialog}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h1'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Confirmation
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Are you sure you want to delete note{' '}
                    <strong>{note?.title}</strong>?
                  </p>
                </div>

                <div className='mt-4 flex justify-end'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={handleDeleteNote}
                  >
                    Yes
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none'
                    onClick={closeConfirmDialog}
                  >
                    No
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  ) : (
    <div>List empty</div>
  );
}
