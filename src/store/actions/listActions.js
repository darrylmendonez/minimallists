export const newList = (list) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('lists').add({
      ...list,
      title: '2019 Goals',
      items: ['buy a new car', 'get promoted', 'repaint walls', 'replace light fixtures']
    }).then(() => {
      dispatch({ type: 'NEW_LIST', list });
    }).catch((err) => {
      dispatch({ type: 'NEW_LIST_ERROR', err });
    })
  }
};