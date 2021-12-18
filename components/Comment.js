import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Header, Body } from "react-bootstrap";
export default function Comment({ comment, created_at, creator, userId }) {
  const [state, setState] = useState([]);
  const [indicator, setIndicator] = useState(0);

  useEffect(() => {
    const comment = async () => {
      let config = {
        method: "get",
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        url: `/register/${creator}`,
      };

      await axios(config).then((res) => {
        let data = res.data;
        setState(data);
      });
    };
    comment();
  }, []);

  return (
    <div className="">
      <Card>
     
        <Card.Header as="h5">{state.username}</Card.Header>
        <span className="text-xs italic font-light text-inherit">{created_at.slice(0, 10)}</span>
        <Card.Body>
        
          <Card.Text>
          {comment}
          </Card.Text>
        </Card.Body>
      </Card>
     
      
    </div>
  );
}
