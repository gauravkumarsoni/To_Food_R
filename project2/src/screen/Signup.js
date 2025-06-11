import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Signup() {
     const BACKEND_URL = process.env.REACT_APP_URL;

  const [crendintial, setcrendintial]= useState({name:"",email:"", password:"", geolocation:""})
  
  const dbSubmit = async(e)=> {
    e.preventDefault();
    const response = await fetch(`${BACKEND_URL}/creatuser`,{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:crendintial.name, email:crendintial.email, password:crendintial.password, location:crendintial.geolocation})
    });
    const userData = await response.json(); 
    
    
    
    // console.log(userData);
    if(!userData.success){
      alert("Enter valid carenditial");
    }
  
  }
  const toChange=(event)=>{
    setcrendintial({...crendintial,[event.target.name]:event.target.value})

  }
  
  return (
    <div className='container'>

      <form onSubmit={dbSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" name="name" value={crendintial.name} onChange={toChange} id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={crendintial.email} onChange={toChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={crendintial.password} onChange={toChange} id="exampleInputPassword1" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="geolocation" className="form-label">geolocation</label>
          <input type="text" className="form-control" name="geolocation" onChange={toChange} value={crendintial.geolocation}  id="exampleInputPassword1" />
        </div>
        

        <button type="submit" className="btn btn-primary">Submit</button>
       
        <Link to="/login" className="btn btn-danger m-3">Alredy account</Link>
      </form>
    </div>
  )
}
  

