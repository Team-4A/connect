import React from "react";
import axios from "axios";
import { Form, FormControl, Button, Container, Navbar } from "react-bootstrap";

export default async function searchBar() {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_REGISTER);
  const allData = await res.data;
  const data = allData.map((data) => {
    return {
      data: data.username,
    };
  });
  
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                autoComplete={data.username}
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </Container>
      </>
  );
}

