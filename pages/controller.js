import React from 'react'
import axios from "axios";
import Link from "next/link";
import { useEffect ,useState} from 'react';
import {useAuth} from '../contexts/auth'
import CompanyCard from '../components/companycard';
import UserCard from '../components/user_card';
import Header2 from '../components/header2';
import useOffersHooks from '../hooks/useOffersHooks'
export default function Controller(props) {
    const {resources} = useOffersHooks()
  
    
    const [state, setState] = useState(0)
    const [allUserData, setAllUserData] = useState([])
    const [userData, setUserData] = useState({ id: 0, email: "", username: "", is_company: "", phone_number: "", country: "", profile_img: "" })
    const user = JSON.parse(localStorage.getItem("userData"))

    useEffect( () => {
        const dealer = async()=>{
           
                let data = await axios.get(process.env.NEXT_PUBLIC_API_URL_REGISTER+user.user.id)
                console.log(data.data)
                setAllUserData(data.data)
                 
               
               
           
        }
        dealer()
         
    },[])
        
    console.log('userData', userData)

    
        if(allUserData && allUserData.is_company){
            return(<>
            <Header2/>
            <CompanyCard resources={resources} userData={allUserData}/>
            </>)
               
        }else{
            return(<>
            <Header2/>
            <UserCard resources={resources} userData={allUserData}/>
            </>)    
        }
        
    

    return (
        <div>
            
         <div>
             <ul>
            
                     {/* <Link href="/Explore"></Link>
                 </li>
                 <li> <Link href="/Explore"></Link></li>
                 <li> <Link href="/Explore"></Link></li> */}
            </ul>
         </div>
            
        </div>
    )
}
