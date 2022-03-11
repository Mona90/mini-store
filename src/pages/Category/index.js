import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { productsData } from '../../App'
const Category = () => {
  
    const [products, setProducts] = useState([])
    const {data, setData} = useContext(productsData)
    const navigate = useNavigate();
   
    useEffect(()=>{
      const getProducts = async() =>{
        try{
          const res = await axios.get(`Data/data.json`);
          setProducts(res.data.products);
          setData(res.data.products)
        }catch(error){
          console.log(error)
        }
      }

      getProducts()
    },[])
    
    const handleProceed = (id) => {
      navigate(`PDP/${id}`);
    };
  return (
    <div className='container'>
      <div className='row'>

        {products.map(product =>(
            <div className='col-md-4' key={product.id}>
              <div className='card m-3' onClick={() =>handleProceed(product.id)}>
                <img src={product.img_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4>{product.title}</h4>
                  <p className="card-text">{product.description}</p>
                </div>  
              </div>
            </div>
        ))}
            
     </div>

    </div>
  )
}

export default Category