export const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "REMOVE_TODO":
        return {
            ...state,
            todos: [...state.todos].filter(todo => todo.id !== action.payload)
        }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
