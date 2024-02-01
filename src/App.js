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
import FriendList from "./components/FriendList";

function AddFriend() {
  return <h2>Add Friend</h2>;
}

function Logout() {
  return <h2>Logout</h2>;
}

function Protected({ element }) {
  return !localStorage.getItem("token") ? <Navigate to="/login" /> : element;
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
            element={<Protected element={<FriendList />} />}
          />
          <Route path="/add" element={<Protected element={<AddFriend />} />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
