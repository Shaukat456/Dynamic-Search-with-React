import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navvbar from './Navbar';
import Search from "./Search";

const App = () => {
    return (
        <>

            <Navvbar/>
            <Search/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/service' component={Service} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/search' component={Search} />
                <Redirect to='/'/>
                <Home />
            </Switch>
        </>
    )
}

export default App;