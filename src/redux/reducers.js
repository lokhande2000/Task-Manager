import { ADD_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Set up Redux" },
    { id: 3, name: "Build Task Manager App" }
  ]
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};
