import React, { useState, useEffect } from "react";
import AddTodoList from "./AddTodoForm";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env
        .REACT_APP_AIRTABLE_BASE_ID}/default`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        }
      }
    )
      .then(resp => resp.json())
      .then(data => {
        setTodoList(data.records);
        setIsLoading(false);
      });
  }, []);

  useEffect(
    () => {
      if (!isLoading) {
        localStorage.setItem("savedTodoList", JSON.stringify(todoList));
      }
    },
    [isLoading, todoList]
  );
  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1> Todo List</h1>
            <AddTodoList onAddTodo={addTodo} />
            {isLoading
              ? <p>Loading...</p>
              : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
          </div>
        </Route>
        <Route path="/new">
          <h1> New Todo List</h1>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
