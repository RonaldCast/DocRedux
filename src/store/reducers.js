//En este se establecen las funciones que van arealizar la modificación al estado.

//para combinar los reducer
import { combineReducers } from "redux";
import { VisibilityFilters } from "./constant/visibilityFilters";
import * as type from "./constant/actionType";

// reducer
//Se definene las accion que se va arealizar sobre el state
//en este caso sobre la propiedad del state todos que es de tipo Array ([])
function todos(state = [], action) {
  switch (action.type) {
    case type.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case type.TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

// Otra propiedad del state por default esta en SHOW all y es de tipo String 
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case VisibilityFilters.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

//Transforma o crear es estado con sus respectivas propiedades
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
