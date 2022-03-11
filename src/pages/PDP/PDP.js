// import { gql, useMutation } from '@apollo/client';
import React, {useContext, useState} from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productsData } from '../../App';
import { SizeButton } from './style';
import {add_to_cart,remove_from_cart} from '../../Service/action'
// const ADD_TOCART = gql`
//   query AddToCart 
//   cart(id: "ck5r8d5b500003f5o2aif0v2b") {
//     id
//     isEmpty
//     totalItems
//     items {
//       id
//       name
//     }
//   }
// }
// `;
function PDP(props) {
  const params = useParams();
  const paramsID = parseInt(params.id)
  const {data, setData} = useContext(productsData)
  const [size, setSize] = useState('')
  // console.log('productData', productData)
// useEffect(()=>{
//   console.log('test', props)

// },[props])

//   const [PDP, { items, loading, error }]= useMutation(ADD_TOCART)
// console.log({error, items, loading})
// if(loading) return <div>Spinner....</div>
  return (
    <div className='container'>
    {data.filter(product => product.id === paramsID).map(filteredProduct => (
      <div className='row' key={filteredProduct.id}>
        <div className='col-8'>
          <img className='img-fluid' src={filteredProduct.img_url} alt="product img"/>
        </div>
        <div className='col-4'>
          <h3>{filteredProduct.title}</h3>
          <div>
            <h4>Size</h4>
            <ul className='d-flex list-unstyled justify-content-between'>
              {filteredProduct.sizes.map((productSize, key)=>(
                <SizeButton key={key} onClick={(e)=> setSize(e.target.text)}>{productSize}</SizeButton>
              ))}
            </ul>
          </div>

          <div>
            <h4>Price</h4>
            <p>{filteredProduct.price}</p>
          </div>
          <button onClick={()=> {
            props.add_to_cart(filteredProduct.id,filteredProduct.title,size,filteredProduct.price)
            
          }}>Add to cart</button>
          <div>{filteredProduct.description}</div>

        </div>
      </div>
    ))}
    </div>
  )
}

export default connect(initialData =>{
  return{
    product : initialData
  }
},{add_to_cart, remove_from_cart})(PDP)


