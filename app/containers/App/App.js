/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";

import HomePage from "containers/HomePage/Loadable";
import FeaturePage from "containers/FeaturePage/Loadable";
import NotFoundPage from "containers/NotFoundPage/Loadable";
import AboutPage from "containers/AboutPage/Loadable";
import ContactMe from 'containers/ContactMe/Loadable';
import "./style.scss";

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s" defaultTitle="Neerajpro Website">
      <meta name="description" content="Profile for Neeraj kumar" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/connect" component={ContactMe} />
      <Route path="/about" component={AboutPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
