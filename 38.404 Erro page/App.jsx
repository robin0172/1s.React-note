//you have to install React Router for using react router 
//you have to import browserRouter in index.js file
import React from 'react'

import Search from './Search';
import Error from './Error';
import Menu from './Menu';

import { Route,Switch } from 'react-router';
const App=()=>{

    return (
        <>
        <Menu/>
        <Switch>
            
         
            <Route exact path="/search" component={Search}/>

            
          
           

            <Route component={Error}/>
        </Switch>
        {/* <Contract/>
   <ABout/> */}
        </>
    )
}
export default App