//you have to install React Router for using react router 
//you have to import browserRouter in index.js file
import React from 'react'
import ABout from './About';
import Contract from './Contract';
import Error from './Error';
import Menu from './Menu';
import { Route,Switch } from 'react-router';
const App=()=>{

    return (
        <>
        <Menu/>
        <Switch>
            <Route exact path='/' component={ABout}/>
            <Route exact path="/contract" component={Contract}/>
           

            <Route component={Error}/>
        </Switch>
        {/* <Contract/>
   <ABout/> */}
        </>
    )
}
export default App;