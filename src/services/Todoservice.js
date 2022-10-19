import axios from "axios";

export const addTasks=(add_Tasks)=>{
    console.log(add_Tasks)
    return axios.post("http://localhost:5002/tasks",add_Tasks)
}

export const getTasks=()=>{
    return axios.get("http://localhost:5002/tasks")
}

export const deleteTask=(task_id)=>{
    console.log(task_id)
    return axios.delete(`http://localhost:5002/tasks/${task_id}`)
}

export const editTasks=(Title)=>{
    console.log(Title.id)
    return axios.put(`http://localhost:5002/tasks/${Title.id}`,Title)
}