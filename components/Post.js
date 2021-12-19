import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import {  Button, HeartIcon } from "@windmill/react-ui";
import useCommentResources from "../hooks/useCommentResources";
import useActiviyResources from "../hooks/useActivityResources";
import Comment from "./Comment";
import CreateOffer from "./CreateOffer";
export default function Post({
  
  info,
  updatePostResource,
  body,
  creator,
  created_at,
  id,
  likes,
  user_id,
  data
}) {
 
  const [allUserData,setAllUserData]=useState({})
  const { activityResources,createActivityResource } = useActiviyResources();

  const [state, setState] = useState([]);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const { resources, createResource } = useCommentResources();

  const [showState, setShowState] = useState(false);
  useEffect(() => {
    let config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      url: `/register/${creator}`,
    };

    axios(config).then((res) => {
      let data = res.data;
      setState(data);
    });
  }, []);

  let userData = JSON.parse(localStorage.getItem("userData"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await {
      comment: e.target.comment.value,
      creator: userData.user.id,
      on_post: [id],
    };
    await createResource(data);
    let userActivity = {
      type_of_activity: "Comment",
      user: userData.user.id,
      post: [id],
    };
    createActivityResource(userActivity);
    e.target.reset();
  };

  const handleClose = () => setShow(false);
  const addComment = () => setShow(true);
  useEffect(() => {
    if (resources) {
      resources.map((ele) => {
        if (ele.on_post == id) {
          setCounter((counter = counter + 1));
        }
      });
    }
  }, []);

  const HandleLike = () => {
    
    
      let data = {
        id: id,
        body: body,
        creator: creator,
        likes: [...likes,user_id],
  
      };
      
      updatePostResource(data);
     
  };

  const visit = () => {
    Router.push(`/controller/${creator}`);
  };
  let i = 0;
  const showComments = () => {
    if (i > 1) {
      i = 0;
    }
    let type = [true, false];
    setShowState(type[i]);
    ++i;
  };
  return (

    <>
      <div className="w-full">
        {/* <!-- begin timeline-time --> */}

        <div>
          <div className="justify-start timeline-time ">
            <span className=" date">Date</span>
            <span className="text-xs italic font-thin ">{created_at.slice(0,10)}</span>
          </div>
          {/* <!-- end timeline-time -->
                    <!-- begin timeline-icon --> */}
          <div className="timeline-icon">
            <a href="javascript:;">&nbsp;</a>

          </div>
          {/* <!-- end timeline-icon -->
                    <!-- begin timeline-body --> */}
          <div className="w-full timeline-body">
            <div className="timeline-header">
              <span className="userimage">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt=""
                />
              </span>
              <span className="username">
                <a href="javascript:;">{state.username}</a> <small></small>
              </span>
             
            </div>

            <div className="timeline-content">
              <p>{body}</p>
            </div>
            <div className="timeline-likes">
              <div className="stats-right">
                <span className="stats-text"></span>
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
                <span className="stats-total">
                  <CreateOffer
                    to_company={state.id}
                    body={body}
                    id={userData.user.id}
                    className="flex justify-end"
                  />
                </span>
              </div>
            </div>
            <div className="timeline-footer">
              <a href="javascript:;" className="m-r-15 text-inverse-lighter">
                <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3">
                  <Button
                    size="small"
                    onClick={HandleLike}
                    icon={HeartIcon}
                    layout="link"
                    aria-label="Like"
                    className="like"
                  >
                    {" "}
                    &hearts; {likes.length}
                    Like
                  </Button>
                </i>
              </a>
              <button onClick={showComments} className="stats-text">
                {counter} Comments
              </button>

              {showState &&
                resources &&
                resources.map((items, idx) => {
                  if (items.on_post == id) {
                    return (
                      <>
                        <li key={idx}>
                          <Comment
                            creator={items.creator}
                            comment={items.comment}
                            created_at={items.created_at}
                          />
                        </li>
                      </>
                    );
                  }
                })}
            </div>
            <div className="timeline-comment-box">
              <div className="user">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" />
              </div>
              <div className="input">
                <form
                  action=""
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="input-group">
                    <input
                      name="comment"
                      type="text"
                      className="form-control rounded-corner"
                      placeholder="Write a comment..."
                    />
                    <span className="input-group-btn p-l-10">
                      <button
                        className="btn btn-primary f-s-12 rounded-corner"
                        type="submit"
                      >
                        Comment
                      </button>
                    </span>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        {/* <!-- end timeline-body --> */}
      </div>
    </>
  );
}
