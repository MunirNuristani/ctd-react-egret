import React from 'react';
const todoList = [
  {
    id: 1,
    title: "Fork the Assignment"
  },
  {
    id: 2,
    title: "Complete the Assignment"
  },
  {
    id:3, 
    title: "Submit the Assignment"
  }
]

function App() {
  return (
    <div>
      <h1> Todo List</h1>
      <ul>
        {todoList.map(function(item){
          return(
            <li id ={item.id}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
export default App;
