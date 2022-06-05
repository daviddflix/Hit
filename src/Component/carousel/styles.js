
import {  ButtonBack, ButtonNext } from 'pure-react-carousel';
import styled from 'styled-components';

export const  ArrowLeft = styled(ButtonBack)`


@media screen and (max-width: 900px ) {
    position: absolute;
    top: 0;
    left: 0;
    height: 70%;
    width: 0;
    background-color: transparent;
    border: none;
}
`;

export const  ArrowRight = styled(ButtonNext)`


@media screen and (max-width: 900px ) {
    position: absolute;
    top: 0;
    right: 10px;
    height: 70%;
    width: 0;
    background-color: transparent;
    border: none;
}
`;


export const  Div = styled.div`
 height: 500px;

@media screen and (max-width: 900px ) {
   height: 60vh;
   
}
`;

export const  Img = styled.img`
height: 500px;

@media screen and (max-width: 900px ) {
    height: 70vh;
    
    
}
`;

export const  h = styled.div`


@media screen and (max-width: 900px ) {
   
}
`;