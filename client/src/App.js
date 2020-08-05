import React, { useMemo, useState, useEffect } from "react";
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
import API from './utils/API'


function App() {

  // CONTEXT SETUP FOR APP COMPONENTS, define variables to pass context down as userData and transacationData
  const [user, setUser] = useState({})
  const userData = useMemo(() => ({ user, setUser }), [user, setUser])
  const [cart, setCart] = useState({})
  const transactionData = useMemo(() => ({ cart, setCart }), [cart, setCart])

  // In React, if a user refreshes the site, we need to tell our app to reset the user context to the token in local storage, otherwise leave it undefined
  const getUserId = async () => {
    // Check localstorage for a user id token, if it doesn't exist forget it, otherwise fetch user data and set user context
    let userId = await JSON.parse(localStorage.getItem('user_id_SP'))
    if (!userId) {
      return;
    } else {
      API.findUserId(userId)
        .then(res => {
          setUser(res.data)
        })
        .catch(err => console.log(err));
    }
  }

  useEffect(() => {
    getUserId()
  }, [])

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
              </Route>
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