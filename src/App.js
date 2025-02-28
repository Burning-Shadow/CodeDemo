import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Link } from "react-router-dom";
import TodoList from "./pages/TodoList";

function App(props) {
  return (
    <div className="App">
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/nomatch">NoMatch</Link>
            </li>
          </ul>
        </Router>
        <hr />
        {props.children}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
