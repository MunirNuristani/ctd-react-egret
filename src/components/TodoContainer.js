import  {useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { Hypnosis }  from "react-cssfx-loading"
import PropTypes from 'prop-types'

function TodoContainer({ tableName }) {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTodoList(data.records)
        setIsLoading(false)
      })
  }, [tableName])
  
  const addTodo = (title, priority, date) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Title: title,
                Priority: priority,
                Due_Date: date,
              },
            },
          ],
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.records)
        setTodoList([...todoList, ...data.records])
      })
  }

  const removeTodo = (id) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(tableName)}?records[]=${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTodoList(todoList.filter((item) => item.id !== data.records[0].id))
      })
  }

  return (
    <>
      <h1 style={{textAlign:'center', padding:'40px 40px 20px', color:'#0b132b' }}>{tableName}</h1>
      <AddTodoForm onAddTodo={addTodo} className="todoForm"/>
      {(isLoading) ? (<Hypnosis style={{textAlign:'center', margin:'50px auto'}} color="#0b123b" width="80px" height="80px"/>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}
    </>
  );
}
TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired
}

export default TodoContainer;
