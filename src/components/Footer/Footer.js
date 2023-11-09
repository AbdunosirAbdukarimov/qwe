import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer>
            <div class="footer">
                <div className="app">
                    <div class="rolling">
                        <h3>Menu</h3>
                        <small>New arrivals</small>
                        <small>Best sellers</small>
                        <small>Recently viewed</small>
                        <small>Popular this week</small>
                        <small>All products</small>
                    </div>
                    <div class="community">
                        <h3>Categories</h3>
                        <small>Crockery</small>
                        <small>Furniture</small>
                        <small>Homeware</small>
                        <small>Plant pots</small>
                        <small>Chairs</small>
                    </div>
                    <div class="rolling">
                        <h3>Our company</h3>
                        <small>About us</small>
                        <small>Vacancies</small>
                        <small>Contact us</small>
                        <small>Privacy</small>
                        <small>Returns policy</small>
                    </div>
                </div>                
                    <div class="submit">
                        <h3>Join our mailing list</h3>
                        <form >
                        <input type="text" placeholder="your@email.com"/><button>Sign up</button>
                        </form>
                    </div>
            </div>
            <br /><br />
            <hr/>
            <br /><br />
            <div class="footermain">
                <div class="text">
                    <h1>Copyright 2022 Avion LTD</h1>
                </div>
                <div class="icon">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </footer>
  )
}

export default Footer