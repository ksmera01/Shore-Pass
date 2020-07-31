import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/transaction">
            <Transaction />
          </Route>
          <Route path="/pricing">
            {/* <Dashboard /> */}
          </Route>
          <Route path="/dashboard" >
            <Dashboard />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
