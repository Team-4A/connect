import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CompanyCard from "../components/companycard";
import UserCard from "../components/user_card";
import Header2 from "../components/header2";
import useOffersHooks from "../hooks/useOffersHooks";
import useActivityResources from "../hooks/useActivityResources";
import usePostResource from "../hooks/usePostResources";
import Footer from "../components/Footer";
import { useRouter } from 'next/router'

export async function getServerSideProps() {

  // Pass data to the page via props
  return { props: {} }
}


export default function Controller() {
  const { offerResources, updateOfferResource } = useOffersHooks();
  const { resources } = usePostResource();
  const { activityResources } = useActivityResources();
  const [allUserData, setAllUserData] = useState([]);
  const router = useRouter()

  const user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const dealer = async () => {
      let data = await axios.get(
        process.env.NEXT_PUBLIC_API_URL_REGISTER + user.user.id
      );

      setAllUserData(data.data);
    };
    dealer();
  }, []);
  if (router.isFallback) {
    return <div>Loading.......</div>
  }
  if (allUserData && allUserData.is_company) {
    return (
      <>
        <Header2 />
        <CompanyCard
          user_id={user.user.id}
          updateOfferResource={updateOfferResource}
          allOffers={offerResources}
          userData={allUserData}
        />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header2 />
        <UserCard
          resources={offerResources}
          postResources={resources}
          activityResources={activityResources}
          userData={allUserData}
        />
        <Footer />
      </>
    );
  }


}


