import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LandingPage } from "./pages/landing-page";
import { ProfessionalSignUpPage } from "./pages/professional-sign-up";
import { EmailSuccessPage } from "./pages/email-success";
import { EmailSignInPage } from "./pages/sign-in";
import { CompanySignUpPage } from "./pages/company-sign-up";

import './antd.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/professional/create" component={ProfessionalSignUpPage} />
        <Route exact path="/company/create" component={CompanySignUpPage} />
        <Route exact path="/create/success" component={EmailSuccessPage} />
        <Route exact path="/manage" component={EmailSignInPage} />
      </Switch>
    </Router>
  );
}

export default App;
