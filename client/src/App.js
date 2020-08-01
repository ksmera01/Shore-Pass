import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { UserContext } from './context/UserContext'
import { TransactionContext } from './context/TransactionContext'
import Nav from "./components/Nav";
import Pricing from './pages/Pricing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import LandingPage from './pages/LandingPage';

function App() {

  // PIPING IS IN PLACE FOR USECONTEXT, HOWEVER NOT NECESSARY AT THE MOMENT...
  // const [user, setUser] = useState({})
  // const userData = useMemo(() => ({ user, setUser }), [user, setUser])

  // Initialize cart context state, give it a simple variable called transactionData
  const [cart, setCart] = useState({})
  const transactionData = useMemo(() => ({ cart, setCart }), [cart, setCart])


  return (
    <Router>
      <div>
        {/* <UserContext.Provider value={user, setUser}> */}
        <TransactionContext.Provider value={transactionData}>
          <Nav />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
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
        </TransactionContext.Provider>
        {/* </UserContext.Provider> */}
      </div>
    </Router>
  );
}

export default App;
