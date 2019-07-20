import React from "react";
export class Resume extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      viewResumeText: props.resumeText,
      loading: false
    }
  }
  downloadResume($event) {
    this.setState({
      loading: true
    });
    const url = `https://neerajpro-profile.herokuapp.com/resume.pdf`;
    window.open(url, "_blank");
    this.setState({
      loading: false,
    })
  }
  render() {
    return (<a className={`button is-warning ${this.state.loading ? 'is-loading' : ''}`} onClick={this.downloadResume.bind(this)}>{this.state.viewResumeText}</a>)
  }
}
