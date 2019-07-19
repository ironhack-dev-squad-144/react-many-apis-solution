import React from 'react';
import MainNavbar from './MainNavbar'
import Home from './pages/Home';
import PopularGithub from './pages/PopularGithub';
import {
  Container
} from "reactstrap";
import CrudTodos from './pages/CrudTodos';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Container>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/popular-github" component={PopularGithub} />
        <Route path="/crud-todos" component={CrudTodos} />
        <Route render={() => <h1>404</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
