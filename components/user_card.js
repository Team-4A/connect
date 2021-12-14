import Useractivity from '../components/user_activity'
// import PreviousOffers from '../components/previous_offers'
export default function UserCard({userData}) {
   return (
     <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="container">
  <div class="row py-5 px-4">
     <div class="">
        <div id="content" class=" shadow rounded overflow-hidden">
           {/* <!-- begin profile --> */}
           <div class="profile ">
              <div class="profile-header">
                 {/* <!-- BEGIN profile-header-cover --> */}
                 <div class="profile-header-cover"></div>
                 {/* <!-- END profile-header-cover --> */}
                 {/* <!-- BEGIN profile-header-content --> */}
                 <div class="profile-header-content">
                    {/* <!-- BEGIN profile-header-img --> */}
                    <div class="profile-header-img">
                       <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                    </div>
                    {/* <!-- END profile-header-img -->
                    <!-- BEGIN profile-header-info --> */}
                    <div class="profile-header-info">
                       <h4 class="m-t-10 m-b-5">{userData.username}</h4>
                       <p class="m-b-10">{userData.username}</p>
                       <a href="#" class="btn btn-sm btn-info mb-2">{userData.username}</a>
                    </div>
                    {/* <!-- END profile-header-info --> */}
                 </div>
                 {/* <!-- END profile-header-content -->
                 <!-- BEGIN profile-header-tab --> */}
                 <ul class="profile-header-tab nav nav-tabs">
                    <li class="nav-item"><a href="#profile-post" class="nav-link active show" data-toggle="tab">POSTS</a></li>
                    <li class="nav-item"><a href="#profile-about" class="nav-link" data-toggle="tab">ABOUT</a></li>
                    {/* <li class="nav-item"><a href="#profile-photos" class="nav-link" data-toggle="tab">PHOTOS</a></li> */}
                    {/* <li class="nav-item"><a href="#profile-videos" class="nav-link" data-toggle="tab">VIDEOS</a></li> */}
                    <li class="nav-item"><a href="#profile-friends" class="nav-link" data-toggle="tab">FRIENDS</a></li>
                 </ul>
                 {/* <!-- END profile-header-tab --> */}
              </div>
           </div>
           {/* <!-- end profile -->
           <!-- begin profile-content --> */}
           <div class="row">
           <div class="col-sm-6">
             <div class="panel panel-white border-top-purple">
               <div class="panel-heading">
                 <h3 class="panel-title">My Story</h3>
                 <div class="controls pull-right">
                   <span class="pull-right clickable">
                     <i class="fa fa-chevron-up"></i>
                   </span>
                 </div>
               </div>
               <div class="panel-body">
                 <div class="body-section"> 
                   <h5 class="section-heading">About</h5>
                   <p class="section-content">{userData.email}</p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Introduction</h5>
                   <p class="section-content">
                     Put a little about yourself  here so people know they've
                     found the correct Kevin.
                   </p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Acheivements</h5>
                   <p class="section-content">
                     Examples: survived high school, have 3 kids, etc.
                   </p>
                 </div>
                 <div class="body-section">
                   <a href="#" class="btn btn-purple btn-sm">
                     Edit
                   </a>
                 </div>
               </div>
             </div>

             <div class="panel panel-white border-top-light-blue">
               <div class="panel-heading">
                 {/* <h3 class="panel-title">My Activities</h3> */}
                 <div class="controls pull-right">
                   <span class="pull-right clickable">
                     <i class="fa fa-chevron-up"></i>
                   </span>
                 </div>
               </div>
               <div class="panel-body">
                 <div class="body-section">
                   {/* <h5 class="section-heading">Current Plan: Basic Plan</h5> */}
                   <p><Useractivity/></p>
                   
                 </div>
                 <div class="body-section">
                   {/* <a href="#" class="btn btn-info btn-sm"> */}
                     {/* Upgrade Account */}
                   {/* </a> */}
                 </div>
               </div>
             </div>

             <div class="panel panel-white border-top-pink">
               <div class="panel-heading">
                 <h3 class="panel-title">My Tasks</h3>
                 <div class="controls pull-right">
                   <span class="pull-right clickable">
                     <i class="fa fa-chevron-up"></i>
                   </span>
                 </div>
               </div>
               <div class="panel-body">
                 <div class="body-section">
                   <h5 class="mg-top-0">Completed Pre-Orders - 90%</h5>
                   <div class="progress progress-xs">
                     <div
                       class="progress-bar"
                       role="progressbar"
                       aria-valuenow="90"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       style={{ width: "90%" }}
                     ></div>
                   </div>
                 </div>
                 <div class="body-section">
                   <h5>Completed Orders - 40%</h5>
                   <div class="progress progress-xs">
                     <div
                       class="progress-bar progress-bar-success"
                       role="progressbar"
                       aria-valuenow="40"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       style={{ width: "40%" }}
                     ></div>
                   </div>
                 </div>
                 <div class="body-section">
                   <h5>Design New Ad - 20%</h5>
                   <div class="progress progress-xs">
                     <div
                       class="progress-bar progress-bar-info"
                       role="progressbar"
                       aria-valuenow="20"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       style={{ width: "20%" }}
                     ></div>
                   </div>
                 </div>
                 <div class="body-section">
                   <h5>Conduct Feasibility Test - 60%</h5>
                   <div class="progress progress-xs">
                     <div
                       class="progress-bar progress-bar-warning"
                       role="progressbar"
                       aria-valuenow="60"
                       aria-valuemin="0"
                       aria-valuemax="100"
                       style={{ width: "60%" }}
                     >
                       <span class="sr-only">60% Complete (warning)</span>
                     </div>
                   </div>
                 </div>
                 <div class="body-section">
                   <h5>Conduct Domain Analysis - 80%</h5>
                   <div class="progress progress-xs">
                     <div
                       class="progress-bar progress-bar-danger"
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

           <div class="col-sm-6">
             <div class="panel panel-white border-top-green">
               <div class="panel-heading">
                 <h3 class="panel-title">User Info</h3>
                 <div class="controls pull-right">
                   <span class="pull-right clickable">
                     <i class="fa fa-chevron-up"></i>
                   </span>
                 </div>
               </div>
               <div class="panel-body">
                 <div class="body-section">
                   <h5 class="section-heading">Name</h5>
                   <p class="section-content">Jane A. Doe</p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Address</h5>
                   <p class="section-content">
                     46 Gray's Inn Rd, London, WC1X 8LP
                   </p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Telephone</h5>
                   <p class="section-content">(123) 456 - 7890</p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Email</h5>
                   <p class="section-content">spam@ztapps.com</p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Website</h5>
                   <p class="section-content">ztapps.com</p>
                 </div>
                 <div class="body-section">
                   <a href="#" class="btn btn-green btn-sm">
                     Edit
                   </a>
                 </div>
               </div>
             </div>

             {/* <div class="panel panel-white border-top-orange">
               <div class="panel-heading">
                 <h3 class="panel-title">Social Statistics</h3>
                 <div class="controls pull-right">
                   <span class="pull-right clickable">
                     <i class="fa fa-chevron-up"></i>
                   </span>
                 </div>
               </div>
               <div class="panel-body">
                 <div class="body-section">
                   <h5 class="section-heading">Friends</h5>
                   <p class="section-content">242</p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Posts</h5>
                   <p class="section-content">2240</p>
                 </div>
                 <div class="body-section">
                   <h5 class="section-heading">Pictures</h5>
                   <p class="section-content">18</p>
                 </div>
               </div>
             </div> */}

             <div class="panel panel-white border-top-blue">
               <div class="panel-heading">
                 <h3 class="panel-title"></h3>
                 


                 <div class="controls pull-right">
                   <span class="pull-right clickable">
                     <i class="fa fa-chevron-up"></i>
                   </span>
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
 