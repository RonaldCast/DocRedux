// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";
// import { store } from "./store/store";

// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter
// } from "./store/actionCreators/actionTodo";
// import { VisibilityFilters } from "./store/constant/visibilityFilters";
// class App extends Component {
//   render() {
    // console.log(store.getState());
    // const unsubribe = store.subscribe(() => console.log(store.getState()));
    
    // store.dispatch(addTodo("Learn about actions"));
    // store.dispatch(addTodo("Learn about React"));
    // store.dispatch(toggleTodo(0));
    // store.dispatch(toggleTodo(1));
    // store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
    
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './store/reducers'
import App from './components/App'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)