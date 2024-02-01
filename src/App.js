import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

function FriendList() {
  return <h2>Friend List</h2>;
}

function AddFriend() {
  return <h2>Add Friend</h2>;
}

function Logout() {
  return <h2>Logout</h2>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendList />} />
        <Route path="/add" element={<AddFriend />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
