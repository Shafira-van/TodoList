// import { Action } from "@remix-run/router";
import axios from "axios";
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";
export const SUCCESS_ADD_TODO = "SUCCESS_ADD_TODO";
export const SUCCESS_DELETE_TODO = "SUCCESS_DELETE_TODO";
export const SUCCESS_UPDATE_TODO = "SUCCESS_UPDATE_TODO";
export const SUCCESS_COMPLETED_TODO = "SUCCESS_COMPLETED_TODO";

function successGetTodo(data) {
  return {
    type: SUCCESS_GET_TODO,
    payload: data,
  };
}

export const getTodo = () => {
  return async (dispatch) => {
    const result = await axios.get(
      "https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/Todo"
    );
    dispatch(successGetTodo(result.data));
  };
};

function successAddTodo(data) {
  return {
    type: SUCCESS_ADD_TODO,
    payload: data,
  };
}

export const addTodo = (todo) => {
  return async (dispatch) => {
    const result = await axios.post(
      "https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/Todo",
      { todo }
    );
    dispatch(successAddTodo(result.data));
  };
};

function successDeleteTodo(data) {
  console.log(data)
  return {
    type: SUCCESS_DELETE_TODO,
    payload: data,
    
  };
}

export const deleteTodo = (id) => {
  return async (dispatch) => {
    // console.log(id)
    const result = await axios.delete(
      `https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/Todo/${id}`, id
    )  
    dispatch(successDeleteTodo(result.data));
  };
};

function successUpdateTodo(data) {
  return {
    type: SUCCESS_UPDATE_TODO,
    payload: data,
  };
}

export const updateTodo = (id,todo) => {
  return async (dispatch) => {
    const result = await axios.put(
      `https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/Todo/${id}`,{todo}
    )
      dispatch(successUpdateTodo(result.data));
  };
};

function successCompletedTodo(data) {
  return {
    type: SUCCESS_COMPLETED_TODO,
    payload: data,
    
  };
}

export const completedTodo = (id, complete) => {
  // console.log(complete)
  
  return async (dispatch) => {
    complete = true
    const result = await axios.put(
      `https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/Todo/${id}`,{complete}
    )
    console.log(result.data)
      dispatch(successCompletedTodo(result.data));
  };
};

