import axios from 'axios';
import SignUpFormForUser from '../components/sign_up_form_for_company'
import Header from '../components/header'
import { useState } from 'react';


export default function SignUpPage() {
    const [state,DisplaySignUp] = useState(0)
    
  
  return (
    <>
    
    <Header DisplaySignUp={DisplaySignUp} state={state}/>
    {console.log(state)}
    
    <SignUpFormForUser />
    
    </>
  )
}