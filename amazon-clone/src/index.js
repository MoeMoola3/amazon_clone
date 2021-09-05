import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
          <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//React.StrictMode is for additional checks and warnings

//The app is wrapped in the StateProvider so that every component of the app can get access
//to the data layer

// initial state - How the data looks in the beginning
// reducer - how we manipulate things
