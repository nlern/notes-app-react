import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  notes: [
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
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ notes: state.notes }}>
      {children}
    </GlobalContext.Provider>
  );
};
