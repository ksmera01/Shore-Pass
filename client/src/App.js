import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { UserContext } from './context/UserContext'
import Nav from "./components/Nav";
import Pricing from './pages/Pricing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'

function App() {

  // PIPING IS IN PLACE FOR USECONTEXT, HOWEVER NOT NECESSARY AT THE MOMENT...
  // const [user, setUser] = useState({})
  // const userData = useMemo(() => ({ user, setUser }), [user, setUser])


  return (
    <Router>
      <div>
        {/* <UserContext.Provider value={user, setUser}> */}
        <Nav />
        <Switch>
          {/* <Route exact path="/">
              <Dashboard />
            </Route> */}
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route path="/transaction">
            <Transaction />
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
        {/* </UserContext.Provider> */}
      </div>
    </Router>
  );
}

export default App;
