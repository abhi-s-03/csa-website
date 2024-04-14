import React, { useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Event1 from '../assets/images/achievements.jpg';
import Event2 from '../assets/images/achievements.jpg';
import Navbar from '../components/Navbar';
import background from '../assets/images/bg1.png';

const studentEvents = [
  {
    id: 1,
    image: Event1,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
  },
  {
    id: 2,
    image: Event2,
    Name: 'Jane Doe',
    Year: '2022-2023',
    description: 'Student',
  },
  {
    id: 3,
    image: Event1,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'Student',
  },
  {
    id: 4,
    image: Event2,
    Name: 'Jane Doe',
    Year: '2022-2023',
    description: 'Student',
  }
];

const facultyEvents = [
  {
    id: 1,
    image: Event1,
    Name: 'Devil Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  },
  {
    id: 2,
    image: Event2,
    Name: 'Jane Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  },
  {
    id: 3,
    image: Event1,
    Name: 'John Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  },
  {
    id: 4,
    image: Event2,
    Name: 'Jane Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  }
];

function Events() {
  const swiperRef = useRef(null);
  const [showStudentEvents, setShowStudentEvents] = useState(true);

  React.useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        initialSlide: 0,
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1, // Display three items at a time
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        breakpoints: {
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 3,
          },
        }

      });
    }
  }, []);

  const handleStudentClick = () => {
    setShowStudentEvents(true);
  };

  const handleFacultyClick = () => {
    setShowStudentEvents(false);
  };

  return (
    <div className='achievements min-h-screen bg-pattern bg-repeat '>
      <Navbar textColor="black" />
      <div className='p-10 pt-44 items-center flex flex-col'>
        <div className="text-4xl sm:text-5xl lg:text-6xl text-center mb-4 font-bold">Achievements</div>
        <div className='items-center m-0 flex flex-row justify-center'>
          <button className={`text-xl sm:text-2xl font-semibold ${showStudentEvents ? 'text-black ' : 'text-gray-500'}`} onClick={handleStudentClick}>Student</button>
          <button className={`text-xl sm:text-2xl font-semibold ${!showStudentEvents ? 'text-black ' : 'text-gray-500'}`} onClick={handleFacultyClick}>Faculty</button>
        </div>
        <div className='mx-4 mt-7 relative flex flex-row justify-center swiper-container space-x-4 sm:mx-24'>
          <button className="bg-transparent rounded-full text-[#525252] max-w-6 self-center" onClick={() => swiperRef.current.swiper.slidePrev()}>
            <FaAngleLeft className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
          <div className="swiper-container " ref={swiperRef} style={{ padding: '0 ', overflow: 'hidden' }}>
            <div className="swiper-wrapper my-4">
              {(showStudentEvents ? studentEvents : facultyEvents).map((event) => (
                <div className="swiper-slide bg-transparent items-center w-[380px] h-[350px] rounded-3xl relative expand-container transition-all duration-300 hover:scale-110" key={event.id}>
                  <div className="absolute m-auto left-0 right-0 z-10">
                    <img className="w-[300px] m-auto bg-transparent h-[279px] rounded-3xl" src={event.image} alt={event.Year} />
                    <h2 className="text-center bg-transparent text-black font-medium text-base">{event.Name}</h2>
                    <h2 className="text-center bg-transparent text-[#7A8193] text-xs font-normal">{event.Year}</h2>
                    <p className="text-center bg-transparent text-[#7A8193] font-normal text-xs">{event.description}</p>
                  </div>
                  <div className='h-[101px]'></div>
                  <div className="flex flex-col items-center justify-between h-[250px] bg-white rounded-xl"></div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <button className="rounded-full max-w-6 self-center" onClick={() => swiperRef.current.swiper.slideNext()}>
            <FaAngleRight className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;

