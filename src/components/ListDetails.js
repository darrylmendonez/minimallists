import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';

const ListDetails = ({ task }) => {
  const { dispatch } = useContext(ListContext);
  return (
    <li className="collection-item" onClick={() => dispatch({ type: 'REMOVE_TASK', id: task.id})}>
      { task.title }<i className="{'fa right' + this.state.taskStatus}" aria-hidden="true"></i>
    </li>
  );
}

export default ListDetails;