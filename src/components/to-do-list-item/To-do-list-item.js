import React from 'react'
import { Component } from 'react'
import { crossIcon, checkIcon } from '../../assets/icons'
import './to-do-list-item.css'

class ToDoListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, completed, onDelete, completedHandler } = this.props
        return (
            <li className='to-do flex items-center special-background max-md:py-[15px] max-md:px-[18px] bg-light-veryLightGray dark:bg-dark-veryDarkDesaturatedBlue text-dark-darkGrayishBlue border border-light-veryLightGrayishBlue rounded-none dark:border-dark-veryDarkGrayishBlue2 cursor-pointer'>
                <button type='button' className='check-btn flex justify-center items-center w-6 h-6 rounded-full border border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2 duration-500 ease-out' onClick={completedHandler}>
                    {completed ? (
                        <img src={checkIcon} alt="" />
                    ) : (
                        null
                    )}
                </button>
                <p className='ms-5 max-md:text-[15px] text-base text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue'>{name}</p>
                <button className='ml-auto delete-btn' onClick={onDelete}>
                    <img src={crossIcon} className='opacity-0 duration-500 ease-out scale-0' alt="Remove item" />
                </button>
            </li>
        )
    }
}

export default ToDoListItem