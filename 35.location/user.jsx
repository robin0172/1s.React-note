
import React from 'react'
import { useLocation } from 'react-router-dom';
const User =()=>{
   
    const location =useLocation()
    console.log(location)
    return(
        <>
        <p>my current location is {location.pathname}</p>
        {location.pathname===`/user/robin/islam`?(
        <button>robin</button>):null
       }
       {/* if this condition is true button will be shown */}
    </>
    
    )
   
}
export default User;