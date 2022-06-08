import styled from 'styled-components';
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

export const  MainContainer = styled.div`
    background-color: #282828;
    padding: 1rem;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;



export const  ContainerIcons = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const  InstagramIcon = styled(BsInstagram)`
    color: #fff;
    width: 25px;
    height: 25px;
    margin-left: 1rem;
    border-radius: 40%;
    position: relative;
    top: 2px ;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
    color: #4267b2;
    width: 25px;
    height: 25px;
    margin: .5rem;
`;


export const ContainerInfo = styled.div`
   border: none;
   color: #fff
`;

export const Img = styled.img`
   background-color: transparent;
   background: transparent;
   margin: 0;
`;

export const Schedule = styled.h4`
  font-size: 13px;
 
`;

