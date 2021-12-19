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

export default function Controller(props) {
  const { offerResources, updateOfferResource } = useOffersHooks();
  const { resources } = usePostResource();
  const { activityResources } = useActivityResources();
  const [state, setState] = useState();
  const [allUserData, setAllUserData] = useState([]);
  const [userData, setUserData] = useState({
    id: 0,
    email: "",
    username: "",
    is_company: "",
    phone_number: "",
    country: "",
    profile_img: "",
  });

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
