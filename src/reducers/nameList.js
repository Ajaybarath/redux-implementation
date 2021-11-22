const nameReducer = (state = ['',], action) => {
    switch (action.type) {
        case 'ADD_NAME':
            state = state.slice();
            state.push(action.payload);
            return state;

        case 'DELETE_NAME':
            let index = state.indexOf(action.payload);
             state.splice(index, 1);
             return state;

        default:
            return state;
    }
}

export default nameReducer;