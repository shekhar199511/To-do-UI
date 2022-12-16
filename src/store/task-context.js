import React, { useContext, useEffect, useState } from "react";
import {taskCollection} from '../Constant';

const TaskContext = React.createContext({
    tasks : [],
    transformTasks : (index, action) => {},
    saveTasks : (formAction) => {},
    formAction : '', 
    selectedIndex : -1,
    inputTaskRef : null,
    setInputControlRef : (ref) => {}
})

export const TaskContentProvider = props => {

    const [tasks, setTasks] = useState(taskCollection)
    const [formAction, setFormAction] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [inputTaskRef, setInputTaskRef] = useState(null)

    const manipulateTaskHandler = (action, index) => {
        setSelectedIndex(index)
        setFormAction(action)
        let selectedItem = tasks[index]
        if(action == 'delete') {
            
            setTasks(oldArray => 
                oldArray.filter(item => item!=selectedItem)
            )
        } else if(action == 'edit'){
            inputTaskRef.current.value = selectedItem
        }
    }

    const saveTaskHandler = (inputTaskRef) => {
        if(formAction != 'edit'){
            setFormAction('save')
            setTasks(oldArray => [...oldArray, inputTaskRef.current.value])
        } else {
            let prevTasksArray = [...tasks]
            prevTasksArray[selectedIndex] = inputTaskRef.current.value
            setTasks(prevTasksArray)
            setSelectedIndex(-1)
        }
    }

    const setInputControlRefHandler = (ref) => {
        setInputTaskRef(ref)
    }

    useEffect(()=>{
        if(inputTaskRef) inputTaskRef.current.value = ''
    }, [tasks])



    return(
        <TaskContext.Provider value = {{
            tasks : tasks,
            formAction : formAction,
            transformTasks : (action, index) => manipulateTaskHandler(action, index),
            saveTasks : (inputTaskRef) => saveTaskHandler(inputTaskRef),
            selectedIndex : -1,
            inputTaskRef : null,
            setInputControlRef : (ref) => setInputControlRefHandler(ref)
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext