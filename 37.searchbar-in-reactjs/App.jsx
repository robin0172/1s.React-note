//you have to install React Router for using react router 
//you have to import browserRouter in index.js file
import React from 'react'

import SResult from './searchresult';
import Error from './Error';
import Menu from './Menu';
import User from './user';
import { Route,Switch } from 'react-router';
const App=()=>{

    return (
        <>
        <Menu/>
        <Switch>
            
            <Route exact path="/contract" component={Contract}/>
            <Route exact path="/search" component={SResult}/>

            <Route  path="/user/:name/:lname" component={User}/>
            {/* {:name is parameter here} */}
           

            <Route component={Error}/>
        </Switch>
        {/* <Contract/>
   <ABout/> */}
        </>
    )
}
export default App