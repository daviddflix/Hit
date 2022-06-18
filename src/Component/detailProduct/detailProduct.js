import {  useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import {  addItemDetail, getDetail } from "../../redux/actions"
import { BoxComentario, BoxTitleAndPhoto, MainBoxBtns, ContainerOption, Popup, BtnArmarOtroHit, Description, BoxTitleAndPhoto2Child, LabelProductName, ContainerOptionChild, Form, InputOptions, MainBoxComentario, MainContainer, PhotoProduct, Like, ProductName, Okay, CartIcon, Drop } from "./styles"
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
           history.push('/')
         
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
          const totalPriceTopping = numberOfToppings !== 0? numberOfToppings * 122 : 0
         
          setOptions(prev => ({...prev, priceTopping: totalPriceTopping }))
          
        
      }, [options.toppings, setOptions])


  
    
    return(
        <MainContainer as={motion.div}  initial={{width: 0, opacity: 0, transition: {duration: '0.1'}}}  animate={{width: '100%', opacity: 1}} exit={{x: window.innerWidth, opacity: 0}}>
           
           {
            detail.picture_url?  <PhotoProduct  src={`https://hit-pasta.herokuapp.com/${detail.picture_url}`}/> : <Loading/>
           }
          <Like onClick={() => {history.push('/')}}/>
        
           
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
                           <Card
                           key={index}
                           description={p.description}
                           sauce={p.sauce}
                           picture_url={detail.picture_url}
                           price={detail.price}
                           title={detail.title}
                           />
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
                                 <LabelProductName htmlFor={p}>{p}</LabelProductName>
                                  <label style={{marginLeft: '2rem'}}>${detail.toppings.price}</label>
                                 <InputOptions type='checkbox' id={p} name={p} checked={options.toppings.index} key={p}  value={p} onChange={handleToppings}/>
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


function Card ({sauce, description, picture_url, title, price}){

  const {options, setOptions} = useContext(OrderContext);

  const [message, setMessage] = useState(false)
  

      useEffect(() => {
        setTimeout(() => {
          setMessage(false)
        }, 2000);
      }, [message])

    

  const handleSalsa = (e) => {
      
    const {name, checked} = e.target
      
   if (checked === true){
   options.salsa.length <=1 ? setOptions(prev => ({
       ...prev, salsa: [...prev.salsa, name], picture_url: picture_url, 
       id: uuidv4(), price: price, title: title
     })) : setMessage(true)
   }
   
   if(options.salsa.length >= 2){
     e.target.checked = false
    
   }

   
   

    if(checked === false){
      setMessage(false)
      setOptions(prev => ({
        ...prev, salsa: prev.salsa.filter(p => p !== name)
      }))
    }
 }    

  return(
    <ContainerOptionChild >
    <div  style={{display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
        <Drop />
        <LabelProductName htmlFor={sauce}>{sauce}</LabelProductName>
        {message === true? <Popup>Maximo alcanzado</Popup> :<></>}
       <Description>{description}</Description>
    </div>
       <InputOptions type='checkbox' id={sauce}  checked={options.salsa.index}  name={sauce}  value={sauce} onChange={handleSalsa}/>
   </ContainerOptionChild>
  )
}