import React from 'react';
import MainNavbar from './MainNavbar'
import Home from './pages/Home';
import PopularGithub from './pages/PopularGithub';
import {
  Container
} from "reactstrap";
import CrudTodos from './pages/CrudTodos';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Container>
        <Home />
        <PopularGithub />
        <CrudTodos />
      </Container>
    </div>
  );
}

export default App;
