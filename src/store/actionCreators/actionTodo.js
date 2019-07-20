
//Son aqueelos los cuales pasan los datos correspondientes al actionType 

import * as type from "../constant/actionType";

export function addTodo(text) {
  return { type: type.ADD_TODO, text };
}
export function toggleTodo(index) {
  return { type: type.TOGGLE_TODO, index };
}
export function setVisibilityFilter(filter) {
  return { type: type.SET_VISIBILITY_FILTER, filter }; 
}
