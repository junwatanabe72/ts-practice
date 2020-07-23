import { ActionTypes } from "../actionTypes";
import { TodoActionTypes, ToDos } from "./types";

const inisialState: ToDos =[];

export const todoReducer = (state=inisialState, action: TodoActionTypes) => {
  const latestId = state.length;

  switch (action.type){
    case ActionTypes.addTodo:
        state.push({
          id: latestId +1,
          text: action.payload.text,
        });
      return state;
    
    case ActionTypes.deleteTodo:
        return state.filter(data => data.id !== action.payload.id);
    
    default:
      const _: never = action;
      return state;
  }
};