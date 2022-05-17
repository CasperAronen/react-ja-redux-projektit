import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const persons = [
  { name: "Clark Kent",
    number: "092 09 6615"
}
];

ReactDOM.render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>,
  document.getElementById("root")
)


