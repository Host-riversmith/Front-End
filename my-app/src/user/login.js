import React, { useState } from "react";
import axiosWithAuth from "../API/axiosWithAuth"


const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    phonenumber: "",

  });

  const handleChange = (e) => { 

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login =e=>{
    e.preventDefault();
    setCredentials({username:"",password:"",phonenumber: "",})

   axiosWithAuth()
   .post('/api/users/login',credentials)
    .then(res =>{
      window.localStorage.setItem('token',res.data.token)
      props.history.push("/protected")
    })

  }


  return (
    <div className="login-card">
      
      <form onSubmit={login}>
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
       <h3>Password</h3>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <h3>Phone Number</h3>
          <input
          type="text"
          name="phonenumber"
          value={credentials.phonenumber}
          onChange={handleChange}
        />
         <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login; 