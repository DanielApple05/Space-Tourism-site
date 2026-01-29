import React from 'react';

import NavButtons from './navButtons.jsx'
import { useState } from 'react';
import LogoBox from './logoBox.jsx'

const header = () => {
  return (
    <div className=' flex justify-between  w-[100%] xl:mt-[40px] mt-[0px] xl:py-[0px] py-[24px] '>

          <LogoBox/>
      
       <NavButtons />
    </div>
  );
}

export default header;
