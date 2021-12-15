import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { RiAddFill } from 'react-icons/ri'
import './style.css'
import AddModal from './AddModal';



const InputWithLabel = ({ todoTitle, todoDate, handleTitleChange, handleDateChange, handleAdd, selectForm, }) => {
    const [disableInput, setDisableInput] = useState(true)
    const [show, setShow] = useState(false)
    const inputRef = useRef()
    const today = new Date();
    useEffect(() => {
        inputRef.current.focus();
    });

    const Add = (e) => {
        handleAdd(e)
        setDisableInput(true)
    }
    const handleShow = () => setShow(true)
    const handleHide = () => setShow(false)
    return (
        <>
            <div className="main-input"  >
                    <div className={`input-div ${disableInput ? '' : 'active'}`} >
                    <div onClick={() => setDisableInput(false)} >
                    <label htmlFor="todoTitle" className={`mainLabel ${disableInput ? '' : 'active'}`}><RiAddFill />
                    </label>
                        <input
                            ref={inputRef}
                            autoFocus
                            required
                            disabled={disableInput}
                            type="text"
                            id="todoTitle"
                            name="title"
                            value={todoTitle}
                            onChange={handleTitleChange}
                            placeholder="Add a task"
                            className='task-input-area active'
                        >
                        </input>
                    </div>
                </div>
                <div className={`due-date-div ${disableInput ? '' : 'active'}`}>
                    <label htmlFor='dueDate' className="due-date-label" > Due by:</label>
                    <DatePicker
                        required
                        className="due-date-picker"
                        autoComplete='false'
                        selected={todoDate ? todoDate : today}
                        name="dueDate"
                        onChange={handleDateChange}
                    />
                    <button className='main-input-button' onClick={handleShow} type='button'>
                        Add
                    </button>
                    <AddModal show={show} onHide={handleHide} selectForm={selectForm} add={Add} />
                </div>
            </div>
        </>
    )
}

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string.isRequired,
    todoDate: PropTypes.string,
    handleDateChange: PropTypes.func.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleAdd: PropTypes.func.isRequired,
    selectForm: PropTypes.func.isRequired,
}
export default InputWithLabel;