import React from 'react'
import ReactDOM from 'react-dom'
const flnam='robin'
const lname="islam"
console.log( `my name is ${flnam}` )//this is template literal
ReactDOM.render(<>
    <h1>my name is {flnam +" "+lname}</h1>
     <p>sum of 2 and 3 is {2+3}</p>
     <p>sum of 2 and 3 is 2+3</p>
     <p>random number</p>


</>,
    document.getElementById('root')
)