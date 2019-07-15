import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import ListDetails from './ListDetails';

const Tasks = () => {
  const { tasks } = useContext(ListContext);
  return tasks.length ? (
    <li className="collection-item">
      { tasks.map(task => {
        return ( <ListDetails task={task} key={task.id} />)
      })}
    </li>
  ) : (
    <li className="collection-item">
      You have completed all your tasks.
    </li>
  );
}

export default Tasks;