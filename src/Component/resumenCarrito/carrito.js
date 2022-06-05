import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { postCompra, getAllCompras, DeleteItem } from "../../redux/actions";
import { BtnFinalizarCompra, Container, ContainerProduct, Flex, Img, MainContainer,FlexOptions, Title, ButtonItemDelete, ButtonVerCarrito, ArrowLeft, ContainerImg } from "./styles"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import CurrencyFormat from 'react-currency-format';



export default function ResumenCarrito (){

  const {isAuthenticated, user  } = useAuth0();
  
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  const ProcederAlPago = async () => {
      history.push('/formPago')
      
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
            
            <div>
               {
                  cart.length && cart.map((p, i)=> {
                    return(
                      <Container key={i}>
                         <ButtonItemDelete onClick={() => dispatch(DeleteItem(p.id))} />

                       <ContainerImg>
                       <Img src={`https://hit-pasta.herokuapp.com/${p.picture_url}`} alt='picture'/>
                        <h3 style={{color: '#ff595a'}}>{p.title}</h3>
                       </ContainerImg>

                        <ContainerProduct>
                        {
                          p.salsa && <Flex>
                          <h5 style={{margin: 0}}>SALSAS</h5>
                           <div style={{display: 'flex', flexDirection: 'column', margin: '0'}}>
                           {
                              p.salsa.map((i, index) => {
                                return(
                                  <FlexOptions key={index}>
                                    <h5 style={{margin: '0'}}>{i}</h5>
                                  </FlexOptions>
                                )
                              })
                            }
                           </div>
                          </Flex>
                        }
                        {
                          p.toppings && <Flex>
                          <h5 style={{margin: 0}}>TOPPINGS</h5>
                            <div style={{display: 'flex', flexDirection: 'column', margin: '0'}}>
                            {
                              p.toppings.map((i, index) => {
                                return(
                                  <FlexOptions key={index}>
                                    <h5 style={{margin: '0', }}>{i}</h5>
                                    {/* <h4 style={{margin: '0', }}>{p.priceTopping}</h4> */}
                                  </FlexOptions>
                                )
                              })
                            }
                            </div>
                          </Flex>
                        }
                         <div  style={{display: 'flex', margin: '0', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
                        <h5 style={{margin: 0}}>Cantidad</h5>
                        <h5 style={{margin: '0' }}>{p.quantity}</h5>
                        </div>
                        <Flex>
                          <h5 >SUBTOTAL</h5>
                          <h5> <CurrencyFormat fixedDecimalScale={true} value={p.unit_price * p.quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h5>
                        </Flex>
                        </ContainerProduct>
                      </Container>
                    )
                  })
                }
    
            </div>

           <Flex>
              <h4>TOTAL</h4>
              <h4><CurrencyFormat  fixedDecimalScale={true} value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
           </Flex>

           <div style={{display:'flex', width: '100%'}}>
           <BtnFinalizarCompra 
              onClick={ProcederAlPago} 
              disabled={!cart.length}>FINALIZAR COMPRA</BtnFinalizarCompra>
               <ButtonVerCarrito onClick={backToProducts}>ARMAR OTRO HIT</ButtonVerCarrito>
           </div>

        </MainContainer>
    )
}

