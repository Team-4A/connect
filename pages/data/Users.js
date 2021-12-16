import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
export default function Users() {
    const url = process.env.NEXT_PUBLIC_API_URL_REGISTER
    console.log(url)
   
    console.log("hi from controlere")
    try {
        
       
    } catch (error) {
        handleError(error);
    }
    function handleError(error) {
        console.error(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
    }
  
}
