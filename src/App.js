import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// Redux 

import LearnersList from './components/LearnersList';
import LearnersDetail from './components/LearnersDetail';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>

            <Route exact path="/">
                <Redirect to="/learners-list" />
            </Route>

            <Route exact path="/learners-list">
                <LearnersList />
            </Route>

            <Route exact path="/learners-list/Detail/:id">
                <LearnersDetail />
            </Route>

            <Route exact path="/login">
                <LoginPage />
            </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
