import React from "react";
import axios from "axios";
import VisitCompany from "../../components/VisitCompany";
import VisitUserCard from "../../components/VisitUserCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  const { id } = router.query;
  const [userState, setUserState] = useState();
  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/register/${parseInt(id)}`
      );
      const data = await res.data;
      setUserState(data);
    };
    getUserData()
  }, []);

  console.log({userState},id)
 
  return(
      <>
      {
          (userState && userState.is_company)?<VisitCompany userData={userState} />:<VisitUserCard userData={userState} />}
      </>
      
  )
}
