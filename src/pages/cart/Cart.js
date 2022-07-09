import React, { useState } from 'react'
import { connect } from 'react-redux'
import Banner from '../../Components/Banner/Banner'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Header from '../../Components/Header'
import ProductItem from '../../Components/ProductItem'
import {add_to_cart, remove_from_cart} from '../../Store/action'
import {  TableBody } from './style'


function Cart(props) {
     const [showMenu, setShowMenu] = useState(false)
    const products = props.product
    // console.log('cart_Page',  products)  

      
  return (
    <div style={{...styles.mainStyle,paddingLeft:showMenu? '200px':'0'}}>
      <Header setShowMenu={setShowMenu} showMenu={showMenu}/>
      <div className='side-menu' style={{...styles.menuStyle,left:showMenu? '0':'-200px'}}></div>
      <Banner/>
      <BreadCrumb/>
    
     	  <table class="table table-cart table-mobile">
         <thead>
										<tr>
											<th className='flex-grow-1'>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
										</tr>
									</thead>
                      <TableBody className='list-unstyled'>
                          {products && products.map((product)=>{
                            return(
                                <ProductItem data={product} key={product.id}/>
                            )
                          })}
                      </TableBody>
         </table>
    </div>
  )
}
const styles = {
  mainStyle:{
    position:'relative',
    overflowX: 'hidden',
    transition:'all 0.3s ease-in-out'
  },
  menuStyle:{
    position:'absolute', top:0, height:'100%', width:'200px',
    transition:'all 0.3s ease-in-out'
  }
}
export default connect((productData)=>{
    return {product:productData}
},{add_to_cart, remove_from_cart}) (Cart)