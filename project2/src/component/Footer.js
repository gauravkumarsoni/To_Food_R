import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>


      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

        </Link>
               <footer>
  <p>To Food - An online food delivery platform built using MERN stack.</p>
  <p><strong>Developed by:</strong> Gaurav Kumar (Full Stack)</p>
  <p>Built with React.js, Node.js, Express, and MongoDB</p>
  <p>📧 gauravkumargupta722@email.com | 🌐 <a href="https://www.linkedin.com/in/gaurav-kumar-880959263">LinkedIn</a> | 💼 </p>
  <p>© 2025 To Food. All rights reserved.</p>
</footer>


      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

      </ul>






    </div>
  )
}
