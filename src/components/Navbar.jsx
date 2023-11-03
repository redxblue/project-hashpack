import React from 'react'
import { useState } from 'react'
import './css/navbar.css'
import logo from '../assets/logo.png'
import { pairHashpack } from './hashconnect'


function Navbar() {
  const [pairingString,setPairingString]=useState()
  const[accountId,setAccountId]=useState()

  return (

<div className="nav-wrapper">
<nav className="navbar">
<img src={logo} alt="Company Logo" />
<ul className="nav no-search">
<li className="nav-item">
<a href="#">Home</a>
</li>
<li className="nav-item">
<a href="#">About</a>
</li>
<li className="nav-item">
<a href="#">Work</a>
</li>
<li className="nav-item">
<a href="#">Careers</a>
</li>
<li className="nav-item">
<a href="#">Contact Us</a>
</li>
<button className="temp"onClick={async () => {
          const initData = await pairHashpack()
          
          
          console.log(initData)
          setPairingString(initData.pairingString)
          setAccountId(accountId)
          console.log(accountId)
        }}><p id ='accountid'>Connect</p></button>
</ul>
</nav>
</div>
  )
}

export default Navbar