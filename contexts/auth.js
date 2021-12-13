import { createContext, useContext, useState } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios'
import Router from 'next/router';
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl+"/api/token/";

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {

    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    });

     function login(email, password) {

        const response = axios.post(tokenUrl, { email, password }).then(res =>{
            const decodedAccess = jwt.decode(res.data.access);
        const newState = {
            tokens: res.data,
            user: {
               
                email: decodedAccess.email,
                password: decodedAccess.password,
                
            },
        }

        setState(prevState => ({ ...prevState, ...newState }));
        Router.push('/')
        })
        .catch(err =>{
            console.log("u are not allowed to login")
            if (err.response.status==401){
                console.log("u are not allowed to login")
            }
        });

        
    }

    function logout() {
        const newState = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...newState }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}