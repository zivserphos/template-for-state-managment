import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import EditForm from "./EditForm";
import { ListGroup, Button } from "react-bootstrap";
import userContext from "../context/user/userContext";

const User = ({ person, isOnEdit, setIsOnEdit }) => {
  const [edit, setEdit] = useState(false);
  const { dispatch } = useContext(userContext);

  const openToEdit = () => {
    console.log(openToEdit);
    if (isOnEdit) return;
    setIsOnEdit(true);
    setEdit(!edit);
  };

  const closeEdit = () => {
    setIsOnEdit(false);
    setEdit(!edit);
  };

  return !edit ? (
    <div>
      <ListGroup.Item
        key={nanoid()}
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          {person.name} | <small>{person.age}</small>
        </div>
        <div>
          <Button variant="warning" onClick={openToEdit}>
            Edit
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "REMOVE_FRIEND",
                user: { name: person.name },
              });
            }}
            variant="danger"
          >
            <small>Delete</small>
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  ) : (
    <div
      style={{
        border: "firebricks 10px solid",
        backgroundColor: "blueviolet",
      }}
    >
      <EditForm payload={person} stopEditFunc={closeEdit} />
    </div>
  );
};

export default User;
