
import storage from "redux-persist/lib/storage"
import { ADD_ITEM_TO_CART, ADD_ITEM_TO_CART_DETAILS, ADD_ITEM_TO_CART_REVIEW, CLEAR_STORAGE, DELETE_ITEM, GET_DETAILS, GET_PRODUCTS, GET_USER, LINK_PAYMENT, REMOVE_QUANTITY } from "./actions"


const InicialState ={
  food: [],
  detail: {},
  userDetails: [],
  cart: [],
  link: ''
}




 const appReducer = (state = InicialState, action) => {
  
   if(action.type === GET_PRODUCTS){
     return{
       ...state,
       food: action.payload
     }
   }
    if(action.type === GET_DETAILS){

    return{
      ...state,
      detail: action.payload
    }
  }
  if(action.type === GET_USER){
    return{
      ...state,
      userDetails: action.payload
    }
  }
  if(action.type === ADD_ITEM_TO_CART){
   

    const obj = state.cart.find(p => p.id === action.payload.id)

    if(obj){
      return{
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id? {
          ...item,
          quantity: item.quantity + 1
        }: item)
      }
    
    }
   
    return{
      ...state,
      cart: [...state.cart, action.payload]
      
    }
  }

  if(action.type === ADD_ITEM_TO_CART_REVIEW){
   

    const obj = state.cart.find(p => p.id === action.payload)

    if(obj){
      return{
        ...state,
        cart: state.cart.map(item => item.id === action.payload? {
          ...item,
          quantity: item.quantity + 1
        }: item)
      }
    
    }
   
    return{
      ...state,
      cart: [...state.cart, action.payload]
      
    }
  }

  if(action.type === ADD_ITEM_TO_CART_DETAILS){
  
    return{
     ...state,
      cart: [...state.cart, action.payload]
      
    }
  }
  if(action.type === REMOVE_QUANTITY){

    const obj = state.cart.find(p => p.id === action.payload.id)

    if(obj){
      return{
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id? {
          ...item,
          quantity: item.quantity - 1
        }: item)
      }
    
    }
   
    return{
      ...state,
      cart: [...state.cart, action.payload]
      
    }
  }

  if(action.type === LINK_PAYMENT){
   
    return{
      ...state,
      link: action.payload
      
    }
  }
      if(action.type === CLEAR_STORAGE) {
        storage.removeItem('persist:root')
        return {
          cart: []
        }
       }

  if(action.type === DELETE_ITEM){

    const items = state.cart.filter(p => p.id !== action.payload)
   
    return{
      ...state,
      cart: items
      
    }
  }
   
   else{
     return {...state}
   }

}

export default appReducer


export const rootReducer = (state = InicialState, action) => {
  if(action.type === CLEAR_STORAGE) {
      storage.removeItem('key:root')
      return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

