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
import CurrencyFormat from 'react-currency-format';


export default function Form(){

    const history = useHistory()
    const {input, setInput} = useContext(userContext)
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
 console.log('cart', cart)

 const items = cart && cart.map((p, i) => {
    return(
      `${p.title}%0A${p.salsa && p.salsa.map(item =>JSON.stringify(item, null, 2))}%0A${p.toppings && p.toppings.map(item => JSON
        .stringify(item))}%0A${p.quantity}%0A${p.Comments && p.Comments}`
     
    )
})

 const link =`https://wa.me/5491137858227?text=HIT%20PASTA%0A%0AGracias%20por%20tu%20compra%20${input.nombre}!%0A%0ASOLO%20FALTA%20PRESIONAR%20EN%20ENVIAR%20EN%20TU%20WHATSAPP%0A%0A${JSON.stringify(items)}%0A%0ANombre:%20${input.nombre}%0ADireccion:%20${input.direccion}%0ATelefono:%20${input.numero}%0AZona:%20${input.zona}%0AMetodo%20de%20Pago%20${input.method}%0ATotal:%20$${total}`

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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem  value='Belgrano'>Belgrano</MenuItem>
          <MenuItem value='San Isidro'>San Isidro</MenuItem>
          <MenuItem value='Martinez'>Martinez</MenuItem>
          <MenuItem value='Las Cañitas'>Las Cañitas</MenuItem>
        
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
          value={input.mathod}
          onChange={handleMethod}
          label="Metodo de Pago"
          color='success'
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem  value='Efectivo'>Efectivo</MenuItem>
          <MenuItem value='Mercado Pago'>Mercado Pago</MenuItem>
        </Select>
      </FormControl>
        </div>

       
      </Grid>
  <A href={link}>
      <Button disabled={!input.nombre || !input.numero || !input.direccion || !input.zona || !input.email || !cart.length }>FINALIZAR PEDIDO</Button></A>
     
        </MainContainer>
    )
}