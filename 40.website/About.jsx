import React from 'react'
import Common from './Common'
import img2 from "./img/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg"
const About=()=>{
    return(
        <>
    <Common 
        img={img2}
        text='welcome to About Page'
        visit='/contract'
        btn="About us"
    />
             
        </>
    )
} 
export default  About