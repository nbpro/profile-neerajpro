import React from "react";
import { Helmet } from "react-helmet";
import "./style.scss";
import Navigation from "../../components/Navigation/Navigation";
import gainsightlogo from "./../../images/gainsightlogo.png";
import frontend from "../../images/frontend_engineering-1.png";
import Skills from "../../components/Skills";
import SkillListItems from "../../components/skillListItems"
export default class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [
        {
          id: 'html',
          details: {
            heading: '1. HTML & CSS',
            description: 'HTML & CSS is the backone for frontend developer, its the base and structure on which all UI applications revolve. I used HTML5 and CSS3 and Sass as css preprocessor for my daily work.',
            images: []
          }
        },
        {
          id: 'JS',
          details: {
            heading: '2. Javascript',
            description: 'Javascript is inevitable for interactive frontend development.After playing with Vanilla Javascript and Jquery, I moved to Backbone JS.I am now prominent in both Angular(2+) &  React. This website is built in react',
            images: [],
          }
        },
        {
          id: 'Tools',
          details: {
            heading: '3. Tools of my choice',
            description: 'Internet is full of developer friendly tools that ease the job of frontend devlopment.',
            images: []
          }
        }
      ]
    }
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
                <div className="column is-half">
                  <div className="content">
                    <img src={frontend} alt="frontend" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr></hr>
          <section className="section is-small">
            <div className="container">
              <h6 className="title is-size-6 is-spaced">
                <span className="shadow is-purple is-spaced">My frontend professional core</span>
              </h6>
              <div className="hr"></div>
              <div className="columns">
                <Skills items={this.state.skills} component={SkillListItems} />
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}
