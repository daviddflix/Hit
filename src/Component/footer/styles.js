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
`;

export const  InstagramIcon = styled(BsInstagram)`
    /* color: #fff; */
    /* background: #d6249f; */
    /* background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%); */
    width: 25px;
    height: 25px;
    margin: 1rem;
    border-radius: 40%;
    /* box-shadow: 0px 3px 10px rgba(0,0,0,25); */
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
   position: relative;
 
   top: 1rem;
   margin: 0;
`;

export const Schedule = styled.h4`
  font-size: 13px;
`;

