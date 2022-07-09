import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Grid, Section } from './style'
import { useRef } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { connect } from 'react-redux'
import {add_to_cart} from '../../Store/action'

function Products(props) {

  // console.log('testRdux', props)
    const imgSource = useRef(null)
    const [products, setProducts] = useState([])
    useEffect(()=>{
      const getProducts = async() =>{
        try{
          const res = await axios.get(`Data/data2.json`);
          setProducts(res.data.products);
        }catch(error){
          console.log(error)
        }
      }

      getProducts()
    },[])


    
  return (
    <Section className='container'>
      <h2>Top Selling Products</h2>
      <ul></ul>
        <Grid className='row justify-content-center'>
            {products.map((product, i) =>(
                <div className='card col-6 col-md-4 col-lg-3 col-xl-5col border-0' key={i} 

                >
                  <div className="wishlist-icon"><FontAwesomeIcon icon={faHeart}/></div>
                    <img className="card-img-top" 
                        src={product.img_preview}  
                        ref={imgSource}
                        onMouseEnter={(e)=>e.target.src=`${product.img_hover}`}
                        onMouseLeave={(e)=>e.target.src=`${product.img_preview}`}
                        alt="..."
                        />
                    <div className="card-body">
                        <h6>{product.category}</h6>
                        <h4>{product.title}</h4>
                        <p className="card-text">Price: {product.new_price}</p>
                        <button className='add_to_cart'
                        onClick={()=> {
                          props.add_to_cart(product.id,product.title,product.new_price,product.img_preview)}}
                        ><FontAwesomeIcon icon={faCartPlus}/> Add to cart</button>
                    </div>  
                </div>
            ))}
        </Grid>
    </Section>
  )
}

export default connect(state=>{
  return{
    product:state
  }
},{add_to_cart})(Products)