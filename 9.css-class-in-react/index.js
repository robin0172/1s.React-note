

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// if you want to use css you have to import it
const name='vinod'
const img1='https://picsum.photos/200/300'
const img2='https://picsum.photos/250/300'
const img3='https://picsum.photos/260/300'


ReactDOM.render(
    <>
       <h1 className="heading">my name is {name}</h1>
     {/* class is a reserve keword.so you cannot use class. you have to use 
     className */}
     <div className="img_div">
     <img src={img1} alt="random img"/>
       <img src={img2} alt="random img"/>
       <img src={img3} alt="random img"/>
     
     </div>
     
    </>,
    document.getElementById('root')
)