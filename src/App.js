import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Blog from "./pages/Blog.js";
import About from "./pages/About";
import Error from "./pages/Error.js";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={() => <Blog id="1" />} exact />
            <Route path="/about" component={About} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
