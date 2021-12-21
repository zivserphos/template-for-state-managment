import React, { useReducer } from "react";
import userContext from "./userContext";
import { allReducer } from "../../reducers/userReducer";
import persons from "../../db/persons";
const UserState = (props) => {
  const [list, dispatch] = useReducer(allReducer, [...persons]);

  return (
    <userContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
