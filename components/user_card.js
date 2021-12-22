
import PreviousOffers from "./previous_offers";
import Card from "react-bootstrap/Card";

export default function UserCard({
  userData,
  resources,
  activityResources,
  postResources,
}) {
  
  
  return (
    <>
    <div className="bg-indigo-100">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="px-4 py-5 row">
          <div className="">
            <div id="content" className="overflow-hidden rounded shadow ">
              {/* <!-- begin profile --> */}
              <div className="profile ">
                <div className="profile-header">
                  {/* <!-- BEGIN profile-header-cover --> */}
                  <div className="profile-header-cover"></div>
                  {/* <!-- END profile-header-cover --> */}
                  {/* <!-- BEGIN profile-header-content --> */}
                  <div className="profile-header-content">
                    {/* <!-- BEGIN profile-header-img --> */}
                    <div className="profile-header-img">
                      <img
                        src='https://bootdey.com/img/Content/avatar/avatar3.png'
                        alt=""
                      />
                    </div>
                    {/* <!-- END profile-header-img -->
                    <!-- BEGIN profile-header-info --> */}
                    <div className="profile-header-info">
                      <h4 className="capitalize m-t-10 m-b-5">{userData.username}</h4>
                      <p className="m-b-10">{userData.email}</p>
                      
                    </div>
                    {/* <!-- END profile-header-info --> */}
                  </div>
                  {/* <!-- END profile-header-content -->
                 <!-- BEGIN profile-header-tab --> */}
                  
                  {/* <!-- END profile-header-tab --> */}
                </div>
              </div>
              {/* <!-- end profile -->
           <!-- begin profile-content --> */}
              <div className="row">
                <div className="">
                  <div className="panel panel-white border-top-purple">
                    <div className="panel-heading">
                      {/* <h3 className="panel-title">My Story</h3> */}
                      <div className="controls pull-right">
                        <span className="pull-right clickable">
                          <i className="fa fa-chevron-up"></i>
                        </span>
                      </div>
                    </div>
                    <div className="p-1 panel-body">
                      <div className="body-section">
                        <h3 className="section-heading">About</h3>
                        <p className="italic font-bold section-content">Name: {userData.username}</p>
                        <p className="italic font-bold section-content">Email: {userData.email}</p>
                        <p className="italic font-bold section-content">Address: {userData.country}</p>
                        <p className="italic font-bold section-content">Phone Number: {userData.phone_number}</p>
                        {/* <img src={userData.profile_img}/> */}
                      </div>
                   
                      <div className="body-section">
                        <a href="#" className="btn btn-purple btn-sm">
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="panel-heading">
                    {/* <h3 className="panel-title">My Activities</h3> */}
                    <div className="controls pull-right">
                      <span className="pull-right clickable">
                        <i className="fa fa-chevron-up"></i>
                      </span>
                    </div>
                  </div>
                  <div className="panel panel-indigo-100 border-top-pink">
                    <div className="panel-heading">
                      <h3 className="panel-title">Previous Offers</h3>
                      <div className="controls pull-right">
                        <span className="pull-right clickable">
                          <i className="fa fa-chevron-up"></i>
                        </span>
                      </div>
                    </div>

                    <PreviousOffers resources={resources} userData={userData} />

                    <div className="panel-body"></div>
                  </div>
                  <div className="panel panel-white border-top-light-blue"></div>
                  <div className="panel-body">
                    <div className="body-section">
                      {/* <h5 className="section-heading">Current Plan: Basic Plan</h5> */}
                      <p>
                        <div className="container w-full mx-auto ">
                          <div>
                            <div className="relative w-full mx-auto bg-white shadow-xl">
                              <div className="">
                                <div className="w-full">
                                  <h3 className="px-4 font-bold text-center text-gray-600">
                                    Recent activites
                                  </h3>
                                  <div className="w-full mt-5">
                                    {activityResources &&
                                      postResources &&
                                      activityResources.map((ele, idx) => {
                                        if(ele.user == userData.id){
                                             return (postResources.map((item, idnx) => {
                                          if (ele.post == item.id) {
                                            
                                            return (
                                              <>
                                                <Card>
                                                  <Card.Body>
                                                    <Card.Title>You interacted by {ele.type_of_activity} on this post</Card.Title>
                                                    {item.body} 
                                                  </Card.Body>
                                                </Card>
                                              </>
                                            );
                                          }
                                        })
                                        );
                                        }
                                     
                                      })}
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                    <div className="body-section">
                      {/* <a href="#" className="btn btn-info btn-sm"> */}
                      {/* Upgrade Account */}
                      {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
