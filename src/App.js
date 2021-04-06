import './App.css';
import Questionnaire from './pages/Questionnaire';
import QuestList from './pages/QuestList';
import QuestAnswer from './pages/QuestAnswer';
import LoginPage from './pages/LoginPage';
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
