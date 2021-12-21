import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import userContext from "../context/user/userContext";
import persons from "../db/persons";
export default function SearchBar() {
  const { list, dispatch } = useContext(userContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    initialData();
  }, [filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch({ type: "FILTER_LIST", query: e.target.value });
  };

  const initialData = () => {
    if (filter.length === 0)
      dispatch({ type: "INITIAL_DATA", data: [...persons] });
  };

  return (
    <Container style={{ margin: "0 auto", width: "50%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search For Friend</Form.Label>
          <Form.Control
            onChange={(e) => {
              handleChange(e);
            }}
            value={filter}
            type="text"
            placeholder="Enter friend name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
