import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing'

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
            {/* <Dashboard /> */}
          </Route>
          <Route path="/pricing">
            <Pricing />
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
