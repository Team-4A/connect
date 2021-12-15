import axios from "axios";
import React ,{useEffect} from "react";
import Header from "../../components/header2";
import Post from "../../components/Post";
import usePostResource from '../../hooks/usePostResources'
import Header2 from '../../components/header2'
import searchBar from '../../components/searchBar'

export default function Explore() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const {resources,loading,error,createPostResource,updatePostResource} = usePostResource()
    useEffect(() => {
        console.log( {resources,loading,error}) 
  },[ resources,loading,error])
  
  
    
  
  return (
    <div>
       
      <Header2 />
      <searchBar/>
      <main className=" bg-slate-300">
      
        <div className="flex flex-col w-3/5 gap-3 m-auto">
        
        
          {resources &&
            resources.map((ele, idx) => {
              return (
                  <>
                  
                   <div className="flex " > <Post updatePostResource={updatePostResource} likes={ele.likes} user_id = {userData.id} body={ele.body} creator={ele.creator} created_at={ele.created_at} id={ele.id} data={ele}/> </div>
                   </>
              
              )
            })}
          
        </div>
      </main>
    </div>
  );
}
