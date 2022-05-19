const axios = require('axios').default;

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const NOT_FOUND = 'NOT_FOUND'
export const GET_DETAILS = 'GET_DETAILS'
export const GET_USER = 'GET_USER'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const DELETE_ITEM = 'DELETE_ITEM'
export const LINK_PAYMENT= 'LINK_PAYMENT'
export const CLEAR_STORAGE = 'CLEAR_STORAGE'

const ur= 'https://hit-pasta.herokuapp.com'
const url = 'http://localhost:4000'

export function getProduct (){   
       return async function (dispatch){
          try {                            
               const res = await axios.get(url); 
              
               if(res.data.status === 404){
                 dispatch({ type: NOT_FOUND, payload: true });
               } else {
                 dispatch({ type: GET_PRODUCTS, payload: res.data });
               }
           } catch (err) {
                dispatch({ type: NOT_FOUND, payload: true });
           }
               
       } 
    
    
 }

 export function getDetail(id){
    return async function (dispatch){ 
       const data = await fetch(`${url}/detail/${id}`)
       const info = await data.json()
       return dispatch({ type: GET_DETAILS, payload: info })
    }        
 }

 export function postUser (payload){
     console.log('payloaduser:', payload)
  return async function (dispatch){
         try {                          
              const res = await axios.post(`${url}/postuser`, payload);
              console.log('respostUser', res)
              return res
          } catch (err) {
              return console.error('algo paso',err);
          }
              
      } 
   
   
} 

export function postCompra (payload){
    return async function (dispatch){
           try {                          
                const res = await axios.post(`${url}/postcompras`, payload);
                console.log('postcompras', res)
                return res
            } catch (err) {
                return console.error('algo paso',err);
            }
                
        } 
     
     
  } 

  export function getAllCompras (){
    return async function (dispatch){
           try {                          
                const res = await axios.get(`${url}/getallcompras`);
                
            } catch (err) {
                return console.error('algo paso',err);
            }
                
        } 
  } 

 

 export function getUser  (){
 return async function (dispatch){
    try {                       
        const res =  await  axios.get(`${url}/getuser`);
       
        return dispatch({ type: GET_USER, payload: res })
    } catch (err) {
        return console.error(err);
    }
 }
    
 } 

 export function getLinkPayment  (payload){
    return async function (dispatch){
       try {                       
           const res =  await  axios.post(`${url}/pagos`,payload);
        console.log('linkpayment', res)
        return dispatch({ type: LINK_PAYMENT, payload: res.data})
          
       } catch (err) {
           return console.error(err);
       }
    }
       
    } 


 export function addItem(value){
    
     return{
         type:ADD_ITEM_TO_CART,
         payload: value
     }
 }

 export function DeleteItem(value){
    
    return{
        type:DELETE_ITEM,
        payload: value
    }
}

export function resetCart(){
    return{
        type: CLEAR_STORAGE
    }
}




