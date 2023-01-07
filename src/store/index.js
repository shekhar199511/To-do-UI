const { createStore } = require("redux");

const initialState = {
    tasks : [
        "Study React", "Go to gym", "Have loads of Protein"
    ],
    formAction : 'save'
}

const listReducer = (state = initialState, action) => {
    if(action.type=='add'){
        return {
            ...state,
            tasks : [...state.tasks, action.value]
        }
    }
    if(action.type=='delete'){
        let taskCopy = [...state.tasks]
        taskCopy.splice(action.index, 1)
        return {
            ...state,
            tasks : taskCopy
        }
    }
    if(action.type=='edit'){
        return {
            ...state,
            tasks : action.value,
            formAction : 'save'
        }
    }
    return initialState
}

const store = createStore(listReducer);

export default store;