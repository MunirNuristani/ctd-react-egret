import React from 'react';
import AddTodoList from './AddTodoForm';
import TodoList from './TodoList';

function useSemiPresistentState () {
  const[todoList, setTodoList] = (
    React.useState(localStorage.getItem('savedTodoList')? 
    JSON.parse(localStorage.getItem('savedTodoList')):
    []))

  React.useEffect(() => localStorage.setItem(
    'savedTodoList', 
    JSON.stringify(todoList)
    )
  )
  return [todoList, setTodoList]
}



function App() {
  const [todoList, setTodoList] = useSemiPresistentState()
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
      <TodoList todoList = { todoList } onRemoveTodo = {removeTodo}/>
      
    </div>
  );
}
export default App;
