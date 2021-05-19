import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signin from "./signin";
import Signup from "./signup";
import Home from "./home";
import Profile from "./profile";

export default function Pages() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
