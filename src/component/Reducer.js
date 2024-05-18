import { CREATE_TASK, DELETE_TASK, GETBY_ID, READ_TASK, UPDATE_TASK } from "./Type";



const initialState = {
  todos: [],
  todo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      case READ_TASK:
        return {
              ...state,
              todos: action.payload,
          
        };
      case GETBY_ID:
        return {
              ...state,
              todo: action.payload,
          
        };
        case UPDATE_TASK:
          return {
            ...state,
            todos: state.todos.map((todo)=> todo.id ===action.payload.id ? action.payload :todo),
          };
    case DELETE_TASK:
      return {
        ...state,
        todos: [...state.todos.filter((todo)=> todo.id !==action.payload)],
      };
   
    

    default:
      return state;
  }
};

export default todoReducer;