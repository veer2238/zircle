import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import './App.css'
import Info1 from './Info1';

import image1 from '../../../src/assets/img1.png';
import image2 from '../../../src/assets/full.png';
import image3 from '../../../src/assets/img3 (1).png';
import image4 from '../../../src/assets/img3 (2).png';
import image5 from '../../../src/assets/full.png';
import image6 from '../../../src/assets/img3 (1).png';
import image7 from '../../../src/assets/img3 (2).png';
import { useState } from 'react';

const App = () => {
    const [focusElement, setFocusElement] = useState(0);
    const images = [image1, image2, image3, image4,image5,image6,image7];

    
    const info = [ <Info1/>,'Mumbai', 'Bengaluru', 'Kolkata','gujarat','vadodara','anand'];
  return (
    <div className="carousel">
    <div className='main'>
   <FancyCarousel 
   images={images} 
   setFocusElement={setFocusElement}
   carouselRadius={200}
      peripheralImageRadius={50}
      centralImageRadius={50}
      focusElementStyling={{border: '2px solid #ba4949'}}
      autoRotateTime={2}
      borderWidth={4}
      borderHexColor={'1c364f'}
   />
      <div className="info-box-wrapper">
        <p> {info[focusElement]} </p>
      </div>
      </div>
  </div>
  )
}

export default App