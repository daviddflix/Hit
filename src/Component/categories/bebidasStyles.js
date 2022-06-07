
import styled from 'styled-components'
import {IoCartOutline} from 'react-icons/io5'

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

@media screen and (max-width:900px){
width: 50px;
height: 80px;

}
`;

export const ContainerInfo= styled.div`
@media screen and (max-width:900px){
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 50%;
justify-content: space-around;

}
`;

export const Title= styled.h4`
@media screen and (max-width:900px){
color: #282828;
margin: 0;
width: 100%;
font-size: 11px;
}
`; 

export const Container = styled.div`
@media screen and (max-width:900px){
 width: 40%;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 /* border: 1px solid rgba(0,0,0,0.20); */
 display: flex;
 margin: 1rem;
 height: 250px;
 border-radius: 10px;
 align-items: center;
 flex-direction: column;
 justify-content: space-around;
}
`;

export const ButtonAddToCart = styled.button`
@media screen and (max-width:900px){
    width: 50%;
    background-color: #282828;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    margin-left: 15px;
    :hover{
        background-color: black;
    }
}
`;

export const Buttons = styled.button`
@media screen and (max-width:900px){
    border-radius: 100px;
    border: none;
    width: 80%;
    background-color: #fff;
}
`;

export const BtnAdd = styled.button`
@media screen and (max-width:900px){
    border-radius: 100px;
    border: none;
    width: 50%;
    background-color: rgba(0,0,0,0.70);
    margin-top: 5px;
}
`;

export const ContainerButtons = styled.div`
@media screen and (max-width:900px){
  
    border-radius: 100px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 90%;
    height: 35px;
    display: flex;
    align-items: center;
 
}
`;

export const P = styled.p`
@media screen and (max-width:900px){
    background-color: #282828;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
}
`;

export const CartIcon = styled(IoCartOutline)`
@media screen and (max-width:900px){
    background-color: #282828;
    color: #fff;
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 10px;
}
`;

export const SubTitle = styled.h4`
@media screen and (max-width:900px){

    color: #282828;
    position: relative;
    right: 6rem;
    margin: 10px;
    font-size: 1.2rem;
}
`;

export const CardContainer = styled.div`
@media screen and (max-width:900px){

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
`;