import styled from 'styled-components'
import {IoCartOutline} from 'react-icons/io5'

export const MainContainer = styled.div`
@media screen and (max-width:900px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f3fbfb;
    border-radius: 10px;

   
    
}
`;


export const BoxOptions = styled.div`
@media screen and (max-width:900px){
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
 
   
   
}
`;

export const BoxOptionsChild = styled.div`
@media screen and (max-width:900px){
    width: 40%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid #282828; */
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
    position: relative;
    left: 1rem;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   
}
`;

export const Img = styled.img`
@media screen and (max-width:900px){
    width: 100%;
   height: 50%;
    border-radius: 10px 10px 0px 0px;
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

export const P = styled.p`
@media screen and (max-width:900px){
    background-color: #282828;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
}
`;



export const g = styled.div`
@media screen and (max-width:900px){
    
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

export const ButtonAddToCart = styled.button`
@media screen and (max-width:900px){
    width: 90%;
    background-color: #282828;
    color: #fff;
    padding: 5px;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    :hover{
        background-color: black;
    }
}
`;