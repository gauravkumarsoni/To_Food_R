import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screen/Cart';
import { useCart } from './ContextReducer';



export default function Navbar1() {
  const data = useCart();
  const [cartView, setCartView]= useState(false)
  const navigate = useNavigate();
  const handalLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");

  }





  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark   ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-italic" to="#">To Food</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav me-auto mb-2  ">
              <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              {(localStorage.getItem("authToken")) ?
                <Link className="nav-link active fs-5" aria-current="page" to="/myorder">My orders</Link>
                : ""

              }

            </div>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex '>

                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/creatuser">Signup</Link>
              </div>
              : <div>
                <div className='btn bg-primary text-white mx-2' onClick={()=>{setCartView(true)}}> My Cart {"  "}
                <Badge bg="danger"> {data.length} </Badge>
                </div>
                {cartView? <Modal onClose={()=>setCartView(false)}> <Cart></Cart>
                 </Modal>:null}
                <div className='btn bg-danger text-white mx-2' onClick={handalLogout}>LogOut </div>
              </div>

            }

          </div>
        </div>
      </nav>
    </div>
  )
}

