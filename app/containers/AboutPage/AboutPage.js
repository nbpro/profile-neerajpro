import React from "react";
import { Helmet } from "react-helmet";
import "./style.scss";
import Navigation from "../../components/Navigation/Navigation";
import gainsightlogo from "./../../images/gainsightlogo.png";

export default class AboutPage extends React.Component {
  constructor(props){
    super(props)
  }
  shouldComponentUpdate() {
    return false;
  }
  navigateToGainsightPage() {
    const url = `https://www.gainsight.com`;
    window.open(url, `_blank`);
  }
  render() {
    return (
      <article>
        <Helmet>
          <title>Neerajpro | Front-end Developer</title>
          <meta
            name="description"
            content="Neerajpro | Neeraj Kumar | Neeraj Goswami"
          />
          <meta
            name="description"
            content="Angular Developer | React Developer | UI Developer in Bangalore"
          />
        </Helmet>
        <div className="about-page">
          <Navigation />
          <section className="section is-small">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-half">
                  <div className="content">
                    <h1 className="title is-4">
                      I'm a senior engineer who builds products & solutions at{" "}
                      <img
                        src={gainsightlogo}
                        className="gainsight-logo"
                        onClick={this.navigateToGainsightPage}
                      />.
                    </h1>
                    <p className="description">
                      Since beginning my journey as Front-end Engineer nearly 5 years ago, I have worked with starups and product companies.
                      I love doing simple things in most beautiful way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}
