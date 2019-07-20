//Este se encarga de crear el store conla probiedad createStore 
//pasandole todoApp
import { createStore } from "redux";
import todoApp from "./reducers";
export const store = createStore(todoApp, window.STATE_FROM_SERVER);
