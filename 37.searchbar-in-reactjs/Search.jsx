import React from "react"
import { useState } from "react"
import "./index.css"
import SResult from "./searchresult"
const Search =()=>{
    const [img,setimg]=useState('')
    const inputEvent=(event)=>{
   const data=event.target.value
   setimg(data)
   console.log(data)
    }
    return (
        <>
        <div className="searchbar">
        <input type="text" placeholder="sarch Anything" onChange={inputEvent} value={img}/>
        </div>
       {img===""?null:<SResult name={img} />} 
        </>
    )
}
export default Search