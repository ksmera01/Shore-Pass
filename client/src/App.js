import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext';
import { TransactionContext } from './context/TransactionContext';
import Nav from "./components/Nav";
import Pricing from './pages/Pricing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CheckoutRouter from './pages/CheckoutRouter';
import { createMuiTheme } from '@material-ui/core/styles';
import Validator from './pages/Validator';
import Team from './pages/Team'
import Account from './pages/Account';


function App() {

  // PIPING IS IN PLACE FOR USECONTEXT, HOWEVER NOT NECESSARY AT THE MOMENT...
  const [user, setUser] = useState({})
  const userData = useMemo(() => ({ user, setUser }), [user, setUser])

  // Initialize cart context state, give it a simple variable called transactionData
  const [cart, setCart] = useState({})
  const transactionData = useMemo(() => ({ cart, setCart }), [cart, setCart])

  return (
    <Router>
      <div>
        <UserContext.Provider value={userData}>
          <TransactionContext.Provider value={transactionData}>
            <Nav />
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route exact path="/pricing">
                <Pricing />
              </Route>
              <Route exact path="/transaction">
                <Transaction />
              </Route>
              <Route exact path="/dashboard" >
                <Dashboard />
              </Route>
              <Route exact path="/login">
                <SignIn />
              </Route>
              <Route exact path="/sign-up">
                <SignUp />
              </Route>
              <Route exact path="/checkout">
                <CheckoutRouter />
              </Route>
              <Route exact path="/privacypolicy">
                <PrivacyPolicy />
              </Route>
              <Route exact path="/team">
                <Team />
              </Route>
              {/* Need this route to expect a search params */}
              <Route path="/check">
                <Validator />
              <Route exact path="/account">
                <Account />
              </Route>
            </Switch>
          </TransactionContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
