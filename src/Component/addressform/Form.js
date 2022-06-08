import { useContext } from "react";
import userContext from "../context/userContext";
import { MainContainer, Button } from "./FormStyles";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Form(){

    const {input, setInput} = useContext(userContext)
console.log('input', input)

const handleInput = (e) => {
    setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
}


const handleZona = (e) => {
    setInput(prev => ({...prev, zona: e.target.value }))
  }
  
  const handlePedido = () => {

  }

    return(
        <MainContainer>
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
            label="Direccion"
            fullWidth
            value={input.direccion}
            autoComplete="shipping address-line1"
            variant="outlined"
            onChange={handleInput}
            color='success'
            
            
          />
        </Grid>
        <div style={{position: 'relative', left: '1rem'}}>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            onChange={handleInput}
            value={input.email}
            required
            color='success'
            sx={{input: {color: '#282828'}}}
          />
        </Grid>
       
      </Grid>
  <Button href="https://wa.me/5491137858227?text=I%20am%20interested%20in%20your%20services.%20How%20to%20get%20started%3F">Finalizar pedido</Button>
     
        </MainContainer>
    )
}