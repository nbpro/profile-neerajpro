import React from "react";
import Logo from "../logo";

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }
  render() {
    return (
      <section>
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Logo />
              <a role="button" className={`navbar-burger ${this.state.addClass ? "is-active" : ''} `} onClick={this.toggle.bind(this)} aria-label="menu" aria-expanded="false" data-target="#navMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className={`navbar-menu ${this.state.addClass ? "is-active" : ''}`} id="navMenu">
              <div className="navbar-end">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Projects</a>
                <a className="navbar-item">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }

};
export default Navigation;
