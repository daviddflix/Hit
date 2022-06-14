import { useContext } from "react";
import userContext from "../context/userContext";
import { MainContainer, A, Button,ArrowLeft } from "./FormStyles";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";





export default function Form(){

    const history = useHistory();
   
    const {input, setInput} = useContext(userContext);
    let cart = useSelector(state => state.cart);


const handleInput = (e) => {
    setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
}


const handleZona = (e) => {
    setInput(prev => ({...prev, zona: e.target.value }))
  }

  const handleMethod = (e) => {
    setInput(prev => ({...prev, method: e.target.value }))
  }
  
  const backToProducts = () => {
    history.push('/carrito')
 }
 
 const priceProduct = cart.map(p => p.unit_price)
    
 const total =   priceProduct.reduce((prev, curr) => {
  return prev + curr 
 }, 0)



 const items = cart && cart.map((p, i) => {
    
    let salsas =  p.salsa ? p.salsa.join(', ') : ''
    let toppings =  p.toppings ? p.toppings.join(', ') : ''
   
 
    return(
      `%0A${p.title}%20x%20${p.quantity}%0A${p.salsa ? `SALSAS:%0A${salsas}%0A${toppings? `EXTRA:%0A${toppings}`: ''}%0A${p.Comments? `COMENTARIO:%0A${p.Comments}`: ''}`: ''}`
     
    )
})



 const link =`https://wa.me/5491137858227?text=HIT%20PASTA%0A%0AGracias%20por%20tu%20compra%20${input.nombre}!%0A%0AVerifica%20tu%20pedido%0A%0A${items.join('')}%0A%0ANombre:%20${input.nombre}%0ADireccion:%20${input.direccion}%0ATelefono:%20${input.numero}%0AZona:%20${input.zona}%0AMetodo%20de%20Pago:%20${input.method}%0ATotal:%20$${total}%0A%0ATU%20PEDIDO%20ESTA%20CASI%20LISTO%20SOLO%20FALTA%20PRESIONAR%20ENVIAR%20EN%20TU%20WHATSAPP`

    return(
        <MainContainer>
              <ArrowLeft onClick={backToProducts}/>
            <h3>Direccion de Envio</h3>

            <Grid container spacing={3} width={'90%'}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tel"
            name="numero"
            label="Telefono"
            fullWidth
            autoComplete="telefono"
            variant="outlined"
            onChange={handleInput}
            value={input.numero}
            color='success'
            focused
            type='number'
            placeholder="11********"
            
          />
         
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            required
            id="direccion"
            name="direccion"
            label="Direccion Completa"
            fullWidth
            value={input.direccion}
            autoComplete="shipping address-line1"
            variant="outlined"
            onChange={handleInput}
            color='success'
            
            
          />
        </Grid>
        <div style={{position: 'relative', left: '1rem', top: '.6rem'}}>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-standard-label">Zona</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={input.zona}
          onChange={handleZona}
          label="zona"
          color='success'
          
        >
         
          <MenuItem  value='San Isidro'>San Isidro</MenuItem>
          <MenuItem value='San Isidro centro'>San Isidro centro</MenuItem>
          <MenuItem value='Martinez'>Martinez</MenuItem>
          <MenuItem value='Acasusso'>Acasusso</MenuItem>
          <MenuItem value='Las Cañitas'>Las Cañitas</MenuItem>
          <MenuItem value='Belgrano'>Belgrano</MenuItem>
        
        </Select>
      </FormControl>
        </div>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            autoComplete="name"
            variant="outlined"
            onChange={handleInput}
            value={input.nombre}
            
            color='success'
            
          />
        </Grid>
        <div style={{position: 'relative', left: '1rem', top: '.6rem'}}>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-standard-label">Metodo de Pago</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={input.method}
          onChange={handleMethod}
          label="Metodo de Pago"
          color='success'
          
        >
          
          <MenuItem  value='Efectivo'>Efectivo</MenuItem>
          <MenuItem value='Mercado Pago'>Mercado Pago</MenuItem>
          <MenuItem value='Retiro en el Local'>Retiro en el local</MenuItem>
        </Select>
      </FormControl>
        </div>

       
      </Grid>
  <A href={link}>
      <Button disabled={!input.nombre || input.numero.length > 10 || !input.direccion || !input.zona || !input.method || !cart.length }>FINALIZAR PEDIDO</Button></A>
     
        </MainContainer>
    )
}