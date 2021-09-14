import React from 'react';
import AddTodoList from './AddTodoList';
import TodoList from './TodoList';


function App() {
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <div>
      <h1> Todo List</h1>
      <AddTodoList onAddTodo={setNewTodo} />
      <p>Successfully Added: {newTodo}</p>
      <TodoList />
      
    </div>
  );
}
export default App;
