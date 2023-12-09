import { configureStore } from '@reduxjs/toolkit'


const initialState = {
    tasks : [
        "Study React",
        "Get a job",
        "Payoff your loans"
    ],
    input : "",
    formAction : "Save",
    index : -1
}

const reducer = (state = initialState, action) => {
    if(action.type=="edit"){
        return {
            ...state,
            input : state.tasks[action.value],
            formAction : action.type,
            index : action.value
        }
    } else if(action.type=="inputChange"){
        return {
            ...state,
            input : action.value
        }
    } else if(action.type=="add"){
        if(state.formAction=='edit'){
            const newTasks = [...state.tasks]
            newTasks[state.index] = state.input
            return {
                ...state,
                tasks : newTasks,
                formAction : "Save",
                input : ""
            }
        } else{
            const newTasks = [...state.tasks]
            newTasks.push(state.input)
            return {
                ...state,
                tasks : newTasks,
                input : ""
            }
        }
    } else if(action.type=="delete"){
        const tasks = [...state.tasks]
        tasks.splice(action.value, 1)
        return {
            ...state,
            tasks : tasks
        }
    }
    return state
}


let store = configureStore({ reducer })

export default store;