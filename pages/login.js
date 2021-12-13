import React from 'react'
import LoginForm from '../components/LoginForm'
import {useAuth} from "../contexts/auth";
import { useState,useEffect } from "react";
import {useResource} from '../hooks/useResource'


export default function Login() {
    // console.log(user)
    const {user, login , logout} = useAuth()
    console.log('hiiiiiiiiiii',user);

    
    return (
 <div>
     <LoginForm login={login} user={user}/>
 </div>
    )
}
