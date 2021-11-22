import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addName } from '../actions';

function NameList() {

    const [name, setName] = useState(null);

    const nameList = useSelector(state => state.names)

    const dispatch = useDispatch();

    const handleName = (event) => {
        setName(event.target.value);
    }

    return (
        <>
            {nameList.map(element => {
                return <h4>{element}</h4>

            })}
        </>
    );
}

export default NameList;
