import PropTypes from "prop-types";
import React, { Component } from "react";
import { Header, Responsive, Segment, Visibility } from "semantic-ui-react";

import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";
import Members from "./components/Members";
import Footer from "./components/Footer";
import Support from "./components/Support";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <Responsive>
        <Visibility once={false}>
          <Segment
            inverted
            color="teal"
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Navbar />
            <HomeHeader />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const About = () => (
  <Segment style={{ padding: "4em 0em" }} vertical id="about">
    <Header as="h1" textAlign="center">
      درباره من
    </Header>
    <Header as="h4" textAlign="center">
      من هادی وحید هستم.
    </Header>
  </Segment>
);

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Members />
    <About />
    <Support />
    <Footer />
  </ResponsiveContainer>
);

export default HomepageLayout;
