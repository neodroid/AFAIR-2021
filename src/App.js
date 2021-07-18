import React from "react";
import GlobalStyle from "./GlobalStyles";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ToTop from "./ToTop";

import Landing from "./components/pages/Landing";
import Concept from "./components/pages/Concept";
import Competition from "./components/pages/Competition";
import Event from "./components/pages/Event";
import Contact from "./components/pages/Contact";

import Navbar from "./components/navbar/Navbar";

function App() {
  const ExternalRedirect = ({ to, ...routeProps }) => {
    return <Route {...routeProps} render={() => (window.location = to)} />;
  };

  return (
    <Router>
      <ToTop>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/concept" component={Event} exact />
          <Route path="/competition" component={Competition} exact />
          <Route path="/event" component={Concept} exact />
          <Route path="/contact" component={Contact} exact />
          <ExternalRedirect
            path="/register"
            to="https://docs.google.com/forms/d/e/1FAIpQLSexJ21YDhMEDf1H9buh44lBqkof5CU759BIkhSYVevpe31TCw/viewform"
            exact
          />
          <ExternalRedirect
            path="/tor"
            to="https://drive.google.com/u/0/uc?id=12LfyaSDO3rShEC6sqg_8bo97_3rAeOLo&export=download"
            exact
          />
        </Switch>
        {/* <Footer /> */}
      </ToTop>
    </Router>
  );
}

export default App;
