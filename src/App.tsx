import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LandingPage } from "./pages/landing-page";
import { ProfessionalSignUpPage } from "./pages/professional-sign-up";

import './antd.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/professional/create" component={ProfessionalSignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
