import React from 'react';
import { Helmet } from "react-helmet";
import "./style.scss";
import Navigation from "../../components/Navigation/Navigation";
export default class contactMe extends React.Component {
  constructor() {
    super();
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
        <div className="contact-me">
        <Navigation/>
          <section className="section is-small">
            <div className="container">
              <div className="columns">
                <div className="column is-one-third">
                  <a className="button is-white"><i className="far fa-envelope"></i><span></span></a>
                  <a className="button is-white">nbneeraj8@gmail.com</a>
                </div>
                <div className="column is-one-third custom-style-twitter">
                  <a className="button is-white"><i className="fab fa-twitter"></i><span></span></a>
                  <a className="button is-white">@neerajpro</a>
                </div>
                <div className="column is-one-third">
                  <a className="button is-white"><i className="fab fa-linkedin-in"></i><span></span></a>
                  <a className="button is-white">neeraj kumar</a>
                </div>
              </div>
            </div>
          </section>
          <section className="is-white">
            <div className="container">
              <form id="contact-form">
                <div className="columns is-centered">
                  <div className="column is-half">
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control is-expanded">
                        <input className="input is-medium" name="name" type="text" required/>
                      </div>
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control is-expanded">
                        <input className="input is-medium" name="email" type="email" required/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column">
                    <label className="label">Message</label>
                    <div className="control is-expanded">
                      <textarea className="textarea is-large" name="message" rows="5" required>
                      </textarea>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column is-2 is-offset-10">
                    <div className="field">
                      <div className="control">
                        <button className="button is-primary is-medium is-outlined">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </article>);
  }
}
