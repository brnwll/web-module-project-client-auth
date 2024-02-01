import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  name: "",
  email: "",
  age: "",
};

function AddFriend() {
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: name === "age" ? value.replace(/[^\d]/g, "") : value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", credentials)
      .then(() => {
        navigate("/friends");
      })
      .catch((err) => console.error(err));
  };

  const isDisabled =
    !credentials.name || !credentials.email || !credentials.age;

  return (
    <div className="container">
      <h2>Add Friend</h2>
      <form onSubmit={onSubmit}>
        <label>Friend name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Friend email</label>
        <input type="password" name="email" onChange={handleChange} />
        <label>Friend age</label>
        <input type="number" name="age" onChange={handleChange} />
        <button disabled={isDisabled} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddFriend;
