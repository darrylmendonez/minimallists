import uuid from 'uuid/v1';

export const listReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [...state, {
        title: action.task.title,
        id: uuid()
      }]
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}

export default listReducer;