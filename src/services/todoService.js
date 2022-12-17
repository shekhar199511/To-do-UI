async function getTodoList(){
    let response = await fetch('https://to-do-db-94915-default-rtdb.firebaseio.com/tasks.json')
    let data = await response.json()
    return data
}

export default getTodoList