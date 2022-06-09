import React, { Component } from 'react';
import img from './image/spaguetti 1600x1000.jpg'
import img2 from './image/noquis 1900x1200.webp'
import img3 from './image/penne 1500x1120.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselProvider, Slider, Slide,  } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Img } from './styles';



export default class Carouselp extends Component {
    render() {
        return (
    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={114}
    totalSlides={3}
    hasMasterSpinner={img? false : true}
    infinite={true}
    isPlaying={true}
  >
    <Slider >
      <Slide index={0}> <Img  src={img}/> </Slide>
      <Slide index={1}> <Img  src={img2}/> </Slide>
      <Slide index={1}> <Img  src={img3}/> </Slide>
    </Slider>
   
  </CarouselProvider> 
        );
    }
};