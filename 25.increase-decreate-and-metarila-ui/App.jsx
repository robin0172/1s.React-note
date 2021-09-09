import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';//this is metarial ui
import DeleteIcon from '@material-ui/icons/Delete';
const App=()=>{
    const [num,setnum]=useState(0)
    const incrementNum=()=>{
       setnum(num+1)
    }

    const decriment=()=>{
        if(num>0){
            setnum(num-1)
        }else{
            alert("sorry element reached")
        }
       
    }
    return(
        <>
 <div className="main_div">
     <div className="center_div">
         <h1>{num}</h1>
         <div className="btn_div">
             <button onClick={incrementNum}>
                 <AddIcon/>
             </button>
             <button onClick={decriment}>
                 <DeleteIcon/>
             </button>
         </div>
     </div>
 </div>
        </>
    )
}
export default App