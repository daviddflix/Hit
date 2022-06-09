import styled from 'styled-components';
import {BiTrashAlt} from 'react-icons/bi'
import {RiArrowLeftSLine} from 'react-icons/ri'

export const MainContainer = styled.div`
@media screen and (max-width: 900px){
 min-height: 100vh;
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
  width: 20%;
  height: 90%;
  border-radius: 10px;
} 
`; 



export const ContainerProduct = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 margin: 1rem;
 width: 90%

}
`;

export const SubContainer = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 align-items: center;
 margin:1rem;
 position: relative;
 width: 100%;
 justify-content: space-around;
 border-bottom: 1px solid rgba(99, 99, 99, 0.2);
}
`;

export const ContainerInfo = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 1rem;
`

export const ContainerInfo2 = styled.div`
  display: flex;
  width: 100%;
  align-items:flex-start;
  flex-direction: column;
  margin: 0;
`;

export const ContainerButtons = styled.div`
@media screen and (max-width:900px){
  
    border-radius: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 50%;
    height: 35px;
    display: flex;
    align-items: center;
 
}
`;

export const BtnFinalizarCompra = styled.button`
@media screen and (max-width: 900px){

       
        background-color: #29d884;
        color: #fff;
        border: none;
        margin-left: 2rem;
        width: 40%;
        height: 40px;
        padding: 10px;
        margin-bottom: 5rem;
        border-radius: 10px;
}
`;

export const ButtonVerCarrito = styled.button`
 @media screen and (max-width: 900px) {
        background-color: #29d884;
        color: #fff;
        border: none;
        margin-left: 1rem;
        width: 40%;
        margin-bottom: 5rem;
        border-radius: 10px;
        height: 40px;
         
 }
`;

export const Title = styled.h4`
@media screen and (max-width: 900px){
color: black;
margin :0;
font-size: 11px;
display:block;

}
`;

export const ContainerTotal = styled.div`
@media screen and (max-width: 900px){
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  
}
`;

export const Options = styled.div`
@media screen and (max-width: 900px){
  display: flex;
  align-items: center;
  margin: 5px;
  font-size: 12px;
  width: 100%;
  flex-wrap: wrap;
  
}
`;

export const OptionItems = styled.h4`
@media screen and (max-width: 900px){
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  margin-right: 5px;
  font-size: 12px;  
 
}
`;



export const Unitprice = styled.h4`
@media screen and (max-width: 900px){
 margin-bottom: 5px;
 margin-top: 0;
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


