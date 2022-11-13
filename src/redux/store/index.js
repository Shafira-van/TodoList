import { combineReducers, createStore, applyMiddleware } from 'redux'
import todoReducer from "../reducer/todoReducer"
import thunk from 'redux-thunk'
const allReducer = combineReducers({
    todo: todoReducer
  })

const store = createStore(allReducer, applyMiddleware(thunk))

export default store