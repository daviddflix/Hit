import styled from "styled-components";
import {RiArrowLeftSLine} from 'react-icons/ri'

export const MainContainer = styled.div`
height: 100vh;
position: relative;
top: 5rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const A = styled.a`
padding: 15px 25px;
text-decoration: none;
background-color: #29d884;
margin-top: 2rem;
border: none;
color: #fff;
border-radius: 5px;
`;

export const Button = styled.button`

text-decoration: none;
background-color: #29d884;
border: none;
color: #fff;
border-radius: 5px;
`;

export const ArrowLeft = styled(RiArrowLeftSLine)`
position: relative;
right: 10rem;
top: 1rem;
width: 32px;
height: 32px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;

`