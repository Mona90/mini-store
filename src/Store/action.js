import {ADD_TO_CART, REMOVE_FROM_CART} from './type'

export const add_to_cart = (id,title,price,img) =>{
    const action ={
        type: ADD_TO_CART,
        payload: {
            id,
            title,
            price,
            img
        }
    }
    // console.log('add', action)
   return action
}

export const remove_from_cart = (data) =>{
    const action ={
        type: REMOVE_FROM_CART,
        data
    }
    // console.log('remove', action)
   return action
}


