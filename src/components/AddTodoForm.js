import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import "./AddTodoForm.css";
import { MdAddCircle } from "react-icons/md";
import PropTypes from "prop-types";
import Moment from "moment";

function AddTodoForm(props) {
  const today = Moment(new Date()).format("YYYY/MM/DD");
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState(today);
  const [displayDate, setDisplayDate] = useState();
  const [todoPriority, setTodoPriority] = useState("");
  const [displayPriority, setDisplayPriority] = useState("");

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
  const handlePriorityChange = option => {
    setTodoPriority(option.value);
    setDisplayPriority(option);
  };

  const handleAdd = e => {
    e.preventDefault();
    props.onAddTodo(todoTitle, todoPriority, todoDate);
    setTodoTitle("");
    setTodoPriority("");
    setTodoDate(today);
    setDisplayDate();
    setDisplayPriority(null);
  };

  return (
    <form className="addTodo" onSubmit={handleAdd}>
      <InputWithLabel
        todoTitle={todoTitle}
        todoDate={displayDate}
        todoPriority={displayPriority}
        handleTitleChange={handleTitleChange}
        handleDateChange={handleDateChange}
        handlePriorityChange={handlePriorityChange}
      >
        Todo:
      </InputWithLabel>
      <button>
        {" "}<MdAddCircle />{" "}
      </button>
    </form>
  );
}
AddTodoForm.propTypes = {
  props: PropTypes.func
};
export default AddTodoForm;
