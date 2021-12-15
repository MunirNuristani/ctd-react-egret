import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/work">
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
