import styled from 'styled-components';
import img from '../carousel/image/spaguetti 1500x.jpg';
import {BiTrashAlt} from 'react-icons/bi'
import {RiArrowLeftSLine} from 'react-icons/ri'

export const MainContainer = styled.div`
@media screen and (max-width: 900px){
 min-height: 70vh;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 background-color: #f3fbfb;
 margin-top: 60px;
 position: relative;
}
`;

export const Img = styled.img`
@media screen and (max-width: 900px){
  
  width: 100%;
  height: 60%;
  border-radius: 10px;
} 
`; 

export const Container = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: row;
 align-items: center;
 margin:1rem;
 position: relative;
 width: 90%;
 justify-content: center;
 border-bottom: 1px solid rgba(99, 99, 99, 0.2);


}
`;

export const ContainerProduct = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 0;
 width: 70%

}
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 1rem;
`

export const BtnFinalizarCompra = styled.button`
@media screen and (max-width: 900px){

  padding: 20px 30px;
        font-size: 11px;
        background-color: #282828;
        color: #fff;
        border: none;
        margin-left: 2rem;
        width: 40%;
        margin-bottom: 5rem;
        border-radius: 10px;
}
`;

export const ButtonVerCarrito = styled.button`
 @media screen and (max-width: 900px) {
        background-color: #282828;
        color: #fff;
        border: none;
        margin-left: 1rem;
        width: 40%;
        margin-bottom: 5rem;
        border-radius: 10px;
        font-size: 11px;
         
 }
`;

export const Title = styled.img`
@media screen and (max-width: 900px){

  background-image:url(${img}) ;
  width: 100%;
  height: 100px;
}
`;

export const Flex = styled.div`
@media screen and (max-width: 900px){

  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0;
  
}
`;

export const FlexOptions = styled.div`
@media screen and (max-width: 900px){

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
 
  margin: 0;
}
`;

export const ButtonItemDelete = styled(BiTrashAlt)`
    

    @media screen and (max-width: 900px){
     position: absolute;
     top: -12px;
     right: 0;
     border: none;
     margin-top: .8rem;
     width: 25px;
     height: 25px;
     padding: 4px;
     box-shadow:  6px 6px 12px #bebebe,
             -6px -6px 12px #ffffff;
    border-radius: 0 10px 0 10px;
   
    color: #282828;
   
    
   } 
`; 


export const ArrowLeft = styled(RiArrowLeftSLine)`
position: absolute;
left: 1rem;
top: 1rem;
width: 32px;
height: 32px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;

`


