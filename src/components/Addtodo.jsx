import React, { useEffect,useState } from "react";
import { addTasks,getTasks } from "../services/Todoservice"; 
import { useDispatch } from "react-redux";
import { Addtask } from "../store/action";

const Addtodo=()=>{


    
    const[passData,setPassdata]=useState([{Title:"HTML",Status:"Done"}]);
    const[getData,setGetdata]=useState({Title:"",Status:"Pending"});
    const dispatch=useDispatch({});



    const Datatyping=(event)=>{
        const {name,value}=event.target
        setGetdata({...getData,[name]:value})
        console.log(name,value)

    }

    const Onclickadd=async()=>{
        // console.log(getData)
        let result= await addTasks(getData)
        dispatch({type:Addtask()})
        // console.log(result)
        if (result.status==201){
            // alert("Task has updated")
            getResult()
        }
        else{
            // alert("Task has not updated")
        }

    }
    const getResult=async()=>{
        let result= await getTasks();
        setPassdata(result.data)
    }

    useEffect(() => {
        getResult();
      },[]);

    return(
        <div className="todo-input">
            <h1 className="heading-text">TodoInput</h1>
            <div className="add-click">

                <input className="add-1" 
                type="text" 
                placeholder="New Todo" 
                name="Title"
                onChange={Datatyping}/>

                <button className="click-1" 
                onClick={Onclickadd}>Add New Task</button>
            </div>
            {
            
            }
        </div>
    )
}
export default Addtodo;