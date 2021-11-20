import React, { useEffect, useState} from 'react';
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
import CarList from './CarList';
import RideList from './RideList';


const Main = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [authState, setAuthState] = useState(false);
    const [token, setToken] = useState();

    useEffect(()=>{
        fetchInitialStateForUser();
    }, []);

    const fetchInitialStateForUser = async () => {
        console.log('Main Component called');
        const token = window.localStorage.getItem('token');
        const userObj = window.localStorage.getItem('user');
        const user = JSON.parse(userObj);
        if(token){
            setLoading(true);
            const response = await fetch(`http://localhost:5000/user/verifyToken/${token}`);
            if(response.state === 200){
                setAuthState(response.state === 200);
                setUser(user);
                setToken(token);
                setLoading(false);
            }
            else{
                setAuthState(false);
                setLoading(false);
            }
        }
        else{
            setAuthState(false);
            setLoading(false);
        }
    }
    return(
        <div>
            {!loading && (
                <ProvideAuth value={{user, authState, token}}>
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
                    <Route path="/CarList">
                        <CarList/>
                    </Route>
                    <Route path="/RideList">
                        <RideList/>
                    </Route>
                </Router>
                </ProvideAuth>
            )
            }
            </div>
    );
}

export default Main;
