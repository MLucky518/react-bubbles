import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch(err => {
        console.log(err);
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className = "form-container">
      <h1>Login</h1>
   
      
      <form className="ui form" onSubmit={login}>
        <div className="field">
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChanges}
            value={user.username}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChanges}
            value={user.password}
          />
        </div>
        <button className="ui button" type="submit" >SUBMIT</button>
      </form>
    </div>
    
  );
};

export default Login;
