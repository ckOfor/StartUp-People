import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page";

import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;

// .ant-menu-horizontal > .ant-menu-submenu-selected {
//   color: #F06827;
//   border-bottom: 2px solid #F06827;
// }
