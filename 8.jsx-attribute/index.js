//jsx attribute

import React from 'react'
import ReactDOM from 'react-dom'
const name='vinod'
const img1='https://picsum.photos/200/300'
const img2='https://picsum.photos/250/300'
const img3='https://picsum.photos/260/300'
const links='http://www.google.com'

ReactDOM.render(
    <>
       <h1 contentEditable='true'>my name is {name}</h1>
       {/* <img src="https://picsum.photos/200/300" alt="random img"/> */}
       <img src={img1} alt="random img"/>
       <img src={img2} alt="random img"/>
       <img src={img3} alt="random img"/>
       <a href={links}>thapa</a>

       {/* NOTE:contentEditable is a jsx attribute.jsx attribute is always write in c
       camalcas */}
    </>,
    document.getElementById('root')
)