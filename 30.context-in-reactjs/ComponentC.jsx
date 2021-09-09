import React from 'react'
import { FirstName}  from './App';
const Comc=()=>{
    return (<>
    <FirstName.Consumer>{(fname)=>{
      return (
      <h1>My name is {fname}</h1>
      )
    }}</FirstName.Consumer>
    {/* consumer only understand funtion */}
    
</>
    )
}

export default Comc;