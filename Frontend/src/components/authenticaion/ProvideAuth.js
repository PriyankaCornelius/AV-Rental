import React, {useState, useEffect, createContext} from 'react';


export const AuthContext =  createContext();

const ProvideAuth = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [authState, setAuthState] = useState(null);

    const getAuthntication = async () => {
        const token = window.localStorage.getItem('token');
        const userObj = window.localStorage.getItem('user');
        const user = JSON.parse(userObj);
        if(token){
            setLoading(true);
            const response = await fetch('');
            setAuthState(response.state === 200);
            setUser(user);
            setLoading(false);
             
        }
        else{
            setAuthState(false);
        }
    }

    const updateLocalStorage = (user, token) => {
        console.log('Updating Local Storage', token, user);
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));
    }

    useEffect(()=>{
        getAuthntication();
    }, []);


    return (
        <AuthContext.Provider value={{isAuthenticated: authState, loading, user, setUser, setAuthState, updateLocalStorage}}>
            {children}
        </AuthContext.Provider>
    );
}


export default ProvideAuth;