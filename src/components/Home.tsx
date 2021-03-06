import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import HomeView from '../view/Home';

function Home() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home/home1">
          <HomeView />
        </Route>
        <Route exact path="/home/home2">
          <HomeView />
        </Route>
        <Redirect to="/home/" />
      </Switch>
    </>
  )
}

export default Home;
