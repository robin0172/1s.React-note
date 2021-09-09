import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "./img/Website Design.png"

const Home=()=>{
    return(
        <>
     <section id="header" className="">
         <div className="container-fluid nav_bg">
                     
                     <div className="row">
                     <div className="mt-3 ">
                         <h1>Grow your business with <strong> Robin techinical</strong></h1>
                         <h2 className="my-3">
                             we are the team of telented developer making websites
                         </h2>
                         <NavLink to="" className="btn btn-outline-success">Get started</NavLink>
                               
                           </div>
                           
                               <div className="col-lg-4 order-1 order-2 hearder-img my-2 ">
                                   <img src={web} className="img-fluid animated" alt="pic" />
                               </div>
                     </div>
                    
                           
                 
            
         </div>
     </section>
             
        </>
    )
} 
export default  Home