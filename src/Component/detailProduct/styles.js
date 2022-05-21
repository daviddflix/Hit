import styled from 'styled-components';
import {RiArrowLeftSLine} from 'react-icons/ri'
import {IoCartOutline} from 'react-icons/io5'
import {BiDroplet} from 'react-icons/bi'


export const MainContainer = styled.div`

 width: 100%;


@media screen and (max-width:900px){
        /* height: 100vh; */
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
       text-align: left;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
        background-color: #fbfcfc;
        
       
}
`;

export const Form = styled.form`
 
        width: 100%;


@media screen and (max-width:900px){
        
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 50px 50px 0 0;
       
        z-index: 10;
        background-color: #fff;
        
}
`;


export const Input = styled.input`
        height: 100vh;
        width: 100%;

@media screen and (max-width:600px){
        height: 30px;
        width: 100%;
      
       
}
`;

export const ContainerOption = styled.div`
 
 @media screen and (max-width: 600px){
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         width: 100%;
         position: relative;
        
 }
`;

export const ContainerOptionChild = styled.div`
 @media screen and (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(3, 2fr);
        grid-column-gap: 1rem;
        justify-content: center;
        align-content: center;
        padding: 15px;
        width: 90%;
        height: 70px;
        position: relative;
        // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-top: none;
        background-color: #fff;
        // border-radius: 10px;
        border-bottom: 1px solid #f5f6f8;
        position: relative;
        left: 1rem;
        
 }
`;

export const InputOptions = styled.input`
 @media screen and (max-width: 600px) {
        height: 24px;
        border: none;
        width: 24px;
         position: absolute;
        left: 19rem;
       
        top: 1.2rem; 
       
         
 }
`;

export const MainBoxComentario = styled.div`

   @media screen and (max-width: 600px) {
        width: 90vw;
         
        margin-bottom: 2rem;
         display: flex;
        flex-direction: column;
        align-items: center; 
       
   }

`;



export const BoxTitleAndPhoto = styled.div`

   @media screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        align-items: flex-start;
        padding-left: 4rem; 
        color: #ff595a;
       z-index: 10; 
       position: relative;     
   }

`;

export const BoxTitleAndPhoto2Child = styled.div`

   @media screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        align-items: flex-start;
        padding-left: 2rem; 
        color: #ff595a;
      z-index: 10;      
   }

`;


export const BoxComentario = styled.textarea`
 @media screen and (max-width: 900px) {
        padding: 30px;
        width: 100%;
        height: 8rem;
        background-color: #e5e5e5;
        border: 0;
        font-family: 'Roboto', sans-serif;
        font-size: .9rem;
       font-weight: 800;
         
 }
`;

export const Okay = styled.button`
 @media screen and (max-width: 900px) {
        padding: 20px 30px;
        margin-bottom: 2rem;
        background-color: #282828;
        color: #fff;
        border: none;
        margin-left: 1rem;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
       
        align-items: center;
         
 }
`;

export const BtnArmarOtroHit = styled.button`
 @media screen and (max-width: 900px) {
        padding: 20px 30px;
        margin-bottom: 2rem;
        background-color: #282828;
        color: #fff;
        border: none;
        margin-left: 1rem;
        border-radius: 5px;
        cursor: pointer;
        z-index: 10;
         
 }
`;

export const PhotoProduct = styled.img`
 @media screen and (max-width: 900px) {
        width: 100%;
        height: 350px;
        border-radius: 0 0 10px 10px;
        
        
 }
`;


export const LabelProductName = styled.label`
 @media screen and (max-width: 900px) {
        width: 150px;
        ;
     &::first-line{
             border: none;
     }

 }
`;

export const Like = styled(RiArrowLeftSLine)`
   

@media screen and (max-width:900px){
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: #ff595a;
  
    width: 32px;
    height: 32px;
    
   
}
`;

export const ProductName = styled.h3`
   

@media screen and (max-width:900px){
   background-color: #fff;
   color: #282828;
   border-radius: 50px;
   padding: 15px 20px;
   position: absolute;
   top: -2.6rem;
   left: 15rem;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   
   
}
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
@media screen and (max-width:900px){
        position: absolute;
        width: 80%;
        bottom: -.5rem;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        left: 3.2rem;
}
`;




