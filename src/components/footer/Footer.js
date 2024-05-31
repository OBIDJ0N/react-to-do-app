import React from 'react';

const Footer = ({ dataLength, filter, btnArr, updateFilterHandler, clearCompleted, isMobile }) => (
  <div className={`flex footer items-center ${isMobile ? 'mt-[15px] justify-center' : 'justify-between'} special-background max-md:py-[15px] max-md:px-[18px] bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue text-dark-darkGrayishBlue border border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2 rounded-s-[5px] rounded-r-[5px] rounded-t-none shadow-shadow ${isMobile ? 'md:hidden' : ''}`}>
    {!isMobile && <p className='text-[14px]'>{dataLength} item(s) left</p>}
    <div>
      {btnArr.map(btn => (
        <button
          type='button'
          key={btn.name}
          onClick={() => updateFilterHandler(btn.name)}
          className={`${filter === btn.name ? 'text-brightBlue' : 'text-dark-darkGrayishBlue'} hover:text-light-veryDarkGrayishBlue mx-2 font-bold dark:hover:text-light-veryLightGrayishBlue ${isMobile ? '' : 'max-md:hidden'}`}
        >
          {btn.name}
        </button>
      ))}
    </div>
    {!isMobile && <button onClick={clearCompleted} className='text-[14px] hover:text-light-veryDarkGrayishBlue dark:hover:text-light-veryLightGrayishBlue'>Clear Completed</button>}
  </div>
);

export default Footer;
