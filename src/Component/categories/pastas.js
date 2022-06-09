import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { Container, ContainerInfo, Heart, Img, ContainerHeart, MainContainer, NavLink, Title } from "./styles";
import Rating from '@mui/material/Rating';





export default function Pastas(){

    const productos = useSelector(state => state.food)
   
    const dispatch = useDispatch()
    const [value, setValue] = useState(5);

 
    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <MainContainer>
        
          
           <h3>ELIGE TU HIT</h3>
           <div style={{ minHeight: '100vh'}}>
           {
              productos.length? productos.map(p => {
                 return(
                   <NavLink key={p.id}   to={`/detail/${p.id}`} style={{textDecoration:'none', }}>
                 
                  <Container >
                  <Img src={ `https://hit-pasta.herokuapp.com/${p.picture_url}` } />
                  
                        <ContainerInfo >
                          <Title>{p.title}</Title>
                             <Rating
                              name="size-small"
                              value={value}
                              onChange={(event, newValue) => {
                              setValue(newValue);
                              }}
                              />
                          <h4 style={{margin: '7px', color: '#282828'}}>$ {p.price}</h4>
                        </ContainerInfo>
                       <ContainerHeart>
                       <Heart />
                       </ContainerHeart>
                </Container>
                  </NavLink>
                 
                 )
               }): <Loading/>
           }
           </div>

           <div>
     
    
    </div>
          
        </MainContainer>
    )
}