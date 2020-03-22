import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [user,setUser] = useState({
    username:"",
    password:""
  });

  const handleChanges = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();

    axios
    .post("http://localhost:5000/api/login",user)
    .then(res=>{
        console.log(res);
        window.localStorage.setItem("token",res.data.payload);
        history.push("/protected");
    })
    .catch(err =>{
        console.log(err);
    })
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChanges}
          value={user.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChanges}
          value={user.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
