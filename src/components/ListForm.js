import React, { useContext, useState } from 'react';
import { ListContext } from '../contexts/ListContext';

const NewTaskForm = () => {
  const { dispatch } = useContext(ListContext);
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TASK', task: {
      title
    }});
    setTitle('');
  }
  return (
    <li className="collection-item">
      <form onSubmit={handleSubmit} className="input-field">
        <input type="text" placeholder="New task" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input className="btn black" type="submit" value="Add Task" />
      </form>
    </li>
  )
}

export default NewTaskForm;