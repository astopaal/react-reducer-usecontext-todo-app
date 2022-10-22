import React, { createContext, useContext, useReducer } from "react";

export const TodoLayerContext = createContext();

export const TodoLayer = ({ initialState, reducer, children }) => (
  <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </TodoLayerContext.Provider>
);


//her component içince parametreli usecontext yazmak yerine bunu değişkenle export ediyoruz
export const useTodoLayerValue = () => useContext(TodoLayerContext);

// Path: src\components\todo.js