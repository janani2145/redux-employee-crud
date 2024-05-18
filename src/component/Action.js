import axios from 'axios';
import { CREATE_TASK, DELETE_TASK, GETBY_ID, READ_TASK, UPDATE_TASK } from './Type';


export const createTask = (todo) => {
  return async (dispatch) => {
    const response = await axios.post('https://65ae12861dfbae409a73dcb5.mockapi.io/employee', todo);
    dispatch({ type: CREATE_TASK, payload: response.data });
  };
};
export const updateTask = (id,todo) => {
  return async (dispatch) => {
    const response = await axios.put(`https://65ae12861dfbae409a73dcb5.mockapi.io/employee/${id}`, todo);
    dispatch({ type: UPDATE_TASK, payload: response.data });
  };
};
export const readTask = () => {
  return async (dispatch) => {
    const response = await axios.get('https://65ae12861dfbae409a73dcb5.mockapi.io/employee');
    dispatch({ type: READ_TASK, payload: response.data });
  };
};
export const getById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`https://65ae12861dfbae409a73dcb5.mockapi.io/employee/${id}`);
    dispatch({ type: GETBY_ID, payload: response.data });
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
      await axios.delete(`https://65ae12861dfbae409a73dcb5.mockapi.io/employee/${id}`);
      dispatch({ type: DELETE_TASK, payload: id }); 
    
  };
};




// export const fetchTodos = () => {
//   return async (dispatch) => {
//     const response = await axios.get('https://your-mock-api-url/todos');
//     dispatch({ type: FETCH_TODOS, payload: response.data });
//   };
// };

// export const fetchTodo = (id) => {
//   return async (dispatch) => {
//     const response = await axios.get(https://your-mock-api-url/todos/${id});
//     dispatch({ type: FETCH_TODO, payload: response.data });
//   };
// };