import { useState, useEffect } from 'react';

const NoteForm = ({
  note = { title: '', description: '' },
  handleSubmit,
  handleCancelClick,
}) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  useEffect(() => {
    const isValid = Boolean(title);
    setIsFormValid(isValid);
  }, [title]);

  const onFormSubmit = (event) => {
    // prevent post callback.
    event.preventDefault();

    if (!isFormValid) {
      // cannot submit invalid form
      return;
    }

    const note = { title, description };
    handleSubmit(note);
  };

  return (
    <form onSubmit={onFormSubmit}>
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
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
