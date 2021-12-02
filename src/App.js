
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import TodoContainer from "./TodoContainer";
import  './App.css'

function App() {
  
  return (
    <Router>
      
      <Navigation />
      <Switch>
        <Route exact path="/work">
          <TodoContainer tableName="Work" />
        </Route>
        <Route exact path="/personal">
          <TodoContainer tableName="Personal" />
        </Route> 
        <Route exact path="/gaming">
          <TodoContainer tableName="Gaming" />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
