
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, DeleteItem } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { MainContainer, BoxOptions, BoxOptionsChild, Img, Buttons, P } from "./dessertStyles"
import {VscTrash} from 'react-icons/vsc'
import { Container, ContainerButtons, ContainerInfo, Title } from "./bebidasStyles";

export default function Dessert () {

  const products = useSelector(state => state.food)
 
    return(
        <MainContainer>
       
         <h3>ELIGE TUS POSTRES</h3>
         <BoxOptions>
         {
            products? products[0].dessert.dessert.map((p, i) => {
            
               return(
                <Card key={i} 
                img={`https://hit-pasta.herokuapp.com/${p.picture_url}`}
                product={p.title}
                price={products[0].dessert.dessertPrice}
                quantity={1}
                picture_url={p.picture_url}
                id={p.id}
                />
             )
         }): <Loading/>
        }
         </BoxOptions>

      </MainContainer>

    )
}

function Card({img, product, price, quantity, picture_url, id}){

  const dispatch = useDispatch()
  
  const cart = useSelector(state => state.cart)

  const [dessert, setDessert] = useState({
    title: product,
    quantity: quantity,
    unit_price: 0,
    id: id,
    picture_url
  })
 

    const ProductNumberIncrement = () => {
      setDessert(prev => ({...prev, quantity: dessert.quantity + 1 }))
      dispatch(addItem(dessert))
  }
    // const ProductNumberDecrement = () => {
    //   if(dessert.quantity === 0){
    //     setDessert(prev => ({...prev, quantity: 0 }))
    //   } else{
    //     setDessert(prev => ({...prev, quantity: dessert.quantity - 1 }))
    //   }
    // }

  //   const AddItemsToCart = () => {
  //     if(dessert.quantity){
  //      dispatch(addItem(dessert))
  //     }
  //   setDessert(prev => ({...prev,quantity: 0}))
  //  }

  const quantityInCart = cart && cart.find(p => p.id === id)
  const realQuantity  = quantityInCart? quantityInCart.quantity : 0

  
  const deleteItem = () => {
    dispatch(DeleteItem(id))
  }


  

  useEffect(() => {
    setDessert(prev => ({...prev, unit_price: 400}))
 
}, [dessert.quantity])

  return(
    <Container>
    <Img src={img}/>
   
   <ContainerInfo>

   <div>
   <Title>{product}</Title>
    <h4  style={{margin: '0', color: 'red'}}>${price}</h4>
   </div>

   <ContainerButtons>
     <Buttons onClick={deleteItem}><VscTrash  style={{width: '15px', height: '15px'}}/></Buttons>
     <Buttons>{realQuantity}</Buttons>
     <Buttons onClick={ProductNumberIncrement}>+</Buttons>
   </ContainerButtons>
  </ContainerInfo>
  
 
</Container>
  )
}