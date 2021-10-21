import React, {useState, useEffect} from 'react';
import AddTodoList from './AddTodoForm';
import TodoList from './TodoList';


function App() {
  const[todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const parseTodoList = localStorage.getItem('savedTodoList') ? JSON.parse(localStorage.getItem('savedTodoList')): [] 

  useEffect(() => {
    new Promise ((resolve, reject) => {
      setTimeout(()=> {resolve( {data: { todoList: parseTodoList}})
    }, 2000)
  }).then ((result)=> {
    setTodoList(result.data.todoList)
    setIsLoading(false)
  })
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [isLoading, todoList]
  )
  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo] )
  }
  
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo)=> todo.id !== id)
    setTodoList(newTodoList)
  }
 

  
  return (
    <div>
      <h1> Todo List</h1>
      <AddTodoList onAddTodo={ addTodo } />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
      
    </div>
  );
}
export default App;
