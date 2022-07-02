
import styled from 'styled-components'
import {IoCartOutline} from 'react-icons/io5'

export const MainContainer = styled.div`
    
width: 100%;
display: flex;
flex-direction: column;
max-width: 400px;



width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`;

export const Img = styled.img`


width: 50px;
height: 80px;


`;

export const ContainerInfo= styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 50%;
justify-content: space-around;


`;

export const Title= styled.h4`

color: #282828;
margin: 0;
width: 100%;
font-size: 14px;

`; 

export const Container = styled.div`

 width: 40%;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 display: flex;
 margin: 1rem;
 height: 250px;
 border-radius: 10px;
 align-items: center;
 flex-direction: column;
 justify-content: space-around;

`;

export const ButtonAddToCart = styled.button`
    width: 50%;
    background-color: #282828;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    margin-left: 15px;
 &:hover{
        background-color: black;
    }

`;

export const Buttons = styled.button`

    border-radius: 100px;
    border: none;
    width: 80%;
    background-color: #fff;

`;

export const BtnAdd = styled.button`

    border-radius: 100px;
    border: none;
    width: 50%;
    background-color: rgba(0,0,0,0.70);
    margin-top: 5px;

`;

export const ContainerButtons = styled.div`

  
    border-radius: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 90%;
    height: 35px;
    display: flex;
    align-items: center;
 

`;

export const P = styled.p`

    background-color: #282828;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;

`;

export const CartIcon = styled(IoCartOutline)`

    background-color: #282828;
    color: #fff;
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 10px;

`;

export const SubTitle = styled.h4`
    color: #282828;
    margin: 10px;
    font-size: 1rem;

`;

export const CardContainer = styled.div`


    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`;