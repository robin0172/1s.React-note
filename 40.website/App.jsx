
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import About from './About';
import Service from './service';
import Contract from './Contract';
import Navbar from './Navbar';
import { Redirect, Route, Switch } from 'react-router-dom'
const App=()=>{
    return(
        <>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/contract" component={Contract} />
            <Redirect to="/"/>
        </Switch>

        </>
    )
}
export default App;