import { MainContainer, TextoSlide,  Text, ButtonAddToCart, ArrowLeft, ArrowRight } from "./styles";
import { CarouselProvider, Slider, Slide,  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, {  useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getProduct} from '../../redux/actions'
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';
import Rating from '@mui/material/Rating';
import Loading from '../spinner/spinner'
import { NavLink } from "react-router-dom";


 const CarouselProduct = () =>{
    
   
    const [value, setValue] = useState(5);
   

  

    
    const dispatch = useDispatch()
    const product = useSelector(state => state.food)

   const media = window.matchMedia('(max-width: 900px)')
  

    useEffect(() => {
       
        const data = async () => {
            dispatch(getProduct())
        }
        
        data()
         
    }, [dispatch])

    return( 
         <MainContainer >
             <div style={{ color: '#000000', width: '100%'}}>
             <h3>Nuestros productos</h3>
             <h4>Podes elegir una pasta y dos salsas a elección</h4>
             </div>
        
            {
                media.matches === true?  <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={143}
                totalSlides={6}
                isPlaying={false}
                hasMasterSpinner={product? false : true}
                infinite={true}
               
            >
                <Slider>
                      {
                        product? product?.map((p, i)=> {
                             return(
                                <NavLink key={i} to={`detail/${p.id}`}>
                              <Slide index={p.id} key={p.id}>
                        {product.length?  
                               <img style={{height: '350px', width: '95%', borderRadius:'5px'}} src={`https://hit-pasta.herokuapp.com${p.picture_url}`} alt="Img"/>
                           : <Loading/>}
                           
                            <TextoSlide >
                            <Text>{p.title}</Text>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                            />
                             <Text>${p.price}</Text>
                             <ButtonAddToCart  to={`detail/${p.id}`}>ARMA TU HIT</ButtonAddToCart>
                        </TextoSlide>
                        </Slide>
                        </NavLink>
                             )
                          }): <Loading/>
                        }
                </Slider>
               <ArrowLeft><IoIosArrowBack style={{width: '22px', height: '22px'}}/></ArrowLeft>
               <ArrowRight><IoIosArrowForward style={{width: '22px', height: '22px'}}/></ArrowRight>
            </CarouselProvider> :  <Loading/>
            }
                </MainContainer>

)
}

export default CarouselProduct






 