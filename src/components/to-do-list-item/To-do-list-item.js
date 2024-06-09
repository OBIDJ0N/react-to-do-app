import { useContext } from 'react'
import { crossIcon, checkIcon } from '../../assets/icons'
import './to-do-list-item.css'
import { Context } from '../../context'


const ToDoListItem = ({ name, id, completed, clearInput }) => {
    const { _, dispatch } = useContext(Context)

    const onDelete = () => {
        dispatch({ type: 'ON_DELETE', payload: id })
    };

    const onComplete = () => {
        dispatch({ type: 'ON_COMPLETE', payload: id })
    }

    const onEdit = () => {
        const input = document.querySelector('.to-do-input');
        input.value = name;
        input.focus();

        const handleSave = () => {
            const newName = input.value;
            if (newName.trim() === '') return;
            dispatch({ type: 'ON_EDIT', payload: { id, name: newName } });
            input.removeEventListener('blur', handleSave);
            input.removeEventListener('keydown', handleEnter);
            input.removeEventListener('touchend', handleSave);
            clearInput(); 
        };

        const handleEnter = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                input.blur();
            }
        };

        input.addEventListener('blur', handleSave);
        input.addEventListener('keydown', handleEnter);
        input.addEventListener('touchend', handleSave);
    };
    return (
        <li className='to-do flex items-center special-background max-md:py-[15px] max-md:px-[18px] bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue text-dark-darkGrayishBlue border border-light-veryLightGrayishBlue rounded-none dark:border-dark-veryDarkGrayishBlue2 cursor-pointer'>
            <button type='button' className='check-btn flex justify-center items-center w-6 h-6 rounded-full border border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2 duration-500 ease-out' onClick={onComplete}>
                {completed ? (
                    <img src={checkIcon} alt="tick" />
                ) : (
                    null
                )}
            </button>
            <p className='w-[400px] ms-5 max-md:text-[15px] text-base text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue break-all'>{name}</p>
            <div className='ml-auto flex'>
                <button className='w-5 ml-2 mr-5 edit-btn' onClick={onEdit}>
                    <svg className='dark:fill-dark-veryDarkGrayishBlue duration-500 ease-out scale-0 opacity-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
                </button>
                <button className='delete-btn' onClick={onDelete}>
                    <img src={crossIcon} className='opacity-0 duration-500 ease-out scale-0' alt="Remove item" />
                </button>
            </div>
        </li>
    )
}

export default ToDoListItem