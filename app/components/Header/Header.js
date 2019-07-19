import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div>SandBox Management | Gainsight</div>
      </div>
    );
  }
}

export default Header;
