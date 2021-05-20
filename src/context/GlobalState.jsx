import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  notes: [],
};

const generateUUID = () => {
  let d = new Date().getTime(),
    d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });
};

// create context
export const GlobalContext = createContext(initialState);

// create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function addNewNote({ title, description }) {
    const id = generateUUID();
    const today = new Date().toISOString();
    const newNote = {
      id,
      title,
      description,
      createdDate: today,
      lastModifiedDate: today,
    };

    dispatch({
      type: 'ADD_NOTE',
      payload: newNote,
    });
  }

  function deleteNote(id) {
    dispatch({
      type: 'DELETE_NOTE',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ notes: state.notes, addNewNote, deleteNote }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
