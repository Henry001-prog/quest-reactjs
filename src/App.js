import React, { useState } from 'react';
import './App.css';

import LoginPage from './pages/LoginPage';
import Questionnaire from './pages/Questionnaire';
import QuestList from './pages/QuestList';
import QuestAnswer from './pages/QuestAnswer';
import MyQuests from './pages/MyQuests';
import Redirects from './pages/Redirect';
import NotFound from './pages/NotFound';

import history from './History';

import { Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();
  console.log('Token:', token);

  return (
    !token ?
    <Router history={history}>
      <Route>
        <Redirect to="/" />
        <LoginPage setToken={setToken} />
      </Route>
    </Router>

    :

    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/questionnaire">
            <Questionnaire />
          </Route>
          <Route path="/questlist">
            <QuestList />
          </Route>
          <Route path="/questanswer">
            <QuestAnswer />
          </Route>
          <Route path="/myquests">
            <MyQuests />
          </Route>
          <Route path="/redirect">
            <Redirects />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
