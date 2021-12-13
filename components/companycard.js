
export default function CompanyCard() {
    return (
      <>
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div className="container">
   <div className="px-4 py-5 row">
      <div className="col-md-12">
         <div id="content" className="content content-full-width">
            {/* <!-- begin profile --> */}
            <div className="profile">
               <div className="profile-header">
                  {/* <!-- BEGIN profile-header-cover --> */}
                  <div className="profile-header-cover"></div>
                  {/* <!-- END profile-header-cover --> */}
                  {/* <!-- BEGIN profile-header-content --> */}
                  <div className="profile-header-content">
                     {/* <!-- BEGIN profile-header-img --> */}
                     <div className="profile-header-img">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                     </div>
                     {/* <!-- END profile-header-img -->
                     <!-- BEGIN profile-header-info --> */}
                     <div className="profile-header-info">
                        <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
                        <p className="m-b-10">UXUI + Frontend Developer</p>
                        <a href="#" className="mb-2 btn btn-sm btn-info">Edit Profile</a>
                     </div>
                     {/* <!-- END profile-header-info --> */}
                  </div>
                  {/* <!-- END profile-header-content -->
                  <!-- BEGIN profile-header-tab --> */}
                  <ul className="profile-header-tab nav nav-tabs">
                     <li className="nav-item"><a href="#profile-post" className="nav-link active show" data-toggle="tab">POSTS</a></li>
                     <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                     <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">PHOTOS</a></li>
                     <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">VIDEOS</a></li>
                     <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">FRIENDS</a></li>
                  </ul>
                  {/* <!-- END profile-header-tab --> */}
               </div>
            </div>
            {/* <!-- end profile -->
            <!-- begin profile-content --> */}
            <div className="profile-content">
               {/* <!-- begin tab-content --> */}
               <div className="p-0 tab-content">
                  {/* <!-- begin #profile-post tab --> */}
                  <div className="tab-pane fade active show" id="profile-post">
                     {/* <!-- begin timeline --> */}
                     <ul className="timeline">
                        <li>
                           {/* <!-- begin timeline-time --> */}
                           <div className="timeline-time">
                              <span className="date">today</span>
                              <span className="time">04:20</span>
                           </div>
                           {/* <!-- end timeline-time -->
                           <!-- begin timeline-icon --> */}
                           <div className="timeline-icon">
                              <a href="javascript:;">&nbsp;</a>
                           </div>
                           {/* <!-- end timeline-icon -->
                           <!-- begin timeline-body --> */}
                           <div className="timeline-body">
                              <div className="timeline-header">
                                 <span className="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/></span>
                                 <span className="username"><a href="javascript:;">Sean Ngu</a> <small></small></span>
                                 <span className="pull-right text-muted">18 Views</span>
                              </div>
                              <div className="timeline-content">
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
                                    Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
                                 </p>
                              </div>
                              <div className="timeline-likes">
                                 <div className="stats-right">
                                    <span className="stats-text">259 Shares</span>
                                    <span className="stats-text">21 Comments</span>
                                 </div>
                                 <div className="stats">
                                    <span className="fa-stack fa-fw stats-icon">
                                    <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                    <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                    </span>
                                    <span className="fa-stack fa-fw stats-icon">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <span className="stats-total">4.3k</span>
                                 </div>
                              </div>
                              <div className="timeline-footer">
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                              </div>
                              <div className="timeline-comment-box">
                                 <div className="user"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"/></div>
                                 <div className="input">
                                    <form action="">
                                       <div className="input-group">
                                          <input type="text" className="form-control rounded-corner" placeholder="Write a comment..."/>
                                          <span className="input-group-btn p-l-10">
                                          <button className="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                          </span>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                           {/* <!-- end timeline-body --> */}
                        </li>
                        <li>
                           {/* <!-- begin timeline-time --> */}
                           <div className="timeline-time">
                              <span className="date">yesterday</span>
                              <span className="time">20:17</span>
                           </div>
                           {/* <!-- end timeline-time --> */}
                           {/* <!-- begin timeline-icon --> */}
                           <div className="timeline-icon">
                              <a href="javascript:;">&nbsp;</a>
                           </div>
                           {/* <!-- end timeline-icon --> */}
                           {/* <!-- begin timeline-body --> */}
                           <div className="timeline-body">
                              <div className="timeline-header">
                                 <span className="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/></span>
                                 <span className="username">Sean Ngu</span>
                                 <span className="pull-right text-muted">82 Views</span>
                              </div>
                              <div className="timeline-content">
                                 <p>Location: United States</p>
                              </div>
                              <div className="timeline-footer">
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                              </div>
                           </div>
                           {/* <!-- end timeline-body --> */}
                        </li>
                        <li>
                           {/* <!-- begin timeline-time --> */}
                           <div className="timeline-time">
                              <span className="date">24 February 2014</span>
                              <span className="time">08:17</span>
                           </div>
                           {/* <!-- end timeline-time -->
                           <!-- begin timeline-icon --> */}
                           <div className="timeline-icon">
                              <a href="javascript:;">&nbsp;</a>
                           </div>
                           {/* <!-- end timeline-icon -->
                           <!-- begin timeline-body --> */}
                           <div className="timeline-body">
                              <div className="timeline-header">
                                 <span className="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/></span>
                                 <span className="username">Sean Ngu</span>
                                 <span className="pull-right text-muted">1,282 Views</span>
                              </div>
                              <div className="timeline-content">
                                 <p className="lead">
                                    <i className="fa fa-quote-left fa-fw pull-left"></i>
                                    Quisque sed varius nisl. Nulla facilisi. Phasellus consequat sapien sit amet nibh molestie placerat. Donec nulla quam, ullamcorper ut velit vitae, lobortis condimentum magna. Suspendisse mollis in sem vel mollis.
                                    <i className="fa fa-quote-right fa-fw pull-right"></i>
                                 </p>
                              </div>
                              <div className="timeline-footer">
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                              </div>
                           </div>
                           {/* <!-- end timeline-body --> */}
                        </li>
                        <li>
                           {/* <!-- begin timeline-time --> */}
                           <div className="timeline-time">
                              <span className="date">10 January 2014</span>
                              <span className="time">20:43</span>
                           </div>
                           {/* <!-- end timeline-time -->
                           <!-- begin timeline-icon --> */}
                           <div className="timeline-icon">
                              <a href="javascript:;">&nbsp;</a>
                           </div>
                           {/* <!-- end timeline-icon --> */}
                           {/* <!-- begin timeline-body --> */}
                           <div className="timeline-body">
                              <div className="timeline-header">
                                 <span className="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/></span>
                                 <span className="username">Sean Ngu</span>
                                 <span className="pull-right text-muted">1,021,282 Views</span>
                              </div>
                              <div className="timeline-content">
                                 <h4 className="template-title">
                                    <i className="fa fa-map-marker text-danger fa-fw"></i>
                                    795 Folsom Ave, Suite 600 San Francisco, CA 94107
                                 </h4>
                                 <p>In hac habitasse platea dictumst. Pellentesque bibendum id sem nec faucibus. Maecenas molestie, augue vel accumsan rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.</p>
                                 <p className="m-t-20">
                                    <img src="../assets/img/gallery/gallery-5.jpg" alt=""/>
                                 </p>
                              </div>
                              <div className="timeline-footer">
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                 <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                              </div>
                           </div>
                           {/* <!-- end timeline-body --> */}
                        </li>
                        <li>
                           {/* <!-- begin timeline-icon --> */}
                           <div className="timeline-icon">
                              <a href="javascript:;">&nbsp;</a>
                           </div>
                           {/* <!-- end timeline-icon --> */}
                           {/* <!-- begin timeline-body --> */}
                           <div className="timeline-body">
                              Loading...
                           </div>
                           {/* <!-- begin timeline-body --> */}
                        </li>
                     </ul>
                     {/* <!-- end timeline --> */}
                  </div>
                  {/* <!-- end #profile-post tab --> */}
               </div>
               {/* <!-- end tab-content --> */}
            </div>
            {/* <!-- end profile-content --> */}
         </div>
      </div>
   </div>
</div>
      </>
    );
  }
  