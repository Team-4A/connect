import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Body } from "react-bootstrap";


export default function Comment({ comment, created_at, creator }) {
  const [state, setState] = useState([]);
  
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

  return (
    <div className="">
      <Card style={{ max_width: "40rem" }}>
        <Card.Body>
          <Card.Title className="font-italic">{state.username}</Card.Title>
          <Card.Subtitle className="mb-1 text-xs text-muted">
          {created_at}
          </Card.Subtitle>
          <Card.Text>{comment}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
