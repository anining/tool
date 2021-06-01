import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import HomeView from '../view/Home';

function Home() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home/">
          <HomeView />
        </Route>
        <Route exact path="/home/">
          <HomeView />
        </Route>
        <Redirect to="/home/" />
      </Switch>
    </>
  )
}

export default Home;
