import React from "react"
import ReactDOM from "react-dom"
import youtuber,{facprog,myName,myNames} from './App'

ReactDOM.render(
    <>
    <ol>
        <li>Thapa</li>
        <li>{youtuber}</li>

        <li>{facprog}</li>
        <li>{myName}</li>
        <li>{myNames}</li>

        {/* you have to use curlibreases to use import element in reactjs */}
    </ol>
    </>,
    document.getElementById('root')
)
