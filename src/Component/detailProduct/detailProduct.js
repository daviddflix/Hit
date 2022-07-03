import {  useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import {  addItemDetail, getDetail } from "../../redux/actions"
import { BoxComentario, BoxTitleAndPhoto, MainBoxBtns, ContainerOption, Popup, BtnArmarOtroHit, Description, BoxTitleAndPhoto2Child, LabelProductName as label, ContainerOptionChild, Form, InputOptions, MainBoxComentario, MainContainer, PhotoProduct, Like, ProductName, Okay, CartIcon, Drop, ImageSauce } from "./styles"
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
           
           
             <div style={{height: '350px', width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '0 0 10px 10px'}}>
              <PhotoProduct  src={detail.picture_url}/> 
            </div> 
            <Like onClick={() => {history.push('/')}}/>
        
           
            <Form>
            <BoxTitleAndPhoto>
             
             <h3 style={{marginTop: '1rem'}}>Salsas</h3>
              <h4 style={{margin: '0'}}>selecciona maximo 2</h4>
              <ProductName>{detail.title}</ProductName>
            
            </BoxTitleAndPhoto>
              <ContainerOption>
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
                          image={p.img}
                          />
                        
                        )
                    })
                }
               </ContainerOption>

               <BoxTitleAndPhoto2Child>
                <div>
                <h3 style={{fontWeight: '900'}}>Toppings</h3>
                <h4 style={{margin: '2px'}}>Podes seleccionar todos las que quieras</h4>
                </div>
                 </BoxTitleAndPhoto2Child>

                <ContainerOption>
                {
                     detail && detail?.toppings?.option?.map(p => {
                        return(
                            <ContainerOptionChild  key={p}>
                                 <label style={{width: '40%'}} htmlFor={p}>{p}</label>
                                  <label style={{width: '30%'}}>${detail.toppings.price}</label>
                                 <InputOptions type='checkbox' id={p} name={p} checked={options.toppings.index} key={p}  value={p} onChange={handleToppings}/>
                            </ContainerOptionChild>
                        )
                    })
                }
                </ContainerOption> 
                 
            </Form>

            <MainBoxComentario>
              <h3 style={{color: '#282828'}}>Comentarios</h3>
              <BoxComentario type='text' value={options.Comments} onChange={handleComments} placeholder="Agrega instrucciones o comentarios a tu orden"/>
            </MainBoxComentario>

            <MainBoxBtns>
           <Okay onClick={seeCart} >OKAY <CartIcon /></Okay>
           <BtnArmarOtroHit onClick={BackToProducts}>ARMAR OTRO HIT</BtnArmarOtroHit>  
          </MainBoxBtns> 

           
      
        
                   
        
         
           


        </MainContainer>
    )



}


function Card ({sauce, description, picture_url, title, price, image}){

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
       <div style={{height: '50%', width: '10%', position: 'relative', borderRadius: '50%' , overflow: 'hidden', display: 'flex', alignItems: 'center'}}>       
       <ImageSauce src={image} alt='salsa' loading="lazy"/>
      </div> 
     
     <div  style={{display: 'flex', width: '70%', flexDirection: 'column', marginLeft: '1rem'}}>
        <label htmlFor={sauce}>{sauce}</label>
        {message === true? <Popup>Maximo alcanzado</Popup> :<></>}
       <Description>{description}</Description>
    </div>

    <div  style={{display: 'flex', width: '10%'}}>
    <InputOptions type='checkbox' id={sauce}  checked={options.salsa.index}  name={sauce}  value={sauce} onChange={handleSalsa}/>
    </div>
   </ContainerOptionChild>
  )
}