import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import WordGame from './components/wordGames';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <WordGame />
  </React.StrictMode>,
  document.getElementById('root')
);
