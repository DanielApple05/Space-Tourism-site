import React from 'react';
import Header from '../components/headerComponents/header.jsx'
import Background from '../assets/images/background-home-desktop.jpg'
import { Link } from 'react-router-dom';




const Home = () => {

  return (
    <div className="min-h-screen  bg-cover flex flex-col "
      style={{ backgroundImage: `url(${Background})` }} >


      <Header />



      <div className='flex flex-1 justify-center pt-[128px] '>
        <div className=' flex px-[165px] py-[128px] '>





          <div className=' flex    text-white  w-[100%] gap-[5%]'>
            <div className=' w-[45%] '>

              <h3 className='text-[28px] ' >SO YOU WANT TO TRAVEL TO</h3>


              <span className=' text-[120px] tracking-widest'> SPACE</span>



              <p>  Let's face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we'll give you a truly out of this world experience!</p>

            </div>



            <div className='w-[50%] flex flex-row-reverse my-[35px]'>
              <div className=' bg-white  rounded-full flex items-center justify-center w-[200px] h-[200px] cursor-pointer '>
                <p className='text-4xl text-black'>EXPLORE</p>
              </div>
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
