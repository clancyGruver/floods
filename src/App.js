import Main from './pages/Main';
import Card from './pages/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>  <Main /> </Route>
      <Route path="/reservoire/:id" exact>  <Card /> </Route>
    </Switch>
  </Router>
);

export default App;