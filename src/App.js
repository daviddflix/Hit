import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Component/Nav/nav';
import Chat from './Component/chat/whatsapp';
import Info from './Component/Info/info';
import Footer from './Component/footer/footer';
import DetailProduct from './Component/detailProduct/detailProduct';
import Categories from './Component/categories/Categories';
import {  useState } from 'react';
import Context from './Component/context/Items';
import ResumenCarrito from './Component/resumenCarrito/carrito';
import userContext from './Component/context/userContext';
import OrderContext from './Component/context/orderContext';
import MessageMedia from './Component/MessajeMedia';
import NoMatch from './Component/404/404';
import Form from './Component/addressform/Form';
import Loading from './Component/spinner/spinner';
import CacheBuster from 'react-cache-buster';
import { version } from '../package.json';


function App() {

  const isProduction = process.env.NODE_ENV === 'production';
  const media = window.matchMedia("(max-width:900px)")
  

    const [closeCart, setCloseCart] = useState(false)
    const [input, setInput] = useState({
      nombre: "",
      direccion: "",
      numero: "11",
      method: "",
      zona: ""
  })

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
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<Loading />} //If not pass, nothing appears at the time of new version check.
    >
    <Context.Provider value={{closeCart, setCloseCart }}>
     <userContext.Provider value={{input, setInput}}>
       <OrderContext.Provider value={{options, setOptions}}>
             <Route path='*'>
     <NoMatch/>
     </Route> 

    
    </OrderContext.Provider>
    </userContext.Provider>
    </Context.Provider>
    </CacheBuster>
  );
}

export default App;

// {
//   media.matches === true ? <div className="App">

//   <Nav/>
//   <Switch>

 

//        <Route  exact path='/envio'>
//        <Info/>
//        </Route> 

//        <Route exact path='/'>
//        <Categories/>
       
//        </Route> 

    
//         <Route exact path='/carrito'>
//         <ResumenCarrito />
//        </Route> 

//        <Route exact path='/formPago'>
//        <Form/>
//        </Route>    

//        <Route exact path='/detail/:id'>
//        <DetailProduct/>
//        </Route> 

//        <Route path='*'>
//        <NoMatch/>
//        </Route> 

       
//        </Switch>  
     
//        <Footer />

//        <div className='chat'>
//        <Chat/>
//        </div>
   

// </div> : <MessageMedia/>
//  }