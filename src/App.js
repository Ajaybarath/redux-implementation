import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addName, addToDo } from './actions';
import ToDo from './component/todo';
import Name from './component/name';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>

      <div className="row">
        <ToDo />
        <Name />
      </div>



    </div>
  );
}

export default App;
