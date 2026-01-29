import React from 'react';
import Header from '../components/headerComponents/header.jsx'
import Background from '../assets/images/background-home-desktop.jpg'
import { Link } from 'react-router-dom';
import Tab from '../components/headerComponents/tabs.jsx';

const Home = ({ tab, index }) => {

  return (
    <div className=" xl:pt-[40px] pt-[0px] min-h-screen bg-norepeat bg-cover"
      style={{ backgroundImage: `url(${Background})` }} >
      <Header />
      <div className='flex flex-1 justify-center xl:pt-[128px] pt-[0px] '>
        <div className=' flex xl:px-[165px] px-[24px] xl:py-[128px] py-[24px] '>
          <div className=' flex  xl:flex grid  text-white  w-[100%] xl:gap-[5%] gap-[0px] '>
            <div className=' xl:w-[45%] w-[100%] xl:space-y-0 space-y-[24px] xl:text-left text-center'>

              <h3 className='xl:text-[28px] text-[18px] ' >SO YOU WANT TO TRAVEL TO</h3>

              <span className=' xl:text-[120px] text-[80px] tracking-widest'> SPACE</span>

              <p>  Let's face it; if you want to go to space, you might as well  genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we'll give you a truly out of this world experience!
              </p>

            </div>

            <div className=' xl:w-[50%] w-[100%] flex xl:flex-row-reverse justify-around   xl:my-[35px] my-[119px] '>


              <button className=' xl:text-4xl text-lg text-black cursor-pointer
                xl:py-[117px] py-[61px] xl:px-[68px] px-[33px]
                 bg-white rounded-full
                 hover:ring-white/40
                 hover:ring-[50px]
                '  onClick={() => tab.index[1]}

              >EXPLORE</button>

            </div>
          </div>
        </div>

        <Link
          to="/destinations"
        >
        </Link>
      </div>

    </div>
  );
}

export default Home;
