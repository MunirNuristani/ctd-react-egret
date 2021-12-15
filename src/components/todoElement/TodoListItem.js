import { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import Moment from "moment";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { IoClose, IoStarOutline, IoStar } from 'react-icons/io5'
import DeleteModal from './DeleteModal'



const TodoListItem = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const [complete, setComplete] = useState(false);
  const [importance, setImportance] = useState(false)
  const formatedDate = Moment(todo.fields.Due_Date).format("MMM DD YYYY");
  const today = Moment(new Date()).format('MMM DD YYYY')
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const completeTask = () => setComplete(!complete);
  const handleImportance = () => {
    setImportance(!importance)
  }
 
  return (
    <>
      <li className={`ListItem ${today>formatedDate?'overDue':{}} ${importance ||todo.fields.Priority===true?'important':{}}`}>
        <div className="mainBlock ">
          <button onClick={()=>{
            completeTask()
            onUpdateTodo(todo.id, !complete,  importance, todo.fields.tableName)
          }}
             className="item-button">
            {todo.fields.Complete===true ||complete ? <BsCheckCircle /> : <BsCircle />}

          </button>
          <p className={`main-text ${complete||todo.fields.Complete ? 'complete' : ''}`} >
            {todo.fields.Title}
          </p>
        </div>

        <div className="detail-section" >
          <span className={`dueDate-section ${complete||todo.fields.Complete ? 'complete' : ''}`} >
            Due by:  <p className="dueDate"> &nbsp;{formatedDate} </p></span>
          
          <button onClick={()=>{
            handleImportance()
            onUpdateTodo(todo.id, complete,  !importance, todo.fields.tableName)
          }}
          className="mx-3" >
            {importance ||todo.fields.Priority===true ? <IoStar /> : <IoStarOutline />}
          </button>
          <button onClick={handleShow}>
            <IoClose />
          </button>
            <DeleteModal show={show} onHide={handleClose} onRemoveTodo={onRemoveTodo} id={todo.id} form={todo.fields.tableName} />
        </div>
      </li>

    </>
  );
};
TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf('undefined')
  ]),
};
export default TodoListItem;
