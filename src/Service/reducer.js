import {ADD_TO_CART, REMOVE_FROM_CART} from './type'
import {read_cookie, bake_cookie} from 'sfcookies'

const product = (initialData=[], action)=>{
    let product = null
    initialData = read_cookie('product')
    if(action.type === ADD_TO_CART){
        const isFound = initialData.some(element =>{
            if(element.productId === action.productId){
                alert('product is already added to cart')
                bake_cookie('product', initialData)

            }else{
                product = [...initialData, {
                    productId:action.productId,
                    productName:action.productName,
                    size:action.size,
                    price:action.price
            
                }]
                bake_cookie('product', product)
    
            }
        })
        
        
        console.log('from reducer', product)
    }else if(action.type === REMOVE_FROM_CART){
        product = initialData.filter(selected => selected.id !== action.id)
        bake_cookie('product', product)
        return product
    }else{
        return initialData
    }
}

export default product