import React, { useState } from "react"



const App=()=>{

    const state=useState()//this is hooks. you can not change state without 
//using hooks

//you have to  call hooks in app funtion.
    console.log(state)
    let [count,setCount]=useState(0);//use state used for changing variable
    const IncNum =()=>{
        setCount(count+1)
      
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>click me</button>
            {/* when you are callin funtion in onclick in react
            you do not have to use parantasis () after funtion name */}

        </>
    )
}
export default App;
