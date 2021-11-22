import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addToDo } from '../actions';

function ToDoList() {

    const todoList = useSelector(state => state.todos)

    return (
        <>
            {todoList.map(element => {
                return <h4>{element}</h4>

            })}
        </>
    );
}

export default ToDoList;
