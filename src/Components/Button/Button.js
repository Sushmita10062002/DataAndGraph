import React from 'react'
import {Link} from "react-router-dom"
const Button=(props)=>{
   return(
     <button
        style={{backgroundColor:"rgb(64, 118, 169)"}}>
        <Link style={{color:"white",textDecoration:"none",padding:"4px"}} 
        to={props.linkedTo}>
          {props.value}
        </Link>
     </button>
   )
}
export default Button;