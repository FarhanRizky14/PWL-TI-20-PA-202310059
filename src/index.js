import React from 'react';
import ReactDOM from 'react-dom/client';
/** import HelloWorld from './components/HelloWorld'; **/
/** import Time from './components/Time'; **/
//  import Functions from './components/Functions';
//  import App from './App';
import Tugas1 from '../src/components/Tugas1';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tugas1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
