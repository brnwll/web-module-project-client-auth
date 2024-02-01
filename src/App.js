import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
//import FriendList from "./components/FriendList";

function FriendList() {
  return <h2>Friend List</h2>;
}

function AddFriend() {
  return <h2>Add Friend</h2>;
}

function Logout() {
  return <h2>Logout</h2>;
}

function isAuthed() {
  return localStorage.getItem("token");
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/friends"
            element={isAuthed() ? <FriendList /> : <Navigate to="/login" />}
          />
          <Route
            path="/add"
            element={isAuthed() ? <AddFriend /> : <Navigate to="/login" />}
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
