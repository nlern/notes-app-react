import { useContext, useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import List from '../../components/List/List';

import { GlobalContext } from '../../context/GlobalState';

export default function Dashboard() {
  const { notes, addNewNote } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const isValid = Boolean(title);
    console.log(isValid);
    setIsFormValid(isValid);
  }, [title]);

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      clearForm();
    }, 300);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (event) => {
    // prevent post callback.
    event.preventDefault();

    // if invalid return
    if (!isFormValid) {
      return;
    }

    addNewNote({ title, description });

    // close modal
    closeModal();
  };

  return (
    <>
      <section>
        <h1 className='text-xl py-4 my-2 relative'>
          <span>My Notes</span>
          <button
            className='absolute right-0 px-4 py-1 text-base text-white bg-green-600 font-semibold rounded border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2'
            title='Add New Note'
            onClick={openModal}
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
          onClose={closeModal}
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
                <form onSubmit={handleSubmit}>
                  <div className='mt-2'>
                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='title'
                      >
                        Title
                      </label>
                      <input
                        className={`shadow appearance-none ${
                          isFormValid ? 'border' : 'border-2 border-red-500'
                        } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        id='title'
                        type='text'
                        placeholder='Note title'
                        required
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                      />
                      {isFormValid ? null : (
                        <span className='text-sm text-red-500 italic'>
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='description'
                      >
                        Description
                      </label>
                      <textarea
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='description'
                        type='text'
                        rows='5'
                        placeholder='Note description'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className='mt-4 flex justify-end'>
                    <button
                      type='submit'
                      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    >
                      OK
                    </button>
                    <button
                      type='button'
                      className='inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md focus:outline-none'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
