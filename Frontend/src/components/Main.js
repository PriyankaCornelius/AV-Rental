import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import NavBar from './NavBar';
import Profile from './profile';
import Pricing from './pricing';
import SearchCar from './searchCar';
import AddCar from './addCar';
import Dashboard from './Dashboard';
import ProvideAuth from './authenticaion/ProvideAuth';
//Create a Main Component
class Main extends Component {
        state = {
                cart:[1,2,3]
        }
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <ProvideAuth>
                <Router>
                    <Route path="/">
                        <NavBar></NavBar>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>
                    <Route path="/profile">
                        <Profile></Profile>
                    </Route>
                    <Route path="/pricing">
                        <Pricing></Pricing>
                    </Route>
                    <Route path="/searchCar">
                        <SearchCar></SearchCar>
                    </Route>
                    <Route path="/addCar">
                        <AddCar></AddCar>
                    </Route>
                    <Route path="/Dashboard">
                        <Dashboard></Dashboard>
                    </Route>
                </Router>
                </ProvideAuth>

            </div>
        )
    }
}
//Export The Main Component
export default Main;
