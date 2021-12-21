import persons from "../db/persons";

export const allReducer = (state = persons, action) => {
  let updatedFriends = [...state];
  switch (action.type) {
    case "INITIAL_DATA":
      const initialState = [...persons];
      return [...initialState];
    case "ADD_FRIEND":
      return [...state, action.user];
    case "REMOVE_FRIEND":
      const index = state.findIndex(
        (person) => person.name === action.user.name
      );
      updatedFriends.splice(index, 1);
      return [...updatedFriends];
    case "UPDATE_FRIEND":
      const { name, age, id } = action.user;
      updatedFriends[id - 1] = { name, age };
      return [...updatedFriends];
    case "FILTER_LIST":
      const filteredList = state.filter((person) => {
        const lowerCaseName = person.name.toLowerCase();
        return lowerCaseName.startsWith(action.query.toLowerCase());
      });
      return [...filteredList];
    default:
      return [...state];
  }
};
