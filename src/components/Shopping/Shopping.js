import React from 'react'
import { useState } from 'react'
import "./Shopping.css"

function Shopping() {


    const [open, setOpen] = useState(false)
    const [addCart, setAddCart] = useState([])
    const [total , setTotal] = useState(0)
    

    const addToCart = (id , price) => {
        const newdata = data.filter(item => {
            return item.id === id      
        })
        setAddCart([...addCart , newdata[0]])
        updatetotal(price)
        
    }

    const updatetotal = (price) => {
       setTotal(total + price)
    }

    const removeItem = (id , price) => {
        setAddCart(addCart.filter (item => {return item.id !== id}))
        setTotal(total - price)
    }

    const buyButtonClicked = (id) =>{
        alert("Your Order is placed");
        setAddCart(addCart.filter (item => {return item.id === id}))
        setTotal(0)
    }




  return (
    <>
    <header>
      
      <div className="nav container">
        <h1 className="logo">Ecommerce</h1>
        
        <i className="bx bx-shopping-bag" onClick={() => setOpen(true)} id="cart-icon"></i>

        

        <div className={open?"cart active":"cart"}>
          <h2 className="cart-title">Your Cart</h2>
          
          <div className="cart-content">

            {
                addCart && addCart.map((item , i) =>{
                    return <div className='cart-box' key={i}>
                        <img src={item.img} alt="Massage" className="cart-img" />
                        <div className="detail-box">
                            <div className="cart-product-title">{item.name}</div>
                            <div className="cart-price">${item.price}</div>
                            <input type="number" defaultValue={1} min={1} max={10} className="cart-quantity"/>
                        </div>
                        <i className="bx bxs-trash-alt cart-remove" onClick={() => removeItem(item.id , item.price)}></i>
                    </div>
                })
            }

            


          </div>
          
          <div className="total">
            <div className="total-title">Total</div>
            <div className="total-price">${total}</div>
          </div>
         
          <button type="button" className="btn-buy" onClick={() =>buyButtonClicked(data.id)}>Buy Now</button>
          
          <i className="bx bx-x" id="close-cart" onClick={() => setOpen(false)}></i>
        </div>


      </div>
    </header>

    <section className="shop container">
      <h2 className="section-title">Shop Products</h2>
      <div className="shop-content">

        {
            data && data.map((item , i) => {
                return <div className="product-box" key={item.id}>
                    <img src={item.img} alt="Massage" className="product-img" />
                    <h2 className="product-title">{item.name}</h2>
                    <span className="price">${item.price}</span>
                    <i className="bx bx-shopping-bag add-cart" onClick={() => addToCart(item.id , item.price)}></i>
                </div>
            })
        }

        
      </div>
    </section>
    </>
  )
}

export default Shopping

const data = [
    {id: 1, name: "AEROREADY SHIRT", img: "/img/images1.webp", price: 25},
    {id: 2, name: "WIRELESS EARBUDS", img: "/img/images1.webp", price: 99},
    {id: 3, name: "HOODED PARKA", img: "/img/images1.webp", price: 55},
    {id: 4, name: "STRAW METAL BOTTLE", img: "/img/images1.webp", price: 75},
    {id: 5, name: "SILVER METAL", img: "/img/images1.webp", price: 120},
    {id: 6, name: "BACK HAT", img: "/img/images1.webp", price: 80},
    {id: 7, name: "BACKPACK", img: "/img/images1.webp", price: 250},
    {id: 8, name: "ULTRABOOST 22", img: "/img/images1.webp", price: 180},
]

