import React from 'react'
import logo from  "./img/logo.jpg"//any name you can give  without logo
const Header=()=>{
    return(
        <>
  <div className="header">
      <img src={logo} alt="" width='100' height='100'/>
  </div>
        </>
    )
}
export default Header;