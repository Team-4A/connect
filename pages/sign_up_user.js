import axios from 'axios';
import SignUpForm from '../components/sign_up_form_for_company'
import Header from '../components/header'
import { useState } from 'react';
import SignUpFormForUsers from '../components/NewSignUp'
import Footer from '../components/Footer'

export default function SignUpPage() {
    const [state,DisplaySignUp] = useState(0)
    
 
   
  return (
    <>
    <Header DisplaySignUp={DisplaySignUp} state={state}/>
    {console.log(state)}
    
    <SignUpFormForUsers />
    
    
    </>
  )
}