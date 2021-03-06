import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addName } from '../actions';
import NameList from './nameList';

function Name() {

    const [name, setName] = useState(null);

    const nameList = useSelector(state => state.names)

    const dispatch = useDispatch();

    const handleName = (event) => {
        setName(event.target.value);
    }

    return (
        <div className="App">
            <div><input type='text' onChange={handleName} />
                <button type="submit" onClick={() => {
                    dispatch(addName(name))
                }}> Add</button>
                <h3>Name List</h3>
                <NameList />
            </div>


        </div>
    );
}

export default Name;
