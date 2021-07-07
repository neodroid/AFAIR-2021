import React from "react";
import GlobalStyle from "./GlobalStyles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import ToTop from './Utils/ToTop';

import Landing from "./components/pages/Landing";
import Concept from "./components/pages/Concept";
import Competition from "./components/pages/Competition";
import Event from "./components/pages/Event";

function App() {
  return (
    <Router>
      {/* <ToTop> */}
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/concept" component={Concept} exact />
        <Route path="/competition" component={Competition} exact />
        <Route path="/event" component={Event} exact />
      </Switch>
      {/* <Footer /> */}
      {/* </ToTop> */}
    </Router>
  );
}

export default App;
