/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";
import SideBar from "../../components/sidebar/Sidebar";
import Logo from "../../components/logo";
import Navigation from "../../components/Navigation";

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Neerajpro | Frontend Developer</title>
          <meta
            name="description"
            content="Neerajpro | Neeraj Kumar | Neeraj Goswami"
          />
          <meta
            name="description"
            content="Angular Developer | React Developer | UI Developer in Bangalore"
          />
        </Helmet>
        <div className="home-page">
          <Navigation />
          <div className="section">
            <section className="hero is-white has-text-centered">
              <div className="hero-body">
                <div className="container">
                  <div className="columns is-centered">
                    <div className="column">
                      <h1 className="title is-spaced">
                        Frontend Developer | UI/UX Enthusiast
                      </h1>
                      <h2 className="subtitle is-size-4-desktop">
                        I love browsers and half of the day goes with browsers
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
