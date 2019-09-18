const initState = {
  lists: [
    {id: '1', title: 'Daily List', items: ['2-mile run', 'buy groceries', 'clean house', 'donate books']},
    {id: '2', title: 'Groceries', items: ['apple juice', 'blueberries', 'butter', 'wheat bread', 'organic eggs' , 'almond milk']},
  ]
}

const listReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_LIST':
      console.log('new list', action.list);
      return state;
    default:
      return state;
  }
};

export default listReducer;