import React from "react";

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
