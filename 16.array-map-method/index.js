// the map() method creates a new array with the results of 
// calling a exsisting array

// the map() Method calls the provided function once for 
// each element in an array,in order

// syntax
//array.map(funtion(currentValue,index,arr),thisValue)


import React from 'react'
import ReactDOM from "react-dom"
import Sdata from "./Sdata"
import Card from './Card'
ReactDOM.render(
    <>
   {
Sdata.map((val,index)=>{
    console.log(index)
    return(
     <Card
         key={val.id}//you must have to put key value.for updating this card in future
         link={val.link}
         name={val.name}
         btn_name={val.btn_name}

     />
    )
})
   }

    </>,document.getElementById('root')
)