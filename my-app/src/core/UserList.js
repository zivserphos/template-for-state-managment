import React, { useContext, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import userContext from "../context/user/userContext";
import User from "./User";

export default function FriendList() {
  const { list } = useContext(userContext);
  const [isOnEdit, setIsOnEdit] = useState(false);

  return (
    <Container>
      <ListGroup>
        {list.map((person) => {
          return (
            <User
              key={person.id}
              person={person}
              isOnEdit={isOnEdit}
              setIsOnEdit={setIsOnEdit}
            />
          );
        })}
      </ListGroup>
    </Container>
  );
}
