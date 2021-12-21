import { Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import userContext from "../context/user/userContext";

export default function EditForm({ stopEditFunc, payload }) {
  const { dispatch } = useContext(userContext);
  const [name, setName] = useState(payload.name);
  const [age, setAge] = useState(payload.age);

  return (
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
          stopEditFunc();
          dispatch({
            type: "UPDATE_FRIEND",
            user: { name, age, id: payload.id },
          });
        }}
        variant="warning"
        type="submit"
      >
        End edit
      </Button>
    </Form>
  );
}
