import UserState from "./context/user/userState";
import NavBar from "./core/NavBar";
import SearchBar from "./core/SearchBar";
import FriendList from "./core/UserList";
import AddForm from "./core/AddForm";

function App() {
  return (
    <div className="App">
      <UserState>
        <NavBar />
        <SearchBar />
        <FriendList />
        <AddForm />
      </UserState>
    </div>
  );
}

export default App;
