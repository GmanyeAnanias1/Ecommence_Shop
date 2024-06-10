import React from 'react'
import './Offers.css'
import offer_image from '../Assets/offer_image.jpg'

const Offers = () => {
  return (
    <div className='offers'>
     <div className="offers-left">
     <h1>Exclusive</h1>
     <h1>Offers For You</h1>
     <p>ONLY BEST SELLERS PRODUCTS</p>
     <button>Check Now</button>
     </div>
      
      <div className="offers-right">
      <img src={offer_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
