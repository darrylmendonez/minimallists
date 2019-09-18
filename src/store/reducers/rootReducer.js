import authReducer from './authReducer'
import listReducer from './listReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  list: listReducer
});

export default rootReducer

// the key name will be the data property on the state object