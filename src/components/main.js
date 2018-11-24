import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";

const Main = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </HashRouter>
);

export default Main;
