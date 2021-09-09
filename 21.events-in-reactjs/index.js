import React from "react"
import ReactDOM from "react-dom"
import './index.css'//if you import index here,css file will be applied in every component
//but if you import css file in a particular component,it will be only applied on that component.

import App from './App'
ReactDOM.render(
    <>
<App/>
    </>,
    document.getElementById('root')
)