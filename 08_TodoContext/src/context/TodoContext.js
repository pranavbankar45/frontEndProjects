import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: () => {},       
  updateTodo: () => {},      
  deleteTodo: () => {},      
  toggleComplete: () => {},   
});

export const useTodo = () => {
  return useContext(TodoContext);
};

// Export Provider to wrap the app
export const TodoProvider = TodoContext.Provider;
