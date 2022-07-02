import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";
import {BsHeart} from 'react-icons/bs'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'

export const MainContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;

@media screen and (max-width:900px){
    
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
   
}
`;

export const Img = styled.img`
        transform: scale(3);
        width: 100%;
        height: 100%;
        border-radius: 5px;
`;

export const Container = styled.div`
   
@media screen and (max-width:900px){
   
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    
      
}
`;

export const NavLink = styled(Link)`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 95%;
    border-radius: 5px;
  
`;


export const ContainerInfo = styled.div`
   

   
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
    width: 70%;
   

`;




export const Title = styled.h2`
   

@media screen and (max-width:900px){
    color: black;
    font-size: 1rem;
   margin-top: 1rem;
}
`;

export const Heart = styled(BsHeart)`
   

@media screen and (max-width:900px){
 
  
    color: #ff595a;

    :hover{
       color: red;
    }

    :active{
        color: red;
    }
   
   
}
`;

export const ContainerHeart = styled.div`
   

@media screen and (max-width:900px){
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    border-radius: 50%;
    padding: 5px;
    border: 2px solid #ff595a;
    background-color: #fff;
    width: 28px;
    height: 28px; 
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

export const Menu = styled.div`
   

@media screen and (max-width:900px){
    transition: .5s ease;
    width: 100%;
    border-radius: 0 0 10px 10px;
   
}
`;

export const Ul = styled.ul`
   

@media screen and (max-width:900px){
    display: flex;
    justify-content:center;
    align-items: center;
    text-decoration: none;
    position: relative;
    right: 1.5rem;
    width: 100%;
}
`;

export const Li = styled.input`
   

@media screen and (max-width:900px){
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    margin-left: 1rem;
     width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    background-color: transparent; 

    &:hover{
      border-bottom: 2px solid #282828;
      color: #fff;
    }

 

}
`;

export const ArrowGo = styled(BsFillArrowRightSquareFill)`
@media screen and (max-width:900px){
     position: absolute;
    color: #282828;
    bottom: 5px;
    right: 5px;
    width: 26px;
    height: 25px;
    pointer-events: none;
   
}
`;

export const BtnGeneral = styled.button`
@media screen and (max-width:900px){

    border: none;
    padding: 15px 30px;
    border-radius: 10px;
    color: #fff;
  
}
`;



