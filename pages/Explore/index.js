import axios from "axios";
import React ,{useEffect} from "react";
import Header from "../../components/header2";
import Post from "../../components/Post";
import usePostResource from '../../hooks/usePostResources'
import Header2 from '../../components/header2'
import Footer from '../../components/Footer'


export async function getServerSideProps() {

  // Pass data to the page via props
  return { props: {} }
}

export default function Explore() {
    const userData = JSON.parse(window.localStorage.getItem("userData"));
    const {resources,loading,error,createPostResource,updatePostResource} = usePostResource()
  
  return (
    <div>
      <Header2 />

      <main className="flex flex-col bg-indigo-100 bg-s-late-300">
        <div className=""> </div>
        <div className="flex flex-col w-3/5 gap-3 m-auto">
          <ul className="timeline">
            {resources &&
              resources.map((ele, idx) => {
                return (
                  <>
                    <li>
                      <Post
                        updatePostResource={updatePostResource}
                        likes={ele.likes}
                        user_id={userData.user.id}
                        body={ele.body}
                        creator={ele.creator}
                        created_at={ele.created_at}
                        id={ele.id}
                        data={ele}
                      />
                    </li>
                  </>
                );
              })}
          </ul>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
