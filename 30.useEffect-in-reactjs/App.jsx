
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const App=()=>{
    const [num,setmum]=useState(0)
    const [nums,setmums]=useState(0)

    useEffect(()=>{
    alert('i am clicked')
},[num])//use state work when render method work. but if you put empty arry it will only work at first load,
//when you put num only the num funtion will call
    return <>
        <button onClick={()=>{
            setmum(num+1)
        }}>click me {num}</button>
 <br />
<button onClick={()=>{
            setmums(nums+1)
        }}>click me {nums}</button>
    </>
}
export default App;


