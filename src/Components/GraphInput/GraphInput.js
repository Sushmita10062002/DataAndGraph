import React, { useState } from 'react'
import "./GraphInput.css"
const GraphInput=(props)=>{
   const [title,setTitle] = useState("")
   const [data,setData] = useState("")
   const clickHandler=()=>{
     props.submitHandler(title,data)
     setTitle("")
     setData("")
   }
   return(
    <div className="InputTask">
      <h2>Add Your Data</h2>
       <hr/>
       <div>
         <h3>Title</h3>
         <input type="text" 
         onChange={(e)=>setTitle(e.target.value)}  
         value={title} 
         placeholder="Enter Your Title"/>
     </div>
      <div> 
        <h3>Data</h3>
        <input type="number"  
        onChange={(e)=>setData(e.target.value)}  
        value={data}
        placeholder="Enter the data"/>
      </div>
      <button
       className="Add" onClick={clickHandler}>
         Add Your Task
      </button>
    </div>
   )
}
export default GraphInput;