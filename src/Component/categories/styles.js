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
    background-color: #f3fbfb;
   
    // background-color: #bcb8b1;
}
`;

export const Img = styled.img`
    height: 150px;
    width: 150px;
@media screen and (max-width:900px){
        height: 100%;
        width: 35%;
        border-radius: 5px;
        position: relative;
       
       
}
`;

export const Container = styled.div`
   
@media screen and (max-width:900px){
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    width: 87%;
    position: relative;
    border-radius: 5px;
   
    
      
}
`;

export const ContainerInfo = styled.div`
   
@media screen and (max-width:900px){
   
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    right: 4rem;
    
    
      
}
`;

export const NavLink = styled(Link)`
    
    width: 100%;
    display: flex;
    flex-direction: column;

@media screen and (max-width:900px){
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    width: 100vw;
}
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
    position: relative;
    right: 1px;
  
    color: #ff595a;

    :hover{
       color: #fff;
    }

    :active{
        color: #fff;
    }
   
   
}
`;

export const ContainerHeart = styled.div`
   

@media screen and (max-width:900px){
    position: absolute;
    top: -5px;
    right: -5px;
    color: #fff;
    border-radius: 100%;
    padding: 5px;
    border: 2px solid #ff595a;
    background-color: #fff;
    width: 28px;
    height: 28px;

    :hover{
        border: none;
        background-color: #ff595a;
    }

    :active{
        border: none;
        background-color: #ff595a;
    }
    
   
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



