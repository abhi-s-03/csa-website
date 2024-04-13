import React, { useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Event1 from '../assets/images/achievements.jpg';
import Event2 from '../assets/images/achievements.jpg';
import Navbar from '../components/Navbar';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./styles/achievements.css";

const studentEvents = [
  {
    id: 1,
    image: Event1,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 1',
    registrationButton: 'Register',
  },
  {
    id: 2,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
  {
    id: 3,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
  {
    id: 4,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
  {
    id: 5,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
  {
    id: 6,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
];

const facultyEvents = [
  {
    id: 1,
    image: Event1,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of faculty event 1',
    registrationButton: 'Register',
  },
  {
    id: 2,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of faculty event 2',
    registrationButton: 'Register',
  },
  {
    id: 3,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
  {
    id: 4,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
  {
    id: 5,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
  {
    id: 6,
    image: Event2,
    Name: 'John Doe',
    Year: '2022-2023',
    description: 'This is the description of student event 2',
    registrationButton: 'Register',
  },
];

function Events() {
  const swiperRef = useRef(null);
  const [showStudentEvents, setShowStudentEvents] = useState(true);

  React.useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        initialSlide: 0,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
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
      });
    }
  }, []);

  const handleStudentClick = () => {
    setShowStudentEvents(true);
  };

  const handleFacultyClick = () => {
    setShowStudentEvents(false);
  };

  const eventsToShow = showStudentEvents ? studentEvents : facultyEvents;

  return (
    <div className='achievements'>
      <Navbar textColor="black" />
      <div className='p-10 pt-44 items-center flex flex-col'>
        <div className="text-7xl text-center mb-4 font-bold">Achievements</div>
        <div className='items-center m-4 flex flex-row justify-center'>
          <button className={`text-4xl text-center text-black font-semibold ${!showStudentEvents ? ' text-[#00000080]' : ''}`} onClick={handleStudentClick}>Student</button>
          <button className={`text-4xl text-center text-black font-semibold ${showStudentEvents ? 'text-[#00000080]' : ''}`} onClick={handleFacultyClick}>Faculty</button>
        </div>
        <div className='mx-24 relative flex flex-row justify-center swiper-container space-x-14'>
          <button className="bg-transparent rounded-full text-[#525252] ml-4 max-w-6 self-center" onClick={() => swiperRef.current.swiper.slidePrev()}>
            <FaAngleLeft className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
          <div className="swiper-container w-full md:w-10/12" ref={swiperRef} style={{padding: '0 30px', overflow: 'hidden' }}>
            <div className="swiper-wrapper">
              {eventsToShow.map((event) => (
                <div className="swiper-slide p-4 w-full max-width h-[433px] rounded-3xl" key={event.id}>
                  <div className="flex flex-col items-center bg-[#B3BBD8] p-10 rounded-3xl h-full">
                    <img className="mb-4 w-full bg-transparent h-[192px] rounded-3xl" src={event.image} alt={event.Year} />
                    <h2 className="text-center bg-transparent font-medium text-4xl mb-2">{event.Name}</h2>
                    <h2 className="text-center bg-transparent text-xl font-medium mb-2">{event.Year}</h2>
                    <p className="text-center bg-transparent text-lg mb-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <button className="mx-24  rounded-full  mr-4 max-w-6 self-center" onClick={() => swiperRef.current.swiper.slideNext()}>
            <FaAngleRight className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
