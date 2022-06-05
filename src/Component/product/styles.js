import styled from 'styled-components';
import { NavLink as Link} from "react-router-dom";
import {  ButtonBack, ButtonNext } from 'pure-react-carousel';

export const Titulo = styled.p`
	

	@media screen and (max-width: 600px ) {
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
}
`;


export const  MainContainer = styled.div`


@media screen and (max-width: 900px ) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
    box-shadow:  6px 6px 12px #bebebe,
             -6px -6px 12px #ffffff;
    border-radius: 5px;
    margin-top: 0;
    background-color: #fff;
    
  
  

}
`;

export const  Menu = styled.div`


@media screen and (max-width: 600px ) {
    padding: 10px;
}
`;


export const  NavLink = styled(Link)`


@media screen and (max-width: 900px ) {
   text-decoration: none;
   padding: 3px;
   text-transform: uppercase;
  
   font-size: 15px;
   margin: 1rem;
   border: none;
   -webkit-box-sizing: border-box;
   


   &:hover{
    border-bottom: 1px solid black;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;

   }
}
`;

export const TextoSlide = styled.div`
	
	@media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
		background: #fff;
		color: '#fff';
		width: 100%;
		padding: 1px ;
		text-align: center;
        justify-content: center;
        align-items: center;
		position: relative;
		bottom: 0;
        margin-bottom: 3rem;
      
        
	} 
`;



export const  ContainerButton = styled.div`


@media screen and (max-width: 600px ) {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 1rem;
}
`;

export const  Buttons = styled.div`


@media screen and (max-width: 600px ) {
  display: flex;
  justify-content: center;
  align-items: center;
 
}
`;

export const  Text = styled.h2`


@media screen and (max-width: 900px ) {
  color: black;
  margin: .7rem;
  padding: 0;
}
`;

export const  ButtonAddToCart = styled(Link)`


@media screen and (max-width: 600px ) {
    color: #fff;
    padding: 1rem 2rem;
    font-size: 14px;
    border: none;
    background-color: #282828;
   
    text-decoration: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 50px;
   

    &:hover{
        background-color: black;
        color: #fff;
    }
}
`;

export const  Arrow = styled.button`


@media screen and (max-width: 600px ) {
    color: black;
    padding:8px 14px 8px 14px;
    border: 1px solid black;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;

    &:hover{
        background-color: black;
        color: #fff;
    }
}
`;

export const  ProductNumber = styled.p`


@media screen and (max-width: 600px ) {
    color: black;
    padding: 8px 14px 8px 14px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: #fff;
    font-size: 13px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
     border-radius: 5px;
   

   
}
`;

export const  ArrowLeft = styled(ButtonBack)`


@media screen and (max-width: 900px ) {
    position: absolute;
    top: 0;
    left: 0;
    height: 60%;
    width: 0;
    background-color: transparent;
    border: none;
}
`;

export const  ArrowRight = styled(ButtonNext)`


@media screen and (max-width: 900px ) {
    position: absolute;
    top: 0;
    right: 15px;
    height: 60%;
    width: 0;
    background-color: transparent;
    border: none;
}
`;


