// import { from } from '@apollo/client'
import React from 'react'
import { connect } from 'react-redux'
// import { productsData } from '../../App'
import {add_to_cart, remove_from_cart} from '../../Service/action'
function Cart(props) {

    const product = props.product
    console.log('cart_Page',  product)  

    // useEffect(()=>{
    //     console.log('mona',  cartProducts)  
    //   },[cartProducts])
       


  return (
    <div>{product && product.map((eachProduct, key)=>{
      return(
        <ul key={key}>
          <li>{eachProduct.productId}</li>
        </ul>
      )
    })}</div>
  )
}

export default connect((productData)=>{
    return {product:productData}
},{add_to_cart, remove_from_cart}) (Cart)