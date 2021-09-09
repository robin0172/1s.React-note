import React, { useState } from 'react'
import ToDoList from './Todo-list'
const App=()=>{
    const [inputlist,setinpulist]=useState("buy apple")
    const[items,setitems]=useState([])
const itemEvent=(event)=>{
    setinpulist(event.target.value)
}
const listofitem=()=>{
    setitems((olditems)=>{
        return[...olditems,inputlist]
    })
    setinpulist('')
}
    return(
        <>
        <div className="main_div">
            <div className='cente_div'>    
            <br />
            <h1>ToDO List</h1>
            <input type="text"  value={inputlist} onChange={itemEvent} placeholder="Add a Items" />
            <button onClick={listofitem}>+</button>
            <ol>
                {/* <li>{inputlist}</li> */}
               { items.map((itemval)=>{
                  return <ToDoList   text={itemval}/>
               })}
            </ol>
            </div>
        </div>
    </>
    )
  
}
export default App;

//NOte:start working from map method
