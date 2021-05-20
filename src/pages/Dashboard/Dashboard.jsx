import { useContext, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { GlobalContext } from '../../context/GlobalState';

import List from '../../components/List/List';
import NoteForm from '../../components/NoteForm/NoteForm';

export default function Dashboard() {
  const { notes, addNewNote } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleAddNote = ({ title, description }) => {
    addNewNote({ title, description });

    // close dialog
    closeDialog();
  };

  return (
    <>
      <section>
        <h1 className='text-xl py-4 my-2 relative'>
          <span>My Notes</span>
          <button
            className='absolute right-0 px-4 py-1 text-base text-white bg-green-600 font-semibold rounded border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2'
            title='Add New Note'
            onClick={openDialog}
          >
            + New
          </button>
        </h1>
        <List items={notes} />
      </section>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeDialog}
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
                  Add New Note
                </Dialog.Title>
                <NoteForm
                  handleSubmit={handleAddNote}
                  handleCancelClick={closeDialog}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
