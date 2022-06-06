import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { getAllCompras, DeleteItem, addItemReview } from "../../redux/actions";
import { BtnFinalizarCompra,Options, ContainerInfo2, OptionItems, ContainerProduct, Title, Img, Unitprice,  MainContainer, SubContainer, ButtonVerCarrito, ArrowLeft, ContainerInfo, ContainerTotal } from "./styles"
import { useAuth0} from "@auth0/auth0-react";
import CurrencyFormat from 'react-currency-format';
import {Buttons, ContainerButtons} from '../categories/bebidasStyles'
import {VscTrash} from 'react-icons/vsc'


export default function ResumenCarrito (){

  const {isAuthenticated , loginWithRedirect } = useAuth0();
  
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  const ProcederAlPago = async () => {
     if(isAuthenticated){
      history.push('/formPago')
     } else {
       loginWithRedirect()
     }
      
  }

  useEffect(() => {
    dispatch(getAllCompras())
  }, [ dispatch])

  const priceProduct = cart.map(p => p.unit_price * p.quantity)
  const total =   priceProduct.reduce((prev, curr) => {
   return prev + curr 
  }, 0)

  const backToProducts = () => {
    history.push('/productos')
 }



   
    return(
        <MainContainer>
        <ArrowLeft onClick={backToProducts}/>
            <h2 >TUS PRODUCTOS</h2>
            
           <ContainerProduct>
             {
               cart && cart.map((p, i) => {
                 return(
                  <Card key={i} picture_url={`https://hit-pasta.herokuapp.com/${p.picture_url}`} 
                  product={p.title}
                  id={p.id}
                  unit_price={p.unit_price}
                  salsas={p.salsa && p.salsa.map((p, i) => <OptionItems key={i}>{p}</OptionItems>)}
                  toppings={p.toppings && p.toppings.map((p, i) => <OptionItems key={i}>{p}</OptionItems>)}
                  />
                 )
               })
             }

           </ContainerProduct>

           <ContainerTotal>
              <h4>TOTAL</h4>
              <h4><CurrencyFormat  fixedDecimalScale={true} value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
           </ContainerTotal>

           <div style={{display:'flex', width: '100%'}}>
           <BtnFinalizarCompra 
              onClick={ProcederAlPago} 
              disabled={!cart.length}>FINALIZAR COMPRA</BtnFinalizarCompra>
               <ButtonVerCarrito onClick={backToProducts}>ARMAR OTRO HIT</ButtonVerCarrito>
           </div>

        </MainContainer>
    )
}




function Card({product, salsas, unit_price, toppings, picture_url, id}){

  const dispatch = useDispatch()
  
  const cart = useSelector(state => state.cart)
console.log('cart', cart)

    const ProductNumberIncrement = () => {
      dispatch(addItemReview(id))
  }

  const quantityInCart = cart && cart.find(p => p.id === id)
  const realQuantity  = quantityInCart? quantityInCart.quantity : 0

  
  const deleteItem = () => {
    dispatch(DeleteItem(id))
  }

//   useEffect(() => {
//     setDessert(prev => ({...prev, unit_price: 400}))
 
// }, [dessert.quantity])

  return(
    <SubContainer>
    <Img src={picture_url}/>
   
    <ContainerInfo>
   
    <ContainerInfo2>
    <Title>{product}</Title>
     
     <Options>
     {salsas}
     </Options>
     <Options>
     {toppings}
     </Options>
   

    </ContainerInfo2>
     <Unitprice><CurrencyFormat  fixedDecimalScale={true} value={unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Unitprice>
   <ContainerButtons>
     <Buttons onClick={deleteItem}><VscTrash  style={{width: '15px', height: '15px'}}/></Buttons>
     <Buttons>{realQuantity}</Buttons>
     <Buttons onClick={ProductNumberIncrement}>+</Buttons>
   </ContainerButtons>
  </ContainerInfo>
  
 
</SubContainer>
  )
}

