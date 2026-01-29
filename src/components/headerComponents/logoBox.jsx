import React from 'react';
import Logo from '../../assets/images/logo.svg'

const logoBox = () => {
  return (
    
      
        <div className='flex justify-center items-center xl:ml-[55px] ml-[24px]'>
          <img src={Logo} alt="" className='xl:w-[48px] h-[40px] xl:h-[48px] h-[40px] '/>
        </div>
    
  );
}

export default logoBox;
