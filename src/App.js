import React from 'react';
import TopNavbar from './components/header/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home'
import Companies from './containers/companies';
import Malls from './containers/malls';
import {Container} from 'reactstrap';

function App() {
  return (
    <Router>
      <div>
        <TopNavbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/companies" component={Companies} />
            <Route path="/malls" component={Malls} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
