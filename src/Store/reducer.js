import {ADD_TO_CART, REMOVE_FROM_CART} from './type'
import {read_cookie, bake_cookie} from 'sfcookies'


const product = (state =[], action) => {
    let product = state
    state = read_cookie('product');
    if (action.type === ADD_TO_CART){
        console.log('testttt', state, action.payload)
        if(state.length === 0){
            product = [...state, { ...action.payload }]
            bake_cookie('product', product)
            return product

        }else{
            for (const element of state) {
                if(element.id === action.payload.id){
                    alert('product is already added to cart')
                }
                else{
                    product = [...state, { ...action.payload }]
                    bake_cookie('product', product)
                     console.log('from reducer', product)
    
    
                
                }
                return product

            }
        }    
    }else if(action.type === REMOVE_FROM_CART){
        product = state.filter(selected => selected.id !== action.payload.id)
        bake_cookie('product', product)
        return product
    }else{
        return state
    }
}

export default product




