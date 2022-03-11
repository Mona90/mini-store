import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartIcon, NavLink} from './style'
function Header(props) {
    // const cartProducts = props.add_to_cart

    // useEffect(()=>{
    //     console.log('mona',  cartProducts)  
    //   },[cartProducts])
       
  return (
    <div className='navbar'>
        <div className='container' >
            <nav className='nav'>
                <NavLink className='nav-link active' href="/">women</NavLink>
                <NavLink className='nav-link' href="">Men</NavLink>
                <NavLink className='nav-link' href="">Kids</NavLink>
            </nav>
            <div className='navbar-brand logo'>
                <img src='/images/icons/logo.png' alt="logo"/>
            </div>
            <div className='d-flex'>
                <div className='currancy dropdown mx-3'>
                    <div className='dropdown-toggle'>
                        <span className='unit' id="currancy-dropdown">$</span>
                    </div>
                    <ul className='dropdown-menu' aria-labelledby="currancy-dropdown"></ul>
                </div>
                <div className='cart dropdown'>
                    <CartIcon className='dropdown-toggle' id="cart-dropdown" role="dropdown">
                        <Link to="/cart"><img className=''  src='/images/icons/cart.png' style={{width:'20px'}} alt="cart"/></Link>
                    </CartIcon>
                    <ul className='dropdown-menu' aria-labelledby="cart-dropdown">
                        {/* {cartProducts.map(product => {
                            return(
                                <li>{product.productId}</li>
                            )
                        })} */}
                    </ul>    
                </div>
            </div>
        </div>
    </div>
  )
}
// const style = {
//     Button:{
//         fontSize: '15px',
//         fontWeight: 500,
//     }
// }
export default Header