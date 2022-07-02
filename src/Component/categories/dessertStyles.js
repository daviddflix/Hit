import styled from 'styled-components'
import {IoCartOutline} from 'react-icons/io5'

export const MainContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 10px;
    max-width: 400px;
`;


export const BoxOptions = styled.div`

    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
 
`;

export const BoxOptionsChild = styled.div`

    width: 40%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
    position: relative;
    left: 1rem;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   

`;

export const Img = styled.img`

    width: 100%;
   height: 50%;
    border-radius: 10px 10px 0px 0px;

`;

export const Buttons = styled.button`

   
    border-radius: 100px;
    border: none;
    width: 80%;
    background-color: #fff;

`;

export const P = styled.p`

    background-color: #282828;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;

`;



export const g = styled.div`
@media screen and (max-width:900px){
    
}
`;

export const CartIcon = styled(IoCartOutline)`

    background-color: #282828;
    color: #fff;
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 10px;

`;

export const ButtonAddToCart = styled.button`

    width: 90%;
    background-color: #282828;
    color: #fff;
    padding: 5px;
    border: none;
    border-radius: 10px;
    margin-bottom: 10px;
    &:hover{
        background-color: black;
    }

`;