import {  useState } from "react";
import Drinks from "./bebidas";
import Dessert from "./dessert";
import Pastas from "./pastas";
import { BtnGeneral, Li, Menu, Ul } from "./styles";
import { useHistory } from "react-router-dom";


export default function Categories () {

   

    const history = useHistory()

    const verCarrito = () => {
      history.push('/carrito')
    }
     


    const [product, setProduct] = useState('pastas')
    
     const color = product === 'pastas'? '#5ac6d3' : product === 'postres'? '#d9376e' : '#ff595a' 

     const handleProducts = (e) => {
        
         setProduct(e.target.id)
     }

    return(
        <div style={{marginTop: '60px',marginBottom: '2rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff'}}>
       <Menu style={{background: color}}>
        <Ul>
          <Li type='button' id='pastas' value='Pastas' placeholder="Pastas"  onClick={handleProducts}/>
          <Li  type='button'  id='postres' value='Postres' placeholder="Postres"  onClick={handleProducts}/>
          <Li type='button' id='bebidas' value='Bebidas' placeholder="Bebidas"  onClick={handleProducts}/>
        </Ul>        
      </Menu>
        {
            product === 'pastas' && <Pastas/>
        }
        {
            product === 'postres' && <Dessert/>
        }
        {
            product === 'bebidas' && <Drinks/>
        }
        <BtnGeneral onClick={verCarrito} style={{background: color}}>VER CARRITO</BtnGeneral>
        </div>
    )
}