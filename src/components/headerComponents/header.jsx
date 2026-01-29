import React from 'react';

import NavButtons from './navButtons.jsx'
import { useState } from 'react';
import LogoBox from './logoBox.jsx'

const header = () => {
  return (
    <div className=' flex justify-between xl:h-[96px] h-[86px] w-[100%] xl:mt-[40px] mt-[0px] py-[24px] '>

      <div className=' flex items-center w-[40%]'>

          <LogoBox/>
        
      </div>
      
       <NavButtons />
    </div>
  );
}

export default header;
