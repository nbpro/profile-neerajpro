import React from "react";
// import { Link } from 'react-router-dom'
import "./style.scss";
import SidebarIcon from "components/sidebarIcon";

class SideBar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    isOpen: true
  };
  renderSidebar = () => {
    if (!this.state.isOpen) {
      return null;
    }
    return (
      <div className="sidebar">
        <div className="sidebar-link" />
        <div className="sidebar-link" />
        <div className="sidebar-link" />
        <div className="sidebar-link" />>
      </div>
    );
  };
// renderSidebarIcon = () {
// }
  toggleSidebar = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    return (
      <div className="sidebar-container">
        {this.renderSidebar()}
        <div className="sidebar-icon">
          {/* <SidebarIcon
            isOpen={this.state.isOpen}
            handleClick={this.toggleSidebar}
          /> */}
        </div>
      </div>
    );
  }
}

export default SideBar;
