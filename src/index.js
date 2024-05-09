import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './resources/css/index.css';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
function render() {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch} />
    </React.StrictMode>
  );
}

render();

store.subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
