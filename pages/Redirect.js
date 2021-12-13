import React from 'react'
import Header from './userprofile'
import { useAuth } from "../contexts/auth";
import { fetchResource } from '../hooks/useResource'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Companyprofile from './companyprofile'


export default function Redirect() {
    const { user, login, logout } = useAuth()
    const [state, setState] = useState()
    const [allUserData, setAllUserData] = useState([])
    const [userData, setUserData] = useState({ id:0,email: "", username: "", is_company: "", phone_number: "", country: "", profile_img: "" })
    useEffect(async () => {

        let data = await axios.get('http://127.0.0.1:8000/register/')
        setAllUserData(data.data)
        console.log(user);
        // console.log(data.data);
        allUserData.map(item=> {
            if (item.email == user.email) {
                console.log('i am ahmad',item)
                setUserData(prevState => ({ ...prevState,id: 1,email: "hiiiiiiiiiiiiiiiiiiiiiii"
                 }))
            }
        })
        console.log('11111111111111111111111111111', userData)
    }, [state])



    return (
        <div>

            {/* {userData.is_company && <Companyprofile userData={userData} /> } */}
        </div>
    )
}
