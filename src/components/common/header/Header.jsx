import React, { useState } from "react"
import { Link } from "react-router-dom"
//  import Head from "./Head"

import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
     {/* <Head /> */}
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/student/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/student/team'>Team</Link>
            </li>
            <li>
              <Link to='/student/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/student/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/student/contact'>Contact</Link>
            </li>
          </ul>
         <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div> 
          <button className='btn-toggle' id="boom" onClick={() => setClick(!click)}>
            {click ? <i class="bi bi-x-octagon"></i> : <i class="bi bi-justify"></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
