import Container from '@material-ui/core/Container'
import Header from './Header'
import Summary from './summary/Summary';
import Detailed from './detailed/Detailed';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Summary />
          </Route>
          <Route exact path="/detailed">
            <Detailed />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>

    </Container>
  );
}

export default App;
