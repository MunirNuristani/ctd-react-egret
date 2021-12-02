import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'


const InputWithLabel = ( { todoTitle, todoDate, todoPriority, handleTitleChange, handleDateChange, handlePriorityChange, children}) => {
    const inputRef = useRef()
    const today = new Date();

    useEffect(() => {
        inputRef.current.focus();
    });
  

    const Priorities = [
        {label: "High", value: "High"},
        {label: "Medium", value: "Medium"},
        {label: "Low", value: "Low"}
    ]
    return(
    <>
        <label htmlFor="todoTitle" className="mainLabel"> {children} </label>
        
            <input
                ref={ inputRef }
                autoFocus
                required
                type="text" 
                id="todoTitle" 
                name="title"
                value = { todoTitle} 
                onChange = {handleTitleChange}
                placeholder = "&#xF03A; Enter Task Here!" 
                style={{fontFamily:'FontAwesome, Open Sans', fontSize:'1.2rem'}} 
                >
            </input>
         <label htmlFor="priority"  className="label1">  Periority: </label>
            <Select 
                
                value={todoPriority}
                isSearchable
                className="priority" 
                name="priority" 
                onChange = { handlePriorityChange} placeholder="Select Priority "
                options={
                    Priorities
                }
            />     
               
        <label htmlFor='dueDate' className="label2" > Due by:</label>
            <DatePicker
                required
                autoComplete = 'false'
                selected = { todoDate? todoDate : today }
                className = "dueDate"
                name = "dueDate"
                onChange = { handleDateChange }
            />
    </>        
    )
}

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string.isRequired,
    todoDate: PropTypes.string,
    todoPriority: PropTypes.string,
    handleDateChange: PropTypes.func.isRequired,
    handlePriorityChange: PropTypes.func.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}

export default InputWithLabel;