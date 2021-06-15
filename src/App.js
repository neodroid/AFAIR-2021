import React from 'react';
import GlobalStyle from './GlobalStyles';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import ToTop from './Utils/ToTop';

import Landing from './components/pages/Landing';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      {/* <ToTop> */}
      <GlobalStyle />
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/about' component={About} exact />
        
      </Switch>
      {/* <Footer /> */}
      {/* </ToTop> */}
    </Router>
  );
}

export default App;
