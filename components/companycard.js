import usePostResource from "../hooks/usePostResources";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import usePostResources from "../hooks/usePostResources";
import companyOffers from "./companyoffers";

export default function CompanyCard({
  allOffers,
  userData,
  user_id,
  updateOfferResource,
}) {
  const { createPostResource } = usePostResources();
  const { resources } = usePostResource();
  const [modalShow, setModalShow] = useState(false);
  const [sliderShow, setSliderShow] = useState(false);
  const createNewPost = (e) => {
    e.preventDefault();
    let newPost = {
      body: e.target.postcontent.value,
      creator: user_id,
    };
    createPostResource(newPost);
    setModalShow(false);
  };
  const approve = (item) => {
   item["status"]='approved'
    console.log({ item });
  
    updateOfferResource(item);
  };
  
  const reject = (item) => {
     item["status"]='rejected'
  
    updateOfferResource(item);
  };
  
  return (
    <>
      {console.log("all posts in company card---- ", resources)}

      {console.log("from compnay card resources ", allOffers)}
      {sliderShow && <companyOffers sliderShow={sliderShow} />}

      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
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
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt=""
                      />
                    </div>
                    {/* <!-- END profile-header-img -->
                     <!-- BEGIN profile-header-info --> */}
                    <div className="profile-header-info">
                      <h4 className="m-t-10 m-b-5">{userData.username}</h4>
                      <p className="m-b-10">{userData.is_company}</p>
                      {sliderShow == false ? (
                        <button
                          onClick={() => setSliderShow(true)}
                          className="btn btn-primary f-s-12 rounded-corner"
                          type="button"
                        >
                          Preview Offers
                        </button>
                      ) : (
                        <button
                          onClick={() => setSliderShow(false)}
                          className="btn btn-primary f-s-12 rounded-corner"
                          type="button"
                        >
                          Hide Offers
                        </button>
                      )}

                      <div className="flex justify-end ">
                        <button
                          onClick={() => setModalShow(true)}
                          className="btn btn-primary f-s-12 rounded-corner"
                          type="button"
                        >
                          Create Post
                        </button>
                        <Modal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Post your service</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form onSubmit={createNewPost}>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label>Post Content</Form.Label>
                                <Form.Control
                                  name="postcontent"
                                  as="textarea"
                                  rows={3}
                                />
                              </Form.Group>
                              <Button variant="secondary" type="submit">
                                Publish
                              </Button>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={() => setModalShow(false)}
                            >
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
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
                    {/* <li className="nav-item"><a href="#profile-about" className="nav-link" data-toggle="tab">ABOUT</a></li>
                     <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">PHOTOS</a></li>
                     <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">VIDEOS</a></li>
                     <li className="nav-item"><a href="#profile-friends" className="nav-link" data-toggle="tab">FRIENDS</a></li> */}
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
                 
                      {sliderShow &&
                        allOffers &&
                        allOffers.map((item, idx) => {
                          if (user_id == item.to_company && item.status != "rejected") {
                            return (
                              <li>
                                <div className="timeline-time">
                                  <span className="date"></span>
                                  <span className="time">Offer </span>
                                </div>
                                {/* <!-- end timeline-time -->
                           <!-- begin timeline-icon --> */}
                                <div className="timeline-icon">
                                  <a href="javascript:;">&nbsp;</a>
                                </div>
                                {/* <!-- begin timeline-time --> */}

                                {/* <!-- end timeline-time -->
                                                         <!-- begin timeline-icon --> */}
                                <div className="timeline-icon">
                                  <a href="javascript:;">&nbsp;</a>
                                </div>
                                {/* <!-- end timeline-icon -->
                                                         <!-- begin timeline-body --> */}
                                <div className="timeline-body">
                                  <div className="timeline-header">
                                    <span className="userimage">
                                      <img
                                        src="https://ict4kids.files.wordpress.com/2013/05/mrc-2.png"
                                        alt=""
                                      />
                                    </span>
                                    <span className="username">
                                      Title: {item.title}
                                    </span>
                                    <span className="">
                                      <Button
                                        onClick={() => {
                                          approve(item);
                                        }}
                                      >
                                        Approve
                                      </Button>
                                    </span>
                                    <span className="">
                                      <Button
                                        onClick={() => {
                                          reject(item);
                                        }}
                                      >
                                        Reject
                                      </Button>
                                    </span>
                                  </div>
                                  <div className="timeline-content">
                                    <p></p>
                                    <p className="lead">
                                      <i className="fa fa-quote-left fa-fw pull-left"></i>
                                      {item.description}
                                      <i className="fa fa-quote-right fa-fw pull-right"></i>
                                    </p>
                                    <p>Price = {item.price}</p>
                                  </div>
                                </div>
                                {/* <!-- end timeline-body --> */}
                                {/* <button  className="btn btn-primary f-s-12 rounded-corner" type="button">Approve</button> */}
                              </li>
                            );
                          }
                        })}

                      {resources &&
                        resources.map((item) => {
                          if (item.creator == user_id) {
                            return (
                              <>
                                <li>
                                  {/* <!-- begin timeline-time --> */}
                                  <div className="timeline-time">
                                    <span className="date"></span>
                                    <span className="time">
                                      {item.created_at.slice(0, 10)}
                                    </span>
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
                                      <span className="userimage">
                                        <img
                                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                          alt=""
                                        />
                                      </span>
                                      <span className="username">
                                        <a href="javascript:;">
                                          {userData.username}
                                        </a>{" "}
                                        <small></small>
                                      </span>
                                    </div>

                                    <div className="timeline-content">
                                      <p>{item.body}</p>
                                    </div>
                                    <div className="timeline-likes">
                                      <div className="stats"></div>
                                    </div>
                                    <div className="timeline-footer">
                                      <a
                                        href="javascript:;"
                                        className="m-r-15 text-inverse-lighter"
                                      >
                                        <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>{" "}
                                        Like
                                      </a>
                                    </div>
                                    <div className="timeline-comment-box">
                                      <div className="user">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
                                      </div>
                                      <div className="input">
                                        <form action="">
                                          <div className="input-group">
                                            <input
                                              type="text"
                                              className="form-control rounded-corner"
                                              placeholder="Write a comment..."
                                            />
                                            <span className="input-group-btn p-l-10">
                                              <button
                                                className="btn btn-primary f-s-12 rounded-corner"
                                                type="button"
                                              >
                                                Comment
                                              </button>
                                            </span>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!-- end timeline-body --> */}
                                </li>
                              </>
                            );
                          }
                        })}
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
