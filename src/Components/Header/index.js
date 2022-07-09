import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavBar} from './style'
import {add_to_cart} from '../../Store/action'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping,faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Header({product, setShowMenu,showMenu }) {
    //  console.log('from header',showMenu)
    const [show, setShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const cartProducts = product
    const ItemsNumber = cartProducts.length
       useEffect(()=>{
        let sum = 0
           for(let product of cartProducts){
            // setTotalPrice(prevCount => prevCount + parseInt(product.price))
            sum += parseInt(product.price)

           }
           setTotalPrice(sum)
           return totalPrice

       },[setTotalPrice,cartProducts])
  return (
    <NavBar className='navbar'>
        <div className='container' >
            <div className='d-flex justify-content-start align-items-center'>
                <FontAwesomeIcon className='bars-icon me-3' icon={faBars} onClick={()=>{
                    // console.log('clickedddd')
                    setShowMenu(!showMenu)}}/>
                <Link to="/" className='navbar-brand logo'>
                    <img src='/images/logo.png' alt="logo"/>
                </Link>
            </div>
            <div className='d-flex'>
                <div className='cart dropdown'>
                    <div className='cartIcon position-relative'>
                        <FontAwesomeIcon icon={faCartShopping}  onClick={()=>setShow(!show)}/>

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            {ItemsNumber}
                        </span>
                    </div>
                    <ul className={show? 'dropdown-menu d-block':'d-none'}>
                        {cartProducts && cartProducts.map((product,i) => (
                                <li className='item' key={i}>
                                    <div className='product-details'>
                                        <h4>{product.title}</h4> 
                                        <span>{product.price}</span>
                                    </div>
                                    <div className='product-img ms-3'>
                                        <img className='img-fluid' src={product.img} alt="product"/>
                                    </div>
                                </li>
                            )
                        )}
                        <p className='price-total'>Total:{totalPrice}</p>
                        <Link className='view-cart' to="cart">View Cart</Link>
                    </ul>    
                </div>
            </div>
        </div>
    </NavBar>
  )
}
export default connect((state)=>{
    return {product:state}
},{add_to_cart})(Header)
