import React from 'react'
import LoginForm from '../components/LoginForm'
import useResource from '../hooks/useResource'

import {useAuth} from "../contexts/auth";

export default function Login() {
    const {user, login , logout} = useAuth()
    const { resources, loading, createResource, deleteResource } = useResource();
    
    
    return (
 <div>
     <LoginForm user={user} login={login}/>
 </div>
    )
}
