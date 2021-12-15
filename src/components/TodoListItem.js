import React from "react";
import "./TodoListItem.css";
import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";
import Moment from "moment";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const [complete, setComplete] = React.useState(false);
  const completeTask = () => setComplete(!complete);
  const formatedDate = Moment(todo.fields.Due_Date).format("MM/DD/YYYY");
  const taskPriority = todo.fields.Priority;
  return (
    <li className="ListItem">
      <div className="mainBlock">
        <input type="checkbox" onChange={completeTask} />
        <p style={complete ? { textDecoration: "line-through" } : {}}>
          {todo.fields.Title}
        </p>
      </div>
      <span id="priority-text">
        Priority:
        <p
          style={
            taskPriority === "High"
              ? { color: "red" }
              : taskPriority === "Medium"
                ? { color: "orange" }
                : { color: "green" }
          }
          id="priority"
        >
          {todo.fields.Priority}
        </p>
      </span>
      <span id="dueDate-text">
        Due by: <p id="dueDate"> {formatedDate} </p>
      </span>

      <button type="button" onClick={() => onRemoveTodo(todo.id)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};
export default TodoListItem;
