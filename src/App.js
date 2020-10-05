import React, { createContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Loogin/Home/Home';
import Loogin from './Component/Loogin/Loogin';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Registered from './Component/Registered/Registered';
import RegisterVolentear from './Component/RegisterVolentear/RegisterVolentear';
import Volenteer from './fakedata/volentear';

export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({});
  const VInfo = Volenteer;

  // useEffect( () => {
  //   fetch('VIinfo')
  //   .then(data => data.json())
  //   .then(res =>console.log(res))
  // })

  return (
    <>

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

           

            <Route path="/loogin">
              <Loogin></Loogin>
            </Route>

            <PrivateRoute path="/registration/:id">
              <RegisterVolentear></RegisterVolentear>
            </PrivateRoute>

            <Route path="/registered">
              <Registered></Registered>
            </Route>
            <Route>

              {
                VInfo.map(ifo => <Home information={ifo}> </Home>)
              }
            </Route>

            

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>

      </UserContext.Provider>
    </>
  );
};

export default App;





