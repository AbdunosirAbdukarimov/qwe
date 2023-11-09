import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <header>
        <hr />
        <div className="headernav">
            <span>Plant pots</span>
            <span>Ceramics</span>
            <span>Tables</span>
            <span>Chairs</span>
            <span>Crockery</span>
            <span>Tableware</span>
            <span>Cutlery</span>
        </div>
        <div className="header">
            <div className="text">
                <h2>The furniture brand for the <br /> future, with timeless designs</h2>
                <button className='one'>View collection</button>
                <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand <br />
                with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
                using modern web technologies.</p>
                <button className='two'>View collection</button>
            </div>
            <div className="img">
              <img src="./images/Right Image.png"/>
            </div>
        </div>
      </header>
      <main>
        <div className="mainhead">
          <h2>What makes our brand different</h2>
          <div className="boxes">
            <div className="box">
              <i class="fa-solid fa-truck-moving"></i>
              <h3>Next day as standard</h3>
              <p>Order before 3pm and get your order <br />
              the next day as standard</p>
            </div>
            <div className="box">
              <i class="fa-regular fa-circle-check"></i>
              <h3>Made by true artisans</h3>
              <p>Handmade crafted goods made with <br />
              real passion and craftmanship</p>
            </div>
            <div className="box">
              <i class="fa-regular fa-credit-card"></i>
              <h3>Unbeatable prices</h3>
              <p>For our materials and quality you <br />
               won’t find better prices anywhere</p>
            </div>
            <div className="box">
              <i class="fa-solid fa-seedling"></i>
              <h3>Recycled packaging</h3>
              <p>We use 100% recycled packaging to <br />
              ensure our footprint is manageable</p>
            </div>
          </div>
        </div>
        <div className="newceramics">
          <h2>New ceramics</h2>
          <div className="boxes">
            <div className="box">
              <img src="./images/Photo.png"/>
              <h3>The Dandy chair</h3>
              <p>£250</p>
            </div>
            <div className="box">
              <img src="./images/Parent.png"/>
              <h3>Rustic Vase Set</h3>
              <p>£155</p>
            </div>
            <div className="box">
              <img src="./images/Parent (1).png"/>
              <h3>The Silky Vase</h3>
              <p>£125</p>
            </div>
            <div className="box">
              <img src="./images/Parent (2).png"/>
              <h3>The Lucy Lamp</h3>
              <p>£399</p>
            </div>
          </div>
          <button>View collection</button>
        </div>
        <div className="newceramics">
          <h2>Our popular products</h2>
          <div className="boxes">
            <div className="box">
              <img src="./images/Large.png"/>
              <h3>The Poplar suede sofa</h3>
              <p>£980</p>
            </div>
            <div className="box">
              <img src="./images/Photo.png"/>
              <h3>The Dandy chair</h3>
              <p>£250</p>
            </div>
            <div className="box">
              <img src="./images/Photo (1).png"/>
              <h3>The Dandy chair</h3>
              <p>£250</p>
            </div>
          </div>
          <button>View collection</button>
        </div>
        <div className="singup">
            <div className="join">
              <h1>Join the club and get the benefits</h1>
              <p>Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
              <form>
                <input type="text" placeholder='your@email.com'/><button>Sign up</button>
              </form>
            </div>
        </div>
        <div className="mainfooter">
          <div className="text">
            <h2>From a studio in London to a global brand with <br />
            over 400 outlets</h2>

            <p>When we started Avion, the idea was simple. Make high quality furniture <br /> 
            affordable and available for the mass market. <br /><br /> 
            Handmade, and lovingly crafted furniture and homeware is what we live, <br /> 
            breathe and design so our Chelsea boutique become the hotbed for the <br /> 
            London interior design community.</p>

            <button>Get in touch</button>
          </div>
          <div className="img">
            <img src="./images/Image.png"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App