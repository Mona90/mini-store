import React, { useState } from 'react'
import { Item } from './style'

function ProductItem(props) {
    const productData = props.data
    const [value, setValue] = useState(1)
  return (
        <Item >
            <td className='d-flex align-items-center'>
                <img className='item-img' src={productData.img} alt="product-img"/>
                <h5>{productData.title}</h5>

            </td>
            <td className='mb-0'>${productData.price}</td>
            <td className='item-control mx-3'>
                <div className='control-box'>
                    <span onClick={()=> setValue(value <= 0 ? 0 : value - 1)}>-</span>
                    <input type="text" value={value} readOnly/>
                    <span onClick={()=> setValue(value <= 0 ? 0 : value + 1)}>+</span>
                </div>
            </td>
            <td className='totalItem-price mb-0'>${productData.price * value}</td>
            
        </Item>
  )
}

export default ProductItem