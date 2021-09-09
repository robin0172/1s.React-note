import React from "react"
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import ListCom from "./listcom"
const App=()=>{
    const [item,setItem]=useState()
    const [newitem,setnewitem]=useState([])
    


     const inputEvent=(event)=>{
          setItem(event.target.value)
    }


    const listofItems=(event)=>{
        setnewitem((prevalue)=>{
          return[...prevalue,item]
        })
      setItem("")
    }
    return(
        <>
 <div className="main_div">
     <div className="center_div">
         <br />
         <h1>ToDO List</h1>
         <br />
         <input type="text" value={item} placeholder="add icon" onChange={inputEvent}/>
         <Button className="newBtn"  onClick={listofItems}>
             <AddIcon/>
         </Button>
         <br />
         <ol>
             
        {
            newitem.map((val,index)=>{
                return <ListCom  key={index}  text={val}/>
            })
        }
         </ol>
         <br />
     </div>
 </div>

        </>
    )
}
export default App;