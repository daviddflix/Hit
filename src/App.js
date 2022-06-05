import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Component/Nav/nav';
import Chat from './Component/chat/whatsapp';
import Info from './Component/Info/info';
import Footer from './Component/footer/footer';
import CarouselProduct from './Component/product/product';
import Carouselp from './Component/carousel/carousel';
import DetailProduct from './Component/detailProduct/detailProduct';
import Categories from './Component/categories/Categories';
import {  useState } from 'react';
import Context from './Component/context/Items';
import UserProfile from './Component/profile/userProfile';
import ResumenCarrito from './Component/resumenCarrito/carrito';
import Checkout from './Component/addressform/Checkout'
import userContext from './Component/context/userContext';
import OrderContext from './Component/context/orderContext';
import MessageMedia from './Component/MessajeMedia';
import NoMatch from './Component/404/404';

function App() {

  const media = window.matchMedia("(max-width:900px)")
   
   


    const [closeCart, setCloseCart] = useState(false)
    const [input, setInput] = useState({
      nombre: "",
      direccion: "",
      numero: "",
      email: "",
      sub: "",
      zona: ""
  })

  console.log('input', input)

  const [options, setOptions] = useState({
    toppings: [],
    salsa: [],
    priceTopping: null,
    id: '',
    title: '',
    price: '',
    picture_url: '',
    Comments: '',
    unit_price: 0,
    quantity: 1,
  });
  

  return (
    <Context.Provider value={{closeCart, setCloseCart }}>
     <userContext.Provider value={{input, setInput}}>
       <OrderContext.Provider value={{options, setOptions}}>
       {
        media.matches === true ? <div className="App">
      
        <Nav/>
        <Switch>
 
       
 
             <Route  exact path='/'>
             <Carouselp/>
             <CarouselProduct/>
             <Info/>  
             
             </Route> 
 
             <Route exact path='/productos'>
             <Categories/>
             </Route> 
 
             <Route exact path='/userProfile'>
             <UserProfile/>
             </Route> 
           
 
              {/* <Route path="/carrito" component={ResumenCarrito} />  */}
              <Route exact path='/carrito'>
             <ResumenCarrito/>
             </Route> 
 
             <Route exact path='/formPago'>
             <Checkout/>
             </Route>    
 
             <Route exact path='/detail/:id'>
             <DetailProduct/>
             </Route> 

             <Route path='*'>
             <NoMatch/>
             </Route> 
 
             
             </Switch>  
           
             <Footer />
 
             <div className='chat'>
             <Chat/>
             </div>
         
     
     </div> : <MessageMedia/>
       }
    
    </OrderContext.Provider>
    </userContext.Provider>
    </Context.Provider>
  );
}

export default App;

      