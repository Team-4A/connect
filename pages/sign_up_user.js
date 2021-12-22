import Header from '../components/header'
import { useState } from 'react';
import SignUpFormForUsers from '../components/NewSignUp'



export default function SignUpPage() {
    const [state,DisplaySignUp] = useState(0)
    
 
   
  return (
    <>
    <Header DisplaySignUp={DisplaySignUp} state={state}/>
    
    
    <SignUpFormForUsers />




    
    
    
    </>
  )
}