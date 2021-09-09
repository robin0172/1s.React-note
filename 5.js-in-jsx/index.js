//usin js into jsx

import React from 'react'
import ReactDOM from 'react-dom'
const flnam='robin islam'
ReactDOM.render(<>
    <h1>my name is {flnam}</h1>
     <p>sum of 2 and 3 is {2+3}</p>
     <p>sum of 2 and 3 is 2+3</p>
     <p>random number</p>


</>,
    document.getElementById('root')
)
//NOTE:if you want to use js in jsx. you have
//to use curlibress={}
//you can only use expression
//you cannot use statement
//expressing gives you directly value
//but statement does not give you absulute value
//if condition is a statement
