import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './view/Login';
import Home from './components/Home';

function App() {

  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Redirect to="/login" />
    </Switch>
  )
}

export default App;
