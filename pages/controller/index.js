import React from 'react'
import axios from "axios";
import { useAuth } from '../../contexts/auth';
export const getStaticProps = async () =>{
    
    const res = await axios('http://127.0.0.1:8000/register/')
    const data = await res.data

    const paths = data.map(item => {
        if (email === item.email) {
            return {
                props: {userInfo:item}
            }
        }
        
            
        
    })
    
}
export default function index({userInfo}) {
    return (
        <div>
            {userInfo}
        </div>
    )
}
