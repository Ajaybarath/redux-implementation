import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addToDo } from '../actions';

function ToDo() {

  const [todo, setTodo] = useState(null);

  const todoList = useSelector(state => state.todos)

  const dispatch = useDispatch();

  const handleTodo = (event) => {
    setTodo(event.target.value);
  }

  return (
    <div className="App">
      <div><input type='text' onChange={handleTodo} />
        <button type="submit" onClick={() => {
          dispatch(addToDo(todo))
        }}> Add</button>
        <h3>TODo List</h3>
        {todoList.map(element => {
          return <h4>{element}</h4>

        })}</div>

    </div>
  );
}

export default ToDo;
