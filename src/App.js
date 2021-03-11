import Main from './pages/Main';
import Card from './pages/Card';
import ReservoireView from './pages/ReservoireView';
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
      <Route path="/reservoireView/:id" exact>  <ReservoireView /> </Route>
    </Switch>
  </Router>
);

export default App;