import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.jpg'
import add_cart from '../Assets/add_cart.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
    <div className="nav-logo">
    <img src= {logo} alt='' />
    <p>SHOP ONCE</p>
    <ul className="nav-menu">
    <li onClick={() =>{setMenu('shop')}}><Link to= '/home' style={{textDecoration: 'none'}}>Shop</Link> {menu ==='shop'?<hr/>:<></>}</li>
    <li onClick={() =>{setMenu('men')}}> <Link to = '/men' style={{textDecoration: 'none'}}>Men</Link> {menu ==='men'?<hr/>:<></>}</li>
    <li onClick={() =>{setMenu('women')}}> <Link to = '/women' style={{textDecoration: 'none'}}>Women</Link> {menu ==='women'?<hr/>:<></>}</li>
    <li onClick={() => {setMenu('kids')}}> <Link to = '/kids' style={{textDecoration: 'none'}}>Kids</Link> {menu ==='kids'?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
    <Link to = '/login'><button>Login</button></Link>
    <Link to = '/cart'><img src={add_cart} alt="" /></Link>
    <div className="navbar-count">0</div>
    </div>
    </div>
      
    </div>
  )
}

export default NavBar
