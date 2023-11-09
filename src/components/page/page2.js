import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./page2.css"

function Page2() {
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
        <br />
        <div className="header">
            <div className="text">
                <h2>Luxury homeware for people <br /> who love timeless design quality</h2>
                <p>Shop the new Spring 2022 collection today</p>
                <button>View collection</button>
            </div>
            <div className="img">
              <img src="./images/l79820220110125903.webp"/>
            </div>
        </div>
        </header><br /><br /><br />
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
        <div className="headermain">
            <div className="text">
                <h2>It started with a small idea</h2>
                <p>A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014</p>
                <button>View collection</button>
            </div>
            <div className="img">
              <img src="./images/Image Block.png"/>
            </div>
        </div>
        <div className="singup">
            <div className="join">
              <h1>Join the club and get the benefits</h1>
              <p>Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
              <div className="icon">
                <div className="box">
                  <i class="fa-solid fa-circle-check"></i>
                  <span> </span>Exclusive offers
                </div>
                <div className="box">
                  <i class="fa-solid fa-circle-check"></i>
                  <span> </span>Free events
                </div>
                <div className="box">
                  <i class="fa-solid fa-circle-check"></i>
                  <span> </span>Large discounts
                </div>
              </div>
              <form>
                <input type="text" placeholder='your@email.com'/><button>Sign up</button>
              </form>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page2