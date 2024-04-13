
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import image1 from '../assets/images/apples.jpg';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import cstitle from '../assets/images/image 39.svg';
import './styles/cscup.css'

function CsCup() {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [image1, image1, image1, image1, image1, image1, image1];

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const handleNext = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='cs-full'>
      <Navbar />
      <div className='bg-gradient-to-b pt-40 pb-16 min-h-screen' style={{
        background: ``,
        
      }}>
        <div className='flex flex-row justify-center text-[#ffffff] font-bold'>
        <img src={cstitle} alt="DotSlash Title" className="mx-auto mt-6 w- h-16" />
        </div>
        <div className='text-[41px] font-semibold text-center mt-6 text-[#ffffff]'>Gallery</div>
        <div className='flex flex-row justify-center'>
          <button onClick={handlePrev} ><IoIosArrowRoundBack className='m-0 text-5xl text-white' /></button>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={'Image ' + (index + 1)}
              style={{
                height: '400px',
                width: selectedImage === index ? '400px' : '100px',
                backgroundPosition: selectedImage === index ? 'center' : 'left',
                backgroundSize: selectedImage === index ? 'cover' : 'auto',
                border: selectedImage === index ? '1px solid white' : '1px solid white',
                margin: '0 5px',
                cursor: 'pointer',
                transition: 'width 0.5s'
              }}
              className='rounded-md'
              onClick={() => handleClick(index)}
            />
          ))}
          <button onClick={handleNext} className='m-0'><IoIosArrowRoundForward className='ml-0 text-5xl text-left text-white' /></button>
        </div>
      </div>
    </div>
  );
}

export default CsCup;