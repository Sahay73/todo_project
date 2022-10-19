import React from "react";
import { useSelector } from "react-redux";

const Viewlist=()=>{

    let Getdata=useSelector((state)=>state.getdata)


    return(
        <div>
            <ul>
                <li>Learn React Js Basics</li>
                <p>{Getdata}</p>
                <input type="checkbox" name="Done" id="" />
                <button>Edit</button>
                <button>Delete</button>
            </ul>
        </div>
    )

}
export default Viewlist;