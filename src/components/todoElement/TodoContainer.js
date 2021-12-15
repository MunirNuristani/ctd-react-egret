import { useState, useEffect, useContext } from 'react';
import AddTodoForm from '../input/AddTodoForm';
import TodoList from './TodoList';
import { Hypnosis } from "react-cssfx-loading"
import PropTypes from 'prop-types'
import TaskBar from '../taskBar/TaskBar'
import { SideMenuContext, totalTaskContext, } from '../context/Context';
import './style.css'
import Moment from 'moment'

function TodoContainer({ tableName }) {
  const { showSideMenu } = useContext(SideMenuContext)
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState([])
  const today = Moment(new Date()).format("YYYY-MM-DD")
  const [workTasks, setWorkTasks] = useState([])
  const [personalTasks, setPersonalTasks] = useState([])
  const [gameTasks, setGameTasks] = useState([])
  // eslint-disable-next-line
  const { fullTaskList, setFullTaskList } = useContext(totalTaskContext)

  // const  [fullList, setFullList ] = useState([])

  useEffect(() => {
   
    function fetchAll(forms, updateList) {
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(forms)}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
          },
        })
        .then(setLoading(true))
        .then(resp => {
          if (resp.status !== 200) {
            console.log(resp.status)
            throw Error('Could not reach the servers. Please try agian later. ')
          } return resp.json()
        })
        .then(data => updateList(data.records))
        .catch(err => console.log(err.message))
    }

    Promise.all([
      fetchAll('Work', setWorkTasks),
      fetchAll('Personal', setPersonalTasks),
      fetchAll('Gaming', setGameTasks),
    ]).then(() => {
      setFullTaskList([...workTasks, ...personalTasks, ...gameTasks])
      console.log(workTasks, personalTasks, gameTasks)
    })
  
    
    const setTable = () => {
      const fullList = [...workTasks, ...personalTasks, ...gameTasks]
      if (tableName === 'Today') {
        setTodoList(fullList.filter(item => item.fields.Due_Date === today))
      } else if (tableName === 'Complete') {
        setTodoList(fullList.filter((item) => item.fields.Complete === true))
      } else if (tableName === 'Important') {
        setTodoList(fullList.filter((item) => item.fields.Priority === true))
      } else if (tableName === 'Over Due') {
        setTodoList(fullList.filter((item) => item.fields.Due_Date < today))
      } else if (tableName === 'Work') {
        setTodoList(workTasks)
      } else if (tableName === 'Personal') {
        setTodoList(personalTasks)
      } else if (tableName === 'Gaming') {
        setTodoList(gameTasks)
      }
    }
    setTable()
    setLoading(false)
    // eslint-disable-next-line
  }, [tableName, !showSideMenu, showSideMenu, !todoList,])



  const addTodo = (title, date, form) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(form)}`,
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
                Due_Date: date,
                tableName: form
              },
            },
          ],
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        (tableName === form) ? setTodoList([...todoList, data.records]) : setTodoList(todoList)
      })
  }
  const updateTodo = (id, complete, importance, form) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(form)}?records[]=${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              id: id,
              fields: {
                Complete: complete,
                Priority: importance
              },
            },
          ],
        }),
      }
    )
      .then((resp) => resp.json())
      .then(data => (data.records))

      .then((records) => {
        setTodoList(
          todoList.map(el => records.find(o => o.id === el.id) || el)
        )
      })

  }
  const removeTodo = (id, form) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${encodeURIComponent(form)}?records[]=${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.records)
        setTodoList(todoList.filter((item) => item.id !== data.records[0].id))
      })
  }
  console.log('render', todoList)
  return (
    <>

      <SideMenuContext.Provider value={{ showSideMenu }} >

        <div className={`todo-container ${showSideMenu ? 'active' : ''}`}>
          <TaskBar title={tableName} />
          <AddTodoForm onAddTodo={addTodo} className="todoForm" />
          {(loading) ? (<Hypnosis style={{ textAlign: 'center', margin: '50px auto' }} color="#0b123b" width="80px" height="80px" />) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />)}
        </div>

      </SideMenuContext.Provider>

    </>
  );
}
TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired,
}

export default TodoContainer;
