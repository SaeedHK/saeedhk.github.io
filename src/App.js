import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import About from "./pages/About";
import Error from "./pages/Error";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/blog" component={() => <Blog />} exact />
            <Route path="/blog/:id" component={() => <BlogPost />} exact />
            <Route path="/about" component={About} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
