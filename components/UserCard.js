import Useractivity from "./UserAcivity";
import PreviousOffers from '../components/previous_offers'
export default function UserCard1() {
  return (
    <>
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
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt=""
                      />
                    </div>
                    {/* <!-- END profile-header-img -->
                    <!-- BEGIN profile-header-info --> */}
                    <div className="profile-header-info">
                      <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
                      <p className="m-b-10">UXUI + Frontend Developer</p>
                      <a href="#" className="mb-2 btn btn-sm btn-info">
                        Edit Profile
                      </a>
                    </div>
                    {/* <!-- END profile-header-info --> */}
                  </div>
                  {/* <!-- END profile-header-content -->
                 <!-- BEGIN profile-header-tab --> */}
                  <ul className="profile-header-tab nav nav-tabs">
                    <li className="nav-item">
                      <a
                        href="#profile-post"
                        className="nav-link active show"
                        data-toggle="tab"
                      >
                        POSTS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profile-about"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        ABOUT
                      </a>
                    </li>
                    {/* <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">PHOTOS</a></li> */}
                    {/* <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">VIDEOS</a></li> */}
                    <li className="nav-item">
                      <a
                        href="#profile-friends"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        FRIENDS
                      </a>
                    </li>
                  </ul>
                  {/* <!-- END profile-header-tab --> */}
                </div>
              </div>
              {/* <!-- end profile -->
           <!-- begin profile-content --> */}
              <div className="row">
                <div className="col-sm-6">
                  <div className="panel panel-white border-top-purple">
                    <div className="panel-heading">
                      <h3 className="panel-title">My Story</h3>
                      <div className="controls pull-right">
                        <span className="pull-right clickable">
                          <i className="fa fa-chevron-up"></i>
                        </span>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="body-section">
                        <h5 className="section-heading">About</h5>
                        <p className="section-content">
                          A brief description of you
                        </p>
                      </div>
                      <div className="body-section">
                        <h5 className="section-heading">Introduction</h5>
                        <p className="section-content">
                          Put a little about yourself here so people know
                          they have found the correct Kevin.
                        </p>
                      </div>
                      <div className="body-section">
                        <h5 className="section-heading">Acheivements</h5>
                        <p className="section-content">
                          Examples: survived high school, have 3 kids, etc.
                        </p>
                      </div>
                      <div className="body-section">
                        <a href="#" className="btn btn-purple btn-sm">
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-white border-top-light-blue">
                    <div className="panel-heading">
                      {/* <h3 className="panel-title">My Activities</h3> */}
                      <div className="controls pull-right">
                        <span className="pull-right clickable">
                          <i className="fa fa-chevron-up"></i>
                        </span>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="body-section">
                        {/* <h5 className="section-heading">Current Plan: Basic Plan</h5> */}
                        <p>
                          <Useractivity />
                        </p>
                      </div>
                      <div className="body-section">
                        {/* <a href="#" className="btn btn-info btn-sm"> */}
                        {/* Upgrade Account */}
                        {/* </a> */}
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-white border-top-pink">
                    <div className="panel-heading">
                      <h3 className="panel-title">My Tasks</h3>
                      <div className="controls pull-right">
                        <span className="pull-right clickable">
                          <i className="fa fa-chevron-up"></i>
                        </span>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="body-section">
                        <h5 className="mg-top-0">Completed Pre-Orders - 90%</h5>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="body-section">
                        <h5>Completed Orders - 40%</h5>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar-success"
                            role="progressbar"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="body-section">
                        <h5>Design New Ad - 20%</h5>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar-info"
                            role="progressbar"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="body-section">
                        <h5>Conduct Feasibility Test - 60%</h5>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar-warning"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          >
                            <span className="sr-only">60% Complete (warning)</span>
                          </div>
                        </div>
                      </div>
                      <div className="body-section">
                        <h5>Conduct Domain Analysis - 80%</h5>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar progress-bar-danger"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel panel-white border-top-blue">
                    <div className="panel-heading">
                      <h3 className="panel-title">< PreviousOffers/></h3>

                      <div className="controls pull-right">
                        <span className="pull-right clickable">
                          <i className="fa fa-chevron-up"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                <div className="col-sm-6">
                  <div className="panel panel-white border-top-green">
                    <div className="panel-heading">
                      <h3 className="panel-title">User Info</h3>
                      <div className="controls pull-right">
                        <span className="pull-right clickable">
                          <i className="fa fa-chevron-up"></i>
                        </span>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="body-section">
                        <h5 className="section-heading">Name</h5>
                        <p className="section-content">Jane A. Doe</p>
                      </div>
                      <div className="body-section">
                        <h5 className="section-heading">Address</h5>
                        <p className="section-content">
                          46 Gray is Inn Rd, London, WC1X 8LP
                        </p>
                      </div>
                      <div className="body-section">
                        <h5 className="section-heading">Telephone</h5>
                        <p className="section-content">(123) 456 - 7890</p>
                      </div>
                      <div className="body-section">
                        <h5 className="section-heading">Email</h5>
                        <p className="section-content">spam@ztapps.com</p>
                      </div>
                      <div className="body-section">
                        <h5 className="section-heading">Website</h5>
                        <p className="section-content">ztapps.com</p>
                      </div>
                      <div className="body-section">
                        <a href="#" className="btn btn-green btn-sm">
                          Edit
                        </a>
                      </div>
                    </div>
                  </div>

                 

                 
                </div>
                {/* <!-- end profile-content --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
