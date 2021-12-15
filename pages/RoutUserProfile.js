import React from 'react'
import axios from "axios";
import UserCard from "../components/user_card"
import VisitCompany from "../components/VisitCompany"
import CompanyCard from '../components/companycard';
import { useEffect,useState } from 'react'
export default function RoutUserProfile({user_id}) {
    const [userState, setUserState] = useState()
    useEffect( () => {
        const getUserData = async()=>{
            const res = await axios.get(process.env.NEXT_PUBLIC_API_URL`/register/${user_id}`)
            const data = await res.data
            setUserState(data)
        }
       

    },[])
console.log(userState)

    if (userState && userState.is_company){
        return (<VisitCompany userData={userState}/>)
    }else{
        return (<UserCard userData={userState}/>)
    }   
    
}
