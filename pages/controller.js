import React from 'react'
import axios from "axios";
import Link from "next/link";
import { useEffect ,useState} from 'react';
import {useAuth} from '../contexts/auth'
import CompanyCard from '../components/companycard';
import UserCard from '../components/user_card';
import Header2 from '../components/header2';
export default function Controller(props) {
    console.log(props)
    
    const [state, setState] = useState(0)
    const [allUserData, setAllUserData] = useState([])
    const [userData, setUserData] = useState({ id: 0, email: "", username: "", is_company: "", phone_number: "", country: "", profile_img: "" })
    const user = JSON.parse(localStorage.getItem("userData"))

    useEffect( () => {
        const dealer = async()=>{
           
                let data = await axios.get('http://127.0.0.1:8000/register/'+user.user.id)
                console.log(data.data)
                setAllUserData(data.data)
                 
               
               
           
        }
        dealer()
         
    },[])
        
    console.log('userData', userData)

    
        if(allUserData && allUserData.is_company){
            return(<>
            <Header2/>
            <CompanyCard userData={allUserData}/>
            </>)
               
        }else{
            return(<>
            <Header2/>
            <UserCard userData={allUserData}/>
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
