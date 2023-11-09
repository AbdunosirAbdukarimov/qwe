import React from 'react'
import { useState } from 'react'
import "./Navbar.css"

function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <i class="fa-solid fa-magnifying-glass one"></i>
        <h1>Avion</h1>
        <div className='icons'>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-magnifying-glass two"></i>
            <i class="fa-regular fa-circle-user"></i>
            <i class="fa-solid fa-bars" onClick={() => setOpen(!open)}></i>
        </div>   
      </nav>
      <div className={open?"bars show":"bars"}>
            <span>Plant pots</span>
            <span>Ceramics</span>
            <span>Tables</span>
            <span>Chairs</span>
            <span>Crockery</span>
            <span>Tableware</span>
            <span>Cutlery</span>
      </div>
    </>
  )
}

export default Navbar