import React from 'react';
import ReactDOM from 'react-dom';
import{ Provider } from "react-redux";
import App from './App';
import {Counter} from "./components/counter/Counter";
import { TodoForm } from "./components/todo/TodoForm";
import Game  from "./components/tic-tac-toe/Game";
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
      <TodoForm />
    </Provider>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
