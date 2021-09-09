import React, { useState } from 'react'

const App=()=>{
    let time=new Date().toLocaleTimeString()
    const [cirtime,setCtime]=useState()
    const updateTime=()=>{
    let time=new Date().toLocaleTimeString()
        setCtime(time)
    }
    setInterval(() => {//it  call the code after intervel time again and again
        updateTime()
    }, 1000);
    return(
        <>
            <h1>{cirtime}</h1>
            
        </>
    )
}
export default App;