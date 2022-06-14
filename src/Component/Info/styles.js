import styled from 'styled-components'
import {MdOutlinePayment} from 'react-icons/md'
import {BsFillGeoAltFill} from 'react-icons/bs'
import {FaMoneyBillWave} from 'react-icons/fa'

export const  MainContainer = styled.div`


    display: flex;
    flex-direction: column;
    background-color: #f5f6f8;
    padding: 1rem;
    
   
`; 

export const  Container = styled.div`
  margin: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  @media screen and (max-width: 900px ) {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
   }
 
`;



export const  Text = styled.h4`

  @media screen and (max-width: 900px ) {
    color: black;
    font-size: 1rem;
    width: 80vw;
    
   }
`;

export const  Anchor = styled.a`
display: flex;
  align-items: center;
@media screen and (max-width: 900px ) {
 
  display: flex;
  align-items: center;
   }
`;

export const IconMap = styled.img`
    width: 19px;
    height: 19px;
    margin: 10px;
`;

export const  IconPayment = styled(MdOutlinePayment)`
   width: 50px;
   height: 50px;
   color: black;

   @media screen and (max-width: 900px ) {
      width: 30px;
      height: 30px;
      color: black;
}
`;

export const  IconGeo = styled(BsFillGeoAltFill)`
   width: 30px;
   height: 30px;
   color: black;
`;

export const  HeaderPi = styled.h4`
    color: black;
    font-size:  1rem;
    margin: 0;
  @media screen and (max-width: 900px ) {
    color: black;
    font-size: 1rem;
}
`;



export const  MoneyIcon = styled(FaMoneyBillWave)`


    @media screen and (max-width: 900px ) {
      color: green;
      width: 40px;
      height: 40px;
   }
`;


export const  ImagesPayments = styled.img`
 margin-right: 15px;
      width: 40px;
      height: 40px;

    @media screen and (max-width: 900px ) {
      margin-right: 15px;
      width: 40px;
      height: 40px;
   }
`;


