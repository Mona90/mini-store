import {ADD_TO_CART, REMOVE_FROM_CART} from './type'
import {read_cookie, bake_cookie} from 'sfcookies'

const initialData = read_cookie('product')

const product = (state=initialData, action) => {

    let product = null
    if (action.type === ADD_TO_CART){
        for (const element of state) {
            if(element.productId === action.payload.productId){
                alert('product is already added to cart')
                bake_cookie('product', state)
                return state
            }
        }

        product = [...state, { ...action.payload }]
        console.log('from reducer', product)

        return product

         
        
        
    }else if(action.type === REMOVE_FROM_CART){
        product = state.filter(selected => selected.id !== action.payload.id)
        bake_cookie('product', product)
        return product
    }else{
        return state
    }
}

export default product




// import {ADD_TO_CART, REMOVE_FROM_CART} from './type'
// import {read_cookie, bake_cookie} from 'sfcookies'

// const product = (initialData=[], action)=>{
//     let product = null
//     initialData = read_cookie('product')
//     if(action.type === ADD_TO_CART){
//         const isFound = initialData.some(element =>{
//             if(element.productId === action.productId){
//                 alert('product is already added to cart')
//                 bake_cookie('product', initialData)

//             }else{
//                 product = [...initialData, {
//                     productId:action.productId,
//                     productName:action.productName,
//                     size:action.size,
//                     price:action.price
            
//                 }]
//                 bake_cookie('product', product)
    
//             }
//         })
        
        
//         console.log('from reducer', product)
//     }else if(action.type === REMOVE_FROM_CART){
//         product = initialData.filter(selected => selected.id !== action.id)
//         bake_cookie('product', product)
//         return product
//     }else{
//         return initialData
//     }
// }

// export default product