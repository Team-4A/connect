import axios from "axios";
import React from "react";
import Header from "../components/header";
import Post from "../components/Post";
import useResource from "../hooks/useResource";
import {useAuth} from "../contexts/auth";
import { useState,useEffect } from "react";
// let tokens = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MzM1NzYwLCJpYXQiOjE2MzkzMzIxNjAsImp0aSI6IjY0NzIyYzZiODE4NjRlYTBiNmVkZTVmNmU5NzM0NWVkIiwidXNlcl9pZCI6MTgsInVzZXJuYW1lIjoiYWRoYW0xMjM0NWFkIn0.GcRA3eC9MmeeaS74KCd7VWa0BZbPcBQctnojYNcP0l4"
// let headers = {
//   'Authorization': 'Bearer ' + tokens.access
// }
export default function Explore() {
  const {user, login , logout} = useAuth()
  const { resources, loading, createResource, deleteResource } = useResource();
  const [state, setState] = useState([]);
  const [comment, setComment] = useState([]);
  
  login("adhammohidat123@gmail.com","1qasw23ed")
  useEffect(() => {
    
   
    let config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      url: "/api/vi/connect/post",
    };
    axios(config).then((res) => {
      console.log(res)
      let data = res.data;
      setState(data);
    });
  }, []);

  useEffect(() => {
    let config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      url:"/api/vi/connect/comment",
      
    };
    axios(config).then((res) => {
      console.log(res)
      let data = res.data;
      setComment(data);
    });
  }, []);
  
  return (
    <div>
      <Header />

      <main className=" bg-slate-300">
        <div className="flex flex-col w-3/5 gap-3 m-auto">
          {state &&
            state.map((ele, idx) => {
              return (
                <p key={idx}>
                  <Post body={ele.body} id = {ele.id} creator = {ele.creator} created_at = {ele.created_at} comment={comment}/>
                  
                </p>
              );
            })}
          
        </div>
      </main>
    </div>
  );
}
