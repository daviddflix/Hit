
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import {  DeleteItem, addItemReview } from "../../redux/actions";
import { BtnFinalizarCompra,Options, ContainerButtons, Commentarios, Message,  DivSalsas,  Toppings, ContainerInfo2, OptionItems, ContainerProduct, Title, Img, Unitprice,  MainContainer, SubContainer, ButtonVerCarrito, ArrowLeft, ContainerInfo, ContainerTotal, H4 } from "./styles"
import CurrencyFormat from 'react-currency-format';
import {Buttons} from '../categories/bebidasStyles'
import {VscTrash} from 'react-icons/vsc'
import { useEffect, useState } from "react";



export default function ResumenCarrito (){

  const time = new Date().getHours()
  const closeStore = time > 12 && time < 23 ? false : true
  const [close, setClose] = useState(false)

  
  const cart = useSelector(state => state.cart);
  
  const history = useHistory();

  const ProcederAlPago = async () => {
    if(close === false){
      setClose(true)
    }
     if(closeStore === false){
      history.push('/formPago') 
    }
  }

  useEffect(() => {
    if(close === true){
      setTimeout(() => {
        setClose(false)
      }, 2000);
    }
  }, [close])


  const priceProduct = cart.map(p => p.unit_price * p.quantity)
  const total =   priceProduct.reduce((prev, curr) => {
   return prev + curr 
  }, 0)

  const backToProducts = () => {
    history.push('/')
 }
console.log(cart)


   
    return(
        <MainContainer>
        <ArrowLeft onClick={backToProducts}/>
            <h2 >TUS PRODUCTOS</h2>
            
           <ContainerProduct>
             {
               cart.length ? cart.map((p, i) => {
              
                 return(
                  <Card key={i} picture_url={`https://hitpastasssss.imgix.net${p.picture_url}?auto=compress`} 
                  product={p.title}
                  id={p.id}
                  unit_price={p.unit_price}
                  salsas={p.salsa && p.salsa.map((p, i) => <OptionItems key={i}>{ (i ? ' - ' : '') + p }</OptionItems>)}
                  toppings={p.toppings !== undefined && p.toppings.length > 0 ? p.toppings.map((p, i) => <OptionItems key={i}>{ (i ? ' - ' : '') + p }</OptionItems>) : ''}
                  Comments={p.Comments}
                  />
                 )
               }) : <h3>No hay productos en tu carrito</h3>
             }

           </ContainerProduct>

           {close === true? <Message>Lo sentimos, estamos cerrados</Message> : <></>} 
           <ContainerTotal>
              <h4>TOTAL</h4>
              <h4><CurrencyFormat  fixedDecimalScale={true} value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
           </ContainerTotal>

           <div style={{display:'flex', width: '100%', position: 'relative'}}>
           
           <BtnFinalizarCompra
              onClick={ProcederAlPago} 
              disabled={true}>FINALIZAR COMPRA</BtnFinalizarCompra>
               <ButtonVerCarrito onClick={backToProducts}>ARMAR OTRO HIT</ButtonVerCarrito>
           </div>

        </MainContainer>
    )
}




function Card({product, salsas, unit_price, toppings, picture_url, id, Comments}){

  const dispatch = useDispatch()
  
  const cart = useSelector(state => state.cart)


    const ProductNumberIncrement = () => {
      dispatch(addItemReview(id))
  }

  const quantityInCart = cart && cart.find(p => p.id === id)
  const realQuantity  = quantityInCart? quantityInCart.quantity : 0

  
  const deleteItem = () => {
    dispatch(DeleteItem(id))
  }



  return(
    <SubContainer>
    <div style={{height: '90%', width: '20%', position: 'relative', borderRadius: '50%' , overflow: 'hidden', display: 'flex', alignItems: 'center'}}>       
    <Img src={picture_url} alt='pasta'/>
   </div>
    
   
    <ContainerInfo>
   
    <ContainerInfo2>
    <Title>{product}</Title>
     
     
    {salsas && <Options>
      <H4>SALSAS</H4>
    <DivSalsas>{salsas}</DivSalsas>
    </Options>
    }
    
    {toppings ? <Options>
      <H4>EXTRA</H4>
   <Toppings>{toppings}</Toppings>
    </Options> : ''
    }

    {
     Comments && <Options>
        <H4>COMENTARIO</H4>
       <Commentarios>{Comments}</Commentarios>
     </Options> 
    }
    

     <Unitprice><CurrencyFormat  fixedDecimalScale={true} value={unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Unitprice>
    </ContainerInfo2>

    <ContainerButtons>
     <Buttons onClick={deleteItem}><VscTrash  style={{width: '15px', height: '15px'}}/></Buttons>
     <Buttons>{realQuantity}</Buttons>
     <Buttons onClick={ProductNumberIncrement}>+</Buttons>
   </ContainerButtons>
    
  </ContainerInfo>
  
 
</SubContainer>
  )
}

