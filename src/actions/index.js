export const addName = (name) => {
    return{
        type: 'ADD_NAME',
        payload: name,
    }
}

export const deleteName = (name) => {
    return{
        type: 'DELETE_NAME',
        payload: name,
    }
}

export const addToDo = (todo) => {
    return{
        type: 'ADD_TODO',
        payload: todo,
    }
}

export const deleteTodo = (todo) => {
    return{
        type: 'DELETE_TODO',
        payload: todo,
    }
}