import React from 'react'
import ReactDOM from "react-dom"
import Card from './Card'
ReactDOM.render(
    <>
    <Card
        name='DARK'//this are the props
        btn_name="Watch Now"//this is also a props
        link="https://www.britannica.com/science/particle-physics"
    />
  <Card
        name='science project'//this are the props
        btn_name="click here"//this is also a props
        link="https://www.britannica.com/quiz/browse"
    />

    </>,document.getElementById('root')
)