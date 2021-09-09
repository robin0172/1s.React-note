import React from 'react'
import { Link } from 'react-router-dom';


const Menu=()=>{
    return(
        <>
            <Link exact activeClassName="about" to="/">About</Link><br />
            <Link exact activeClassName="" to="/contract">contract</Link><br />
            <Link exact activeClassName="" to="/user/robin/islam">User</Link>
            {/* robin and islam will show in output */}



        </>
    )
}
export default Menu;