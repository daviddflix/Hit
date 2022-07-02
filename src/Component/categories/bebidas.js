import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, DeleteItem, getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { ContainerInfo, Img, MainContainer, Title,SubTitle ,Container, Buttons,ContainerButtons, CardContainer } from "./bebidasStyles";
import {AiOutlinePlus} from 'react-icons/ai'
import {VscTrash} from 'react-icons/vsc'

export default function Drinks(){

    const productos = useSelector(state => state.food)


    const ItemWithAlcohol = productos[0].beverages.slice(0,5)
    const ItemWithoutAlcohol = productos[0].beverages.slice(6, 10)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <MainContainer>
           <h3 >ELIGE TUS BEBIDAS</h3>
           <SubTitle>Bebidas Sin Alcohol</SubTitle>
           <CardContainer>
           {
              productos? ItemWithAlcohol.map((p, i) => {
                 return(
                  <Card key={i} product={p.title} price={p.price} id={p.id} quantity={1} picture_url={p.picture_url}/>
                 
                 )
               }): <Loading/>
           }
           </CardContainer>
           <SubTitle>Bebidas Con Alcohol</SubTitle>
           <CardContainer>
               {
                    productos.length? ItemWithoutAlcohol.map((p, i) => {
                        return(
                         <Card key={i} product={p.title} price={p.price} id={p.id} quantity={1} picture_url={p.picture_url}/>
                        
                        )
                      }): <Loading/>
               }
           </CardContainer>
        </MainContainer>
    )
}





function Card ({ product, price, quantity, picture_url, id}) {

    const dispatch = useDispatch()

    const productos = useSelector(state => state.food)
    const cart = useSelector(state => state.cart)
   
    const quantityInCart = cart && cart.find(p => p.id === id)
    const realQuantity  = quantityInCart? quantityInCart.quantity : 0
   

    const [drinks, setDrinks] = useState({
        title: product, 
        quantity: quantity,
        unit_price: 0,
        id: id,
        picture_url
    })

  
    const ProductNumberIncrement = () => {
        setDrinks(prev => ({...prev, quantity: drinks.quantity + 1  }))
        dispatch(addItem(drinks))
           
    }
   

      const deleteItem = () => {
        dispatch(DeleteItem(id))
      }
  
    
    useEffect(() => {
        const item = productos[0].beverages.filter(p => p.title===drinks.title)
        const price = item.map(p => p.price)
    
        setDrinks(prev => ({...prev, unit_price:price[0]}))
   
  }, [drinks.quantity, drinks.title, productos])
  

    return(
        <Container>
        <Img src={picture_url} />

       <ContainerInfo >
           <Title>{product}</Title>
          
           <h4 style={{margin: '0', color: 'red'}}>${price}</h4>

                <ContainerButtons>
                  <Buttons  onClick={deleteItem}><VscTrash  style={{width: '15px', height: '15px'}}/></Buttons>
                   
                  <Buttons defaultValue={0}>{realQuantity}</Buttons>
                  <Buttons onClick={ProductNumberIncrement}><AiOutlinePlus style={{width: '20px', height: '20px'}}/></Buttons>
               </ContainerButtons>

       </ContainerInfo>
       
   </Container>
    )
}