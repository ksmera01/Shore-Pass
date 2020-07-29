import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SignInSide from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/transaction">
            {/* <Dashboard /> */}
          </Route>
          <Route exact path="/pricing">
            {/* <Dashboard /> */}
          </Route>
          <Route>
            <Dashboard path="/dashboard" />
          </Route>
          <Route exact path="/login">
            <SignInSide />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
