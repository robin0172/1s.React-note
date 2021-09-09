import React from 'react'
import { Link } from 'react-router-dom';


const Menu=()=>{
    return(
        <>
            <Link exact activeClassName="about" to="/">About</Link><br />
            <Link exact activeClassName="" to="/contract">contract</Link>


        </>
    )
}
export default Menu;