import React, { createContext, useReducer, useEffect } from 'react';
import { listReducer } from '../reducers/listReducer';

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(listReducer, [], () => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);
  return (
    <ListContext.Provider value={{tasks, dispatch}}>
      { props.children }
    </ListContext.Provider>
  )
}

export default ListContextProvider