import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { getTasks,deleteTask } from "../services/Todoservice";
import Popup from "./popup";


const Todolist=(props)=>{


    const [viewList,setViewlist]=useState([])
    const[passData,setPassdata]=useState("")
    const [Show,setShow]=useState(false)
    const[Callback,setCallback]=useState("")
    let result=useSelector((state)=>state.isAdd)
    const[TasksDone,setTaskDone]=useState("Done")
    const[Id,setId]=useState("")
    
    console.log(viewList.Status)

    const getResult=async()=>{
        let Result=await getTasks();
        console.log(Result)
        setViewlist(Result.data)
    }

    const handleDelete=async(id)=>{
        let result= await deleteTask(id)
        if(result.status==200){
            alert("Task Deleted")
            getResult()
        }else{
            // alert("Data Not Inserted")
            // getResult()
        }
        // console.log(result)
    }
    
   const showPopup=(data)=>{
    setPassdata(data)
    setShow(true)
   }

   const Taskupdate=(event,element)=>{
        // setId(element.id)
        console.log(event.target.checked)
        // if()
        // const{name,value}=event.target;
        // setViewlist({...viewList,[name]:value})
   }

   

   const Hidemypopup=(value)=>{
    // console.log(value)
    setShow(value)
   }
   const Callthefunction=()=>{
    console.log("call")
    getResult();
   }
   
    useEffect(()=>{
       getResult(); 
    },[result]);

    return(
        <div className="buttons">
            <h1 className="heading-text">Todo List</h1>
            <div className="tasks-buttons">
                <button className="buttons-style">All</button>
                <button className="centre-button">Done</button>
                <button className="buttons-style">Todo</button>

            </div>

            {
                viewList.map((element,index)=>{
                 return(
                        <div className="out-put-child">
                        <p className="output-actions" key={index}>
                        {element.Title}</p>
                        <div>

                        <input id="output-buttons" 
                        className="output-controls" 
                        type="checkbox" name="Status"
                        // value={viewList.Status}
                        onClick={(event)=>Taskupdate(event,element)} />

                        <button id="output-buttons" 
                        className="output-controls"
                        onClick={()=>showPopup(element)}>Edit</button>

                        <button id="output-buttons" 
                        onClick={()=>handleDelete(element.id)}
                        className="output-controls">Delete</button>

                        </div>
                        </div>
                            )
                        })
                    }
                    <div>
                        {
                        (Show)&& <Popup opValue={passData} setHidepopup={Hidemypopup}
                        Callback={Callthefunction}/>
                        }
                    </div>
                    
        </div>

    )
}
export default Todolist;