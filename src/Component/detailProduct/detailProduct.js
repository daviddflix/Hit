import {  useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import {  addItemDetail, getDetail } from "../../redux/actions"
import { BoxComentario, BoxTitleAndPhoto, MainBoxBtns, ContainerOption, BtnArmarOtroHit, Description, BoxTitleAndPhoto2Child, LabelProductName, ContainerOptionChild, Form, InputOptions, MainBoxComentario, MainContainer, PhotoProduct, Like, ProductName, Okay, CartIcon, Drop } from "./styles"
import Loading from "../spinner/spinner"
import { motion } from "framer-motion/dist/framer-motion"
import OrderContext from "../context/orderContext"
import {v4 as uuidv4} from 'uuid'



export default function DetailProduct(){
 
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    
     const detail = useSelector(state => state.detail)// details of the products
     const {options, setOptions} = useContext(OrderContext);
     

      const BackToProducts = () => {
         if(options.salsa.length){
          dispatch(addItemDetail(options))
          setOptions({
            toppings: [],
  salsa: [],
  priceTopping: null,
  id: '',
  title: '',
  price: '',
  picture_url: '',
  Comments: '',
  unit_price: 0,
  quantity: 1,
          })
         } 
           history.push('/productos')
         
      }

      const seeCart = () => {
          if(options.salsa.length){
            dispatch(addItemDetail(options))
            setOptions({
              toppings: [],
    salsa: [],
    priceTopping: null,
    id: '',
    title: '',
    price: '',
    picture_url: '',
    Comments: '',
    unit_price: 0,
    quantity: 1,
            })
           } 
             history.push('/carrito')
           
      }
     

      const handleComments = (e) => {
        setOptions(prev => ({
          ...prev, Comments:  e.target.value}))
      }
      
      const handleSalsa = (e) => {
      
         const {name, checked} = e.target
           
        if (checked === true){
        options.salsa.length <=1 && setOptions(prev => ({
            ...prev, salsa: [...prev.salsa, name], picture_url: detail.picture_url, 
            id: uuidv4(), price: detail.price, title: detail.title
          }))
        }

        if(options.salsa.length >= 2){
          e.target.checked = false
        }
        

         if(checked === false){
           setOptions(prev => ({
             ...prev, salsa: prev.salsa.filter(p => p !== name)
           }))
         }
      }    

      const handleToppings = async (e) => {

        const{name, checked} = e.target

        if(checked === true){
          setOptions({...options, toppings: [...options.toppings, name]})
        }

        if(checked === false){
          setOptions(prev => ({
            ...prev, toppings: prev.toppings.filter(p => p !== name)
          }))
        }
      }

      useEffect(() => {   // useEffect to update the total amount

      const productPrice = options.price // price of the single product
      const toppingPrice = options.priceTopping // price of the topping
     
          const total = toppingPrice? productPrice + toppingPrice : productPrice

          setOptions(prev => ({...prev, unit_price: total})) // set total amount product plus toppings
         
      }, [options.price, options.priceTopping, setOptions])
     

      useEffect(() => {  // useEffect to update total amount of the toppings
          const numberOfToppings = options.toppings.length 
          const totalPriceTopping = numberOfToppings !== 0? numberOfToppings * 119 : 0
         
          setOptions(prev => ({...prev, priceTopping: totalPriceTopping }))
          
        
      }, [options.toppings, setOptions])


  
    
    return(
        <MainContainer as={motion.div}  initial={{width: 0, opacity: 0, transition: {duration: '0.1'}}}  animate={{width: '100%', opacity: 1}} exit={{x: window.innerWidth, opacity: 0}}>
           
           {
            detail.picture_url?  <PhotoProduct  src={`https://hit-pasta.herokuapp.com/${detail.picture_url}`}/> : <Loading/>
           }
          <Like onClick={() => {history.push('/productos')}}/>
        
           
            <Form>
               <ContainerOption>
             <BoxTitleAndPhoto>
              <div>
              <h3 style={{marginTop: '1rem'}}>Salsas</h3>
               <h4 style={{margin: '0'}}>selecciona maximo 2</h4>
              </div>
               <ProductName>{detail.title}</ProductName>
             </BoxTitleAndPhoto>
             
                {
                     detail && detail?.salsas?.map((p, index) => {
                        return(
                            <ContainerOptionChild key={index}>
                             <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                                 <Drop />
                                 <LabelProductName >{p.sauce}</LabelProductName>
                            
                             </div>
                                <InputOptions type='checkbox'  checked={options.salsa.index} key={index} name={p.sauce}  value={p.sauce} onChange={handleSalsa}/>
                                <Description>{p.description}</Description>
                            </ContainerOptionChild>
                        )
                    })
                }
               </ContainerOption>

                <ContainerOption>
               
                 <BoxTitleAndPhoto2Child>
                <div>
                <h3 style={{fontWeight: '900'}}>Toppings</h3>
                <h4 style={{margin: '7px'}}>Podes seleccionar todos las quieras</h4>
                </div>
                 </BoxTitleAndPhoto2Child>
                
               
                {
                     detail && detail?.toppings?.option?.map(p => {
                        return(
                            <ContainerOptionChild  key={p}>
                                 <LabelProductName>{p}</LabelProductName>
                                  <label style={{marginLeft: '2rem'}}>${detail.toppings.price}</label>
                                 <InputOptions type='checkbox' name={p} checked={options.toppings.index} key={p}  value={p} onChange={handleToppings}/>
                            </ContainerOptionChild>
                        )
                    })
                }
                
                </ContainerOption> 
                 
            </Form>

            <MainBoxComentario>
              <h3>Comentarios</h3>
              <BoxComentario type='text' value={options.Comments} onChange={handleComments} placeholder="Agrega instrucciones o comentarios a tu orden"/>
            </MainBoxComentario>

            <MainBoxBtns>
           
           <Okay onClick={seeCart} >OKAY <CartIcon /></Okay>
           <BtnArmarOtroHit onClick={BackToProducts}>ARMAR OTRO HIT</BtnArmarOtroHit>  
          </MainBoxBtns> 

           
      
        
                   
        
         
           


        </MainContainer>
    )
}