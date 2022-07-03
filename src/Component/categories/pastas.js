import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { Container, ContainerInfo, Img,  MainContainer, NavLink, Title } from "./styles";
import Rating from '@mui/material/Rating';

export default function Pastas(){

    const productos = useSelector(state => state.food);
    
    const isLoading = useSelector(state => state.isLoading);
   
    const dispatch = useDispatch()
    const [value, setValue] = useState(5);

 
    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <MainContainer>
        
          
           <h3>ELIGE TU HIT</h3>
           <Container>
           {
              isLoading? productos.map(p => {
                 return(
                   <NavLink key={p.id}   to={`/detail/${p.id}`} style={{textDecoration:'none', }}>
                  <div style={{height: '100%', width: '30%', position: 'relative', overflow: 'hidden', borderRadius: '5px'}}>
                    {
                     isLoading?
                  <Img src={p.picture_url} loading='lazy' /> : <Loading/>
                    }
                  </div>                  
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
                  </NavLink>
                 
                 )
               }): <Loading/>
           }
           </Container>

           <div>
     
    
    </div>
          
        </MainContainer>
    )
}