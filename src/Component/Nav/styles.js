import styled from 'styled-components'
import { IoCartOutline} from 'react-icons/io5'
import { NavLink } from "react-router-dom";
import { AiOutlineMenu} from 'react-icons/ai'



export const  MainContainer = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 300;
    transition: 0.3s ease-in-out;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fff;
   
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-around;
  align-items: center;

 
`;

export  const MobileIcon = styled(AiOutlineMenu)`

    display: none;
   
    @media screen and (max-width: 900px ) {
        width: 20px;
        height: 20px;
        display: block;
        color: #ff595a;
       
}
`;

export const LinkLogo = styled(NavLink)`
    
   text-decoration: none;
   color: #ff595a;
   display: flex;  
       flex-direction : row;
       justify-content: center;
       align-items: center;

    @media screen and (max-width: 900px) {
       display: flex;  
       flex-direction : row;
       justify-content: center;
       align-items: center;
}
`;

export const ImgLogo = styled.img`
    
   text-decoration: none;
   color: black;

    @media screen and (max-width: 900px) {
       border-radius: 50% ;
       height: 2rem;
       width: 2rem;
       margin-right: 5px;
       z-index: 10;

}
`;



export const Cart = styled(IoCartOutline)`

width: 23px;
height: 23px;
display: block;
overflow: hidden;
   
    @media screen and (max-width: 900px ) {
        width: 22px;
        height: 22px;
        display: block;
        color: black;
        border-radius: 50%;
        
        z-index: 10;
       
}
`;

export const MenuBar = styled.ul`
    display: flex;
    list-style: none;
    height: 90%;
    overflow: hidden;
   

   @media screen and (max-width: 900px){
    position: absolute;
    top: 44px;
    width: 60%;
    height: 90vh;
    flex-direction: column;
    border: 1px solid #b7b7a4;
    transition: 0.5s all ease;
    background-color: #fff;
    left: ${({open}) => open? "0" : "-100%"} ;
    z-index: 50;
   }
`;   
  

export const ContainerRutas = styled.li`
  width: 100%;
  position: relative;
       
  @media screen and (max-width:900px){
        position: relative;
        right:2.7rem ; 
        height: 55px;
        width: 400px;
        border-bottom: 1px solid #f5f6f8;
     
  }
`;

export const ContainerRutasLogin = styled.li`
   width: 200px;
   display: flex;
        justify-content: center;
        align-items: center;
       
  @media screen and (max-width:900px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        right: 2.2rem;
  }
`;

export const Greeting = styled.h5`
   width: 100%;

  @media screen and (max-width:900px){
       color: #282828;
       text-decoration: none;
       margin-left: 10px;
  }
`;


export const Link = styled(NavLink)`
    
    display: flex;
        justify-content: flex-start;
        align-items: center;
        color: black;
        padding: 10px;
        font-weight: 600;
        text-decoration: none;
        height: 100%; 
        width: 100% ;

    @media screen and (max-width:900px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: black;
        padding: 10px;
        font-weight: 600;
        text-decoration: none;
        height: 100%; 
        width:100% ;
       
    }
`;




export const MenuCart = styled.ul`
    display: none;
    list-style: none;
    height: 100%;

   @media screen and (max-width: 900px){
    display: flex;
    position: absolute; 
    width: 75%;
    height: 85vmax;
    border-radius: 0 0 0 10px;
    overflow-y: hidden;
    flex-direction: column;
    transition: 0.8s all ease;
    background-color: rgba(0,0,0,0.5);
    top: ${({open}) => open? "44px" : "-3000%"} ;
    right: 0;
    z-index: 50;
    /* border: 1px #ade8f4 solid;
     */
   }
`; 


export const PictureAuth0 = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    
`; 


export const ContainerIconCart = styled.div`
    float: right;
  @media screen and (max-width: 900px){
      
  }
`;




