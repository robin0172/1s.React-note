//you have to install React Router for using react router 
//you have to import browserRouter in index.js file
import React from 'react'
import Menu from './Menu';
import User from './user';
import { Route,Switch } from 'react-router';
const App=()=>{

    return (
        <>
        <Menu/>
        <Switch>
         
            <Route exact  path="/user/:name/:lname" component={User}/>
            {/* {:name is parameter here} */}
           

            <Route component={Error}/>
        </Switch>
        {/* <Contract/>
   <ABout/> */}
        </>
    )
}
export default App