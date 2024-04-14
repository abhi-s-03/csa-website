import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import image1 from '../assets/images/apples.jpg';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { MdArrowRight,MdArrowLeft } from "react-icons/md";
import cstitle from '../assets/images/image 39.svg';
import imageurl from '../assets/images/apples.jpg';
import './styles/cscup.css'
import Footer  from '../components/Footer';

function CsCup() {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [image1, image1, image1, image1, image1, image1, image1];
  const intervalDuration = 3000; // Change this value to adjust the interval duration

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

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
    <div className='cs-full max-w-full overflow-hidden'>
      <Navbar textColor="white" />
      <div className='bg-gradient-to-b pt-40 pb-16 min-h-screen' style={{ background: '' }}>
        <div className='flex flex-row justify-center text-[#ffffff] font-bold'>
          <img src={cstitle} alt="DotSlash Title" className="mx-auto mt-6 w- h-16" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start">
          <div className="md:mr-4 p-16 md:p-0 mx-16 md:w-1/2 ">
            {/* Image */}
            <img src={imageurl} alt="Image" className="w-full md:w-auto" />
          </div>
          <div className="md:w-3/4">
            {/* Paragraph */}
            <p className="text-white p-20 text-lg flex justify-center items-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et unde vero, nobis sed voluptatem repellat cum aut molestiae ad beatae officia nemo harum ratione, veritatis molestias a illo pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti minus sint, cum dicta esse qui ex, perspiciatis soluta debitis repellendus expedita neque ullam nesciunt enim ut similique corporis assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta et facilis qui. Asperiores praesentium numquam sunt rerum atque quos doloribus omnis laboriosam possimus sint facere, animi explicabo modi enim? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam beatae ipsam consequatur voluptatem in molestiae culpa rem ab molestias, necessitatibus similique, illo eaque aut nisi nesciunt. Quo itaque est numquam?
            </p>
          </div>
        </div>
        <div className='text-[41px] font-semibold text-center mt-6 text-[#ffffff]'>Gallery</div>
        <div className='flex flex-row justify-center mt-10'>
          <button onClick={handlePrev} className='mx-24 rounded-full max-w-6 self-center'>
            <MdArrowLeft className='text-2xl text-[#1D2C66] bg-white rounded-full' />
          </button>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={'Image ' + (index + 1)}
              style={{
                height: '400px',
                width: selectedImage === index ? '400px' : '100px',
                border: selectedImage === index ? '1px solid white' : '1px solid white',
                margin: '0 5px',
                cursor: 'pointer',
                transition: 'width 0.5s',
                objectFit:  selectedImage === index ? '' : 'cover',
                objectPosition: selectedImage === index ? '' : '25% 25%',
              }}
              className='rounded-md'
              onClick={() => handleClick(index)}
            />
          ))}
          <button onClick={handleNext} className='mx-24 rounded-full max-w-6 self-center'>
            <MdArrowRight className='text-2xl text-[#1D2C66] bg-white rounded-full' />
          </button>
        </div>
        <div className='mt-10 text-center'>
          <p className='text-white text-xl'>Visit <a href='https://cs-cup-points-table.vercel.app/' className='underline italic'>CS-Cup</a> for more</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CsCup;
