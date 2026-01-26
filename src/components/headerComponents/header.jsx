import React from 'react';

import NavButtons from './navButtons.jsx'
import { useState } from 'react';
import LogoBox from './logoBox.jsx'

const header = () => {
  return (
    <div className='mt-[40px] flex justify-between h-[96px] w-[100%] '>

      <div className=' flex items-center w-[40%]'>

          <LogoBox/>
        
      </div>
       <NavButtons />
    </div>
  );
}

export default header;
