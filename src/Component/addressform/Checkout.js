import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './addressform';
import PaymentForm from './PaymentForm';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import userContext from '../context/userContext';
import { getLinkPayment, postCompra, resetCart, getNotification } from '../../redux/actions';
import { ButtonHacerOtroPedido, LinkMP } from './styles';
import { height } from '@mui/system';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Direccion de envio', 'Finalizar pago'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;

    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const dispatch = useDispatch()


  const { user } = useAuth0();
    let cart = useSelector(state => state.cart);
    const {input, setInput} = React.useContext(userContext)
    let link = useSelector(state => state.link);

    

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const submitOrder = async(e) => {
    e.preventDefault()
    dispatch(postCompra({cart, input}))
    dispatch(getLinkPayment({cart, input}))
}

  const resetCart = () => {
    dispatch(resetCart())
  }



  return (
    <div style={{height: '100vh', backgroundColor: '#f5f6f8', marginTop: '60px'}}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          
        }}
      >
       
      </AppBar>
      <Container component="main" maxWidth="sm"  sx={{ mb: 4}}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6, height: '70%' }, p: { xs: 2, md: 3} }}>
        
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5}}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                {
                   activeStep === 0? <Box sx={{  display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1}}>
                      Atras
                    </Button>
                  )}

                
                  <Button
                onClickCapture={submitOrder}
                disabled={!input.email || !input.direccion || !input.email || !input.nombre || !input.numero || !input.sub}
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                href={link}
              >
                {activeStep === steps.length - 1 ? '' : 'Siguiente'}
              </Button>    
                
                
                </Box> :   <></>
                }
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      
      </Container>
      {link && activeStep === steps.length - 1  ? <LinkMP href={link} onClick={resetCart}>
                      PAGAR CON MERCADO PAGO
                    </LinkMP> : <></>}
    </ThemeProvider>
    </div>
  );
}