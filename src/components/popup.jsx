import React from "react";
import { useState } from "react";
import { editTasks } from "../services/Todoservice";


const Popup=(props)=>{
    const[Data,setData]=useState(props.opValue)
    const[Title,setTitle]=useState(props.opValue.Title);
    const[Id,setId]=useState("")
    const[Hide,setHide]=useState(false);
    // console.log(Data)

const handleChange=(event)=>{
    const {name,value}=event.target
    setTitle(value)
    setData({...Data,[name]:value})
}
const handleClick=async()=>{
   props.setHidepopup(Hide)
   let result=await editTasks(Data)
   console.log(result)
   if(result.status==200){
    props.Callback()
   }else{
    alert("No Update")
   }
}
    return(
        <div className="Background">
        <div className="popup-op">
            <h1 className="popup-text">Editing Box</h1>

            <input 
            className="popup-ip"
            type="text"
            name="Title"
            onChange={handleChange}
            value={Title}
            ></input>

             <button className="popup-button" onClick={handleClick} 
             id="login-btn">Save</button>
        </div>
        </div>
    )
}

export default Popup;