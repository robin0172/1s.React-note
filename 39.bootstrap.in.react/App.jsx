// you have to install bootsrap 5 in npm to use bootsrapt.
//you have to import bootstrap in your react component to user bootstrap.

import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App=()=>{
    return(
        <>
        <div className="container">
        <h1 className="text-center">my name is robin</h1>
        <br />
        <div className="text-center">
        <button  className="btn btn-success">
        Welcome to future
        </button>
        </div>
        </div>

        </>
    )
}
export default App;