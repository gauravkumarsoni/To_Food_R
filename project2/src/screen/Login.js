import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './signup.css';

export default function Login() {
   const BACKEND_URL = process.env.REACT_APP_URL;

  const [crendintial, setcrendintial] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  const dbSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/loginuser`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: crendintial.email, password: crendintial.password })
    });
    const userData = await response.json();



    // console.log(userData);
    if (!userData.success) {
      alert("Enter valid carenditial");
    }

    if (userData.success) {
      alert("Login successful");
      localStorage.setItem("userEmail", crendintial.email );
      localStorage.setItem("authToken", userData.authToken);

      navigate ("/");
    }

  }
  const toChange = (event) => {
    setcrendintial({ ...crendintial, [event.target.name]: event.target.value })

  }

  return (
        <div className='signups'>
    
          <form onSubmit={dbSubmit}>
           
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" value={crendintial.email} onChange={toChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
    
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={crendintial.password} onChange={toChange} id="exampleInputPassword1" />
            </div>
            
            
            
    
            <button type="submit" className="btn btn-primary">Submit</button>
           
            <Link to="/creatuser" className="btn btn-danger m-3">New account</Link>
          </form>
        </div>
 
  )
}
