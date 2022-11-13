// import { addCollection } from "@iconify/react";
import { SUCCESS_ADD_TODO, SUCCESS_GET_TODO, SUCCESS_DELETE_TODO, SUCCESS_UPDATE_TODO, SUCCESS_COMPLETED_TODO} from "../action/todoAction";

const initialState = {
  updTodo: [],
  todos: [],
  err: null
};

const todoReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SUCCESS_GET_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case SUCCESS_ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case SUCCESS_DELETE_TODO:
      // console.log(action.payload.id)
      return {
        ...state,
        todos:  state.todos.filter((data) => data.id != action.payload.id )
      }
    case SUCCESS_UPDATE_TODO:
      return {    
        ...state,
      }
    case SUCCESS_COMPLETED_TODO:    
      return {    
        todos: [...state.todos, action.payload]
      }
      
    default:
      
      return state;
    
  }
};

export default todoReducer;
