import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h2>Friend List</h2>
      <ul className="friend-list">
        {friends.map((friend) => (
          <li key={friend.id}>
            - {friend.name} - {friend.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
