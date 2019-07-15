import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

const ListHeader = () => {
  const { tasks } = useContext(ListContext);
  return (
    <li className="collection-header">
      <h4>My List</h4>
      <p>Task Count: { tasks.length }</p>
    </li>
  )
}

export default ListHeader