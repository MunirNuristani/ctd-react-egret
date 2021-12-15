import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import "./style.css";
import PropTypes from "prop-types";
import Moment from "moment";

function AddTodoForm({onAddTodo}) {
  const today = Moment(new Date()).format("YYYY/MM/DD");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState(today);
  const [displayDate, setDisplayDate] = useState();
  // eslint-disable-next-line
  const [form, setForm] = useState('Work')


  const handleTitleChange = e => {
    e.preventDefault();
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleDateChange = date => {
    setDisplayDate(date);
    const myDate = Moment(date).format("YYYY/MM/DD");
    setTodoDate(myDate);
  };
 
  const selectForm = form => {
    setForm(form)
  }
  const handleAdd = event => {
    event.preventDefault();
    onAddTodo(todoTitle,  todoDate, form);
    setTodoTitle("");
    setTodoDate(today);
    setDisplayDate();
  };

  return (
    <form className="addTodo" onSubmit={handleAdd}>
      <InputWithLabel
        handleAdd={handleAdd}
        todoTitle={todoTitle}
        todoDate={displayDate}  
        handleTitleChange={handleTitleChange}
        handleDateChange={handleDateChange}
        selectForm = {selectForm}
      >
        Todo:
      </InputWithLabel>
      
    </form>
    
  );
}
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
export default AddTodoForm;
