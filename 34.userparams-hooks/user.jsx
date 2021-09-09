import React from 'react'
import { useParams } from 'react-router';
const User =()=>{
    const {name,lname}=useParams()
    return(
        <>
        <h1>hi i am user{name} {lname} page</h1>
        {/* you have to put same name which you give in app.jsx page. */}
    </>
    )
   
}
export default User;