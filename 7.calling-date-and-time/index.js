import React from 'react'
import ReactDOM from "react-dom"
const name='robin'
const currentDate=new Date().toLocaleDateString()//it convert
//date into string
const currenttime=new Date().toLocaleTimeString()//it convert
//time into string
ReactDOM.render(
    <>
        <h1>hello,my name is {name}</h1>
        <p>your current date is={currentDate}</p>
        <p>your current time is={currenttime}</p>

    </>,
    document.getElementById('root')
)