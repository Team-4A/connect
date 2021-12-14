import axios from "axios";
import React ,{useEffect} from "react";
import Header from "../../components/header2";
import Post from "../../components/Post";
import usePostResource from '../../hooks/usePostResources'


export default function Explore() {
    const {resources,loading,error} = usePostResource()
    useEffect(() => {
        console.log( {resources,loading,error}) 
  },[ resources,loading,error])
  
  
    
       
  
  return (
    <div>
      <Header />

      <main className=" bg-slate-300">
        <div className="flex flex-col w-3/5 gap-3 m-auto">
          {resources &&
            resources.map((ele, idx) => {
              return (
                  <>
                   <div className="flex " > <Post body={ele.body} creator={ele.creator} created_at={ele.created_at} id={ele.id} data={ele}/> </div>
                   </>
              
              )
            })}
          
        </div>
      </main>
    </div>
  );
}
