import styled from 'styled-components';
import {RiArrowLeftSLine} from 'react-icons/ri'
import {IoCartOutline} from 'react-icons/io5'
import {BiDroplet} from 'react-icons/bi'


export const MainContainer = styled.div`


        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
        color: '#fff'

`;

export const Form = styled.form`
 
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 50px 50px 0 0;
        z-index: 10;
        background-color: #f5f7f8;
        position: relative;
        bottom: 2.5rem;
        text-align: left;
       
`;


export const Input = styled.input`
        height: 100vh;
        width: 100%;

@media screen and (max-width:900px){
        height: 30px;
        width: 100%;
      
       
}
`;

export const ContainerOption = styled.div`

         display: flex;
         flex-direction: column;
         align-items: center;
         width: 100%;
         position: relative;
        
 
`;

export const ContainerOptionChild = styled.div`

        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        height: 70px;
        width: 95%;
        margin: 0 .5rem 0 .5rem;
`;

export const InputOptions = styled.input`

        height: 24px;
        width: 24px;
        position: relative;
        right: 1.5rem;
        bottom: .5rem;
       
        
       
`;


export const ImageSauce = styled.img`
border-radius: 50%;
width: 100%;
height: 100%;
transform: scale(3);
`;

export const ImageSauceTopping = styled.img`
border-radius: 50%;
width: 100%;
height: 100%;
transform: scale(3);
`;




export const BoxTitleAndPhoto = styled.div`

  
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 2rem; 
        color: #ff595a;
        position: relative;     
   

`;

export const BoxTitleAndPhoto2Child = styled.div`
 
        width: 100%;
        display: flex;
        align-items: flex-start;
        padding-left: 2rem; 
        color: #ff595a;
        
   

`;

export const MainBoxComentario = styled.div`
  
         width: 90%;
          margin-bottom: 2rem;
         display: flex;
        flex-direction: column;
         align-items: center; 
       
   

`;

export const BoxComentario = styled.textarea`

        padding: 30px;
        width: 100%;
        height: 8rem;
        background-color: #e5e5e5;
        border: 0;
        font-family: 'Roboto', sans-serif;
        font-size: .9rem;
       font-weight: 800;
         
 
`;

export const MainBoxBtns = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

export const Okay = styled.button`

        background-color: #29d884;
        color: #fff;
        border: none;
       
        width: 120px;
        height: 40px;
        padding: 15px 25px;
        margin-bottom: 5rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        
         
 
`;

export const BtnArmarOtroHit = styled.button`

        background-color: #29d884;
        color: #fff;
        border: none;
        margin-left: 2rem;
        width: 50%;
        height: 40px;
        padding: 15px 25px;
        margin-bottom: 5rem;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
         
 
`;

export const PhotoProduct = styled.img`
         width: 100%;
        height: 350px;
        border-radius: 0 0 10px 10px;
        margin: 0;
        position: relative;
        transform: scale(3);
`;

export const Popup = styled.label`
position: absolute;
right: 5rem;
top: 10px;
color: red;
outline: 1px solid red;
padding: 5px;
border-radius: 5px;
`;


export const LabelProductName = styled.label`

     width: 60%;
     
 
`;

export const Like = styled(RiArrowLeftSLine)`
   
  
    position: absolute;
    top: 4.5rem;
    left: 1rem;
    color: #282828;
    width: 32px;
    height: 32px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.3);
    
   

`;

export const ProductName = styled.h3`

   Background-color: #f5f7f8;
   color: #ff595a;
   border-radius: 50px;
   padding: 15px 20px;
   position: absolute;
   top: -2.6rem;
   right: 3rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   
`;


export const CartIcon = styled(IoCartOutline)`
@media screen and (max-width:900px){
        width: 22px;
        height: 22px;
       
        color: #fff;
        border-radius: 50%;
        margin-left: .5rem;
        z-index: 10;
}
`;

export const Drop = styled(BiDroplet)`
@media screen and (max-width:900px){
        width: 22px;
        height: 22px;
       
        color: #ff595a;
        border-radius: 50%;
        margin-right: .8rem;
        z-index: 10;
}
`;


export const Description = styled.p`
        font-size: 13px;
        margin: 0;
        width: 100%;
        height: 20px;
`;




