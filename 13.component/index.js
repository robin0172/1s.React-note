import React from "react"
import ReactDOM from "react-dom"
import Heading from "./Heading"//when you making component folder,you have
//to use capital world for fist letter of that folder for example " Headin"
import Para from "./Para"
import List from './list'
ReactDOM.render(
    <>
       <Heading/>
        <Para/>
        <List/>
    </>,
    document.getElementById('root')
)