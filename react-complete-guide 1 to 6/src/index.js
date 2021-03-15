import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRadium from './AppRadium';
import AppStyled from './AppStyled';
import AppCssModule from './AppCssModule';
import AppErrorBoundary from "./AppErrorBoundary";
import AppUsingHooks from "./AppUsingHooks";
import reportWebVitals from './reportWebVitals';
import AppAssignment1 from "./AppAssignment1";
import AppAssignment2 from "./AppAssignment2";

ReactDOM.render(
  <React.StrictMode>
     {/* <App /> */}
     <AppErrorBoundary />
     {/* <AppCssModule /> */}
     {/* <AppStyled /> */}
    {/* <AppRadium />
    <AppUsingHooks /> 
    <AppAssignment1 />
    <AppAssignment2 />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
