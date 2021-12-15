import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { RiArrowUpDownLine } from 'react-icons/ri';



function TaskBar({title}) {
    return (
        <>
        <div className='taskbar'>
            <div className='left-section'>
                <div className='page-title'> {title}</div>
            </div>
            <button className='outline-button-primary me-3 taskbar-sort-button'>
                <RiArrowUpDownLine />
                <span>Sort</span>
            </button>
            </div>
            
        
        </>
    )
}
TaskBar.propTypes ={
    title: PropTypes.string.isRequired,
}
export default TaskBar
