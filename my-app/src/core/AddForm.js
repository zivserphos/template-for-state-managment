import { Form, Container, Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import userContext from "../context/user/userContext";
import React, { useContext, useState } from "react";
function AddForm() {
  const { dispatch } = useContext(userContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onInput={({ target: { value } }) => {
              setName(value);
            }}
            defaultValue={name}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            onInput={({ target: { value } }) => {
              setAge(value);
            }}
            defaultValue={age}
            type="number"
            placeholder="Enter Age"
          />
        </Form.Group>
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "ADD_FRIEND", user: { name, age, id: nanoid() } });
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <br />
    </Container>
  );
}
export default AddForm;
