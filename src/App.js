import './App.css';

import LoginPage from './pages/LoginPage';
import Questionnaire from './pages/Questionnaire';
import QuestList from './pages/QuestList';
import QuestAnswer from './pages/QuestAnswer';
import MyQuests from './pages/MyQuests';
import Redirect from './pages/Redirect';

import history from './History';

import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
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
            <Redirect />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
