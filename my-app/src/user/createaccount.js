import React, { useState } from "react";
import axiosWithAuth from "../API/axiosWithAuth"


const CreateAccount = (props) => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const create =e=>{
    e.preventDefault();
    setCredentials({username:"",password:"",phone: "",})

   axiosWithAuth()
   .post('/api/users/register',credentials)
    .then(res =>{
      window.localStorage.setItem('token',res.data.payload)
      props.history.push("/protected")
    })

  }


  return (
    <div className="createaccount-card">
      <form onSubmit={create}>
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
          name="phone"
          value={credentials.phone}
          onChange={handleChange}
        />
         <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateAccount; 

