
import React from 'react'

import { useHistory, useLocation } from 'react-router-dom';
const User =()=>{
    const history=useHistory()
    
    const location =useLocation()
    console.log(history)
    console.log(location)
    return(
        <>
      
        
        <p>my current location is {location.pathname}</p>
        {location.pathname===`/user/robin/islam`?(
        <button onClick={()=>history.goBack()}>god back</button>):null
       }
       {/* you can use usehistory for go back action */}
    </>
    
    )
   
}
export default User;