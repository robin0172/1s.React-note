import React, { useState } from "react"

const App=()=>{
    const purple="#8e44ad"
        const [bg,nebg]=useState(purple)
        const [name,setName]=useState("clicked me")
    const bgchange=()=>{
        // console.log("clicked")//use for cheaking workable funtion
     let newbg="red"
     nebg(newbg)
     setName("YEs")

    }
    return(
        <>
            <div style={{backgroundColor:bg}}>
                <button onClick={bgchange}>{name}</button>{/** you have to use camal case in react event*/}
            </div>
        </>
    )
}
export default App;