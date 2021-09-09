import React from 'react'
import { NavLink } from 'react-router-dom'
const Error=()=>{
    return (
        <>
    <h1>404 Error</h1>
    <p>sorry this page doesn"t exist</p>
    <NavLink to="/search">Go back</NavLink>
        </>
    )
}
export default Error;