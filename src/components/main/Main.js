import { useContext, useState, useRef } from 'react';
import ToDoListItem from '../to-do-list-item/To-do-list-item';
import Footer from '../footer/Footer';
import { moonIcon, sunIcon } from '../../assets/icons';
import { Context } from '../../context';
import { filterHandler } from '../../utilities/data';

const Main = ({ isLoading }) => {
  const [name, setName] = useState('');
  const [showIcon, setShowIcon] = useState(true);

  const { state, dispatch } = useContext(Context);

  const data = filterHandler(state.data, state.filter);

  const changeHandlerInput = e => {
    setName(e.target.value);
  };

  const addFormHandler = e => {
    e.preventDefault();
    if (name === '') return;
    const data = { name: name };
    dispatch({ type: 'ON_ADD_FORM', payload: data });
    setName(''); 
  };

  const modeHandler = () => {
    document.documentElement.classList.toggle('dark');
    setShowIcon(prev => !prev);
  };

  const clearInput = () => {
    setName('');
  };

  return (
    <div className='bg-desktop-light h-[35dvh] max-md:h-[29dvh] bg-no-repeat bg-cover dark:bg-desktop-dark'>
      <div className='container flex justify-center'>
        <div className='w-full max-w-[540px] mt-[70px] max-md:mt-[52px]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[#fff] font-bold text-[2.5rem] max-md:text-[30px]'>TODO</h1>
            <button id='mode-toggler' type='button' onClick={modeHandler}>
              {showIcon ? (
                <img src={sunIcon} alt="Sun icon" />
              ) : (
                <img src={moonIcon} alt="Moon icon" />
              )}
            </button>
          </div>
          <form onSubmit={addFormHandler} className='mt-12 mb-6 flex items-center special-background max-md:py-[15px] max-md:px-[18px] bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue border border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2'>
            <div className='w-6 h-6 rounded-full bg-transparent border border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2'></div>
            <input type="text" className='to-do-input ms-5 w-[90%] bg-bgTransparent border-none outline-none text-base placeholder:text-dark-darkGrayishBlue text-dark-veryDarkDesaturatedBlue dark:text-dark-lightGrayishBlue' placeholder='Create a new todo' onChange={changeHandlerInput} value={name} />
          </form>
          {isLoading && <div className='flex justify-center mb-3'>
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brightBlue border-r-bgTransparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status">
                <span
                  className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                >Loading...</span>
              </div>
            </div>} 
          <ul className='shadow-shadow'>
            {data.map(item => (
              <ToDoListItem key={item.id} id={item.id} name={item.name} completed={item.completed} clearInput={clearInput} />
            ))}
          </ul>
          <Footer isMobile={false} />
          <Footer isMobile={true} />
        </div>
      </div>
    </div>
  );
};

export default Main;
