import React, { useState } from "react";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const passwordHandler = (e) => {
    console.log("Type value " + e.target.value);
    setpassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Username : ${username} Password :${password}`)

  };

  return (
    <div>
      <h2>Login form</h2>
      <label>Username</label>
     
     <form onSubmit={submitHandler}>
     <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          console.log("Typed value " + e.target.value);
          setusername(e.target.value);
        }}
      ></input>
      <br/>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={passwordHandler}
      ></input>
      <button type="submit">
        Submit
      </button>
     </form>
      <p>Login user :{username}</p>
    </div>
  );
};

export default Login;
