import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
};

function Login() {
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/friends");
      })
      .catch((err) => console.error(err));
  };

  const isDisabled = !credentials.username || !credentials.password;

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button disabled={isDisabled} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
