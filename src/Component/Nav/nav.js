import { useContext, useEffect, useState, useRef } from "react";
import { ContainerRutas, Link, LinkLogo, MainContainer,ContainerRutasLogin, MenuBar, MenuCart, MobileIcon, PictureAuth0, Wrapper, Greeting, ContainerIconCart } from "./styles";
import Carrito from "../cart/cart";
import Context from "../context/Items";
import { useAuth0 } from "@auth0/auth0-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {  useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import logo from './Logos/favicon.ico'

const StyledBadge = styled(Badge)(({ theme }) => ({
     '& .MuiBadge-badge': {
       right: -3,
       top: 13,
       border: `2px solid ${theme.palette.background.paper}`,
       padding: '0 4px',
     },
   }));

export default function Nav(){ 

     const onClose = () => {
          setShow(false)
         
     }

     const {isAuthenticated, user, logout , loginWithRedirect } = useAuth0();
     
     const [show, setShow] = useState(false)
     
     const cartItems = useSelector(state => state.cart)
     const {closeCart, setCloseCart} = useContext(Context)
     const [anchorEl, setAnchorEl] = useState(null);
     const open = Boolean(anchorEl);
     const history = useHistory()

     
     let closeNav = useRef()
  
 
     const handleClickOutside = (event) => {
          if (closeNav.current && show === true && !closeNav.current.contains(event.target)) {
              setShow(!show);
              const body = document.body.style
              body.overflow='visible'
              body.zIndex=10
              body.pointerEvents='auto'
           
          }
          if (closeNav.current && show === true && closeNav.current.contains(event.target)) {
               setShow(!show);
               const body = document.body.style
               body.overflow='visible'
               body.zIndex=10
               body.pointerEvents='auto'
            
           }
      };


      useEffect(() => {
         let cancel = false
           if(show){   
                cancel = true;
               const body = document.body.style
               body.overflow='hidden'
               body.zIndex=10
               body.pointerEvents='none'  
               document.getElementsByClassName('nav')[0].style.pointerEvents='auto'  
               document.getElementsByClassName('nav')[0].style.overflow='visible'
           }
           if(!show){
                cancel=false
           }
          
      }, [show])
  
      useEffect(() => {
          document.addEventListener('mousedown', handleClickOutside, true);
         
      }, [show]);
    
     const handleClickLogout = () => {
          logout();
          onClose();
        };

        const handleClickProfile = () => {
          history.push('/userProfile')
          setAnchorEl(null)
          onClose();
        };

      
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
          setAnchorEl(null)
        }
 
  const showRoutes = () => {
     if(closeCart === true){
          setShow(!show)
          setCloseCart(false)
       }else{
          setShow(!show)
       }
  }

  const cart = () => {
      history.push('/carrito')
   }

   const changeBackgroundColor = () => {
       
        if(window.scrollY >= 66){
             document.getElementsByClassName('nav')[0].style.backgroundColor='#fff'
             document.getElementsByClassName('nav')[0].style.borderBottom='none'
        } else{
          document.getElementsByClassName('nav')[0].style.backgroundColor='transparent'
          // document.getElementsByClassName('nav')[0].style.borderBottom='0.5px solid #060808'
        }
   }

   useEffect(() => {
     document.addEventListener('scroll', changeBackgroundColor)
   },[document])



     return( 

<MainContainer className="nav" >
  <Wrapper>

     {
          show === false? <MobileIcon onClick={showRoutes}/> : <AiOutlineClose style={{width: '20px', height: '20px'}} onClick={showRoutes}/>
     }

    <LinkLogo to='/'>
     <img src={logo} style={{width: '40%', height: '40%'}}  alt='logo'/>
    </LinkLogo>

    
    <MenuBar  open={show}  ref={closeNav}>

          <ContainerRutas>
               <Link  to='/' exact onClick={onClose} >
               HOME
               </Link>
          </ContainerRutas>
    
          <ContainerRutas>
               <Link to='/productos' exact onClick={onClose}>
               PRODUCTOS
               </Link>
          </ContainerRutas>
     
        

          <ContainerRutas>
               <Link to='/trabajaConNosotros' exact onClick={onClose}>
               TRABAJA CON NOSOTROS
               </Link>
          </ContainerRutas>

          <ContainerRutasLogin>
             
          {isAuthenticated ? (

          <div>
          <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}

          >
          <PictureAuth0  src={user.picture} alt='picture' />
          <Greeting>Hola, {user.name}</Greeting>
          </Button>
          <Menu
          style={{marginTop: '10px', marginLeft: '6px'}}
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
               'aria-labelledby': 'basic-button'
          }}
          >
          <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1.5rem', color: '#e63946'}} onClick={handleClickProfile}>Perfil</MenuItem>
          <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1.5rem', color: '#e63946'}} >Pedidos</MenuItem>
          <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1.5rem', color: '#e63946'}} onClick={handleClickLogout}>Log out</MenuItem>
          </Menu>
          </div>
          ) : (
          <Button variant='outlined' size="small" color='success'  onClick={() => loginWithRedirect()}>
          Log In/Register
          </Button>
          )}
            
          </ContainerRutasLogin>

    </MenuBar>

   
        
     <ContainerIconCart   onClick={cart}>
     <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartItems.length? cartItems.length : '0'} color="primary">
        <ShoppingCartIcon style={{color: '#ff595a'}}/>
      </StyledBadge>
    </IconButton>
    </ContainerIconCart>
    
    
   {/* <MenuCart open={closeCart} >
        <Carrito/>
     </MenuCart> */}

    

     
   

  
  </Wrapper>
 </MainContainer>


     )
}