import PropTypes from 'prop-types'
import React from 'react'
import picBanner from '../images/banner-time-screenshot.jpg'
import picHair from '../images/hair-cut.jpg'
import picRome from '../images/rome.jpg'
import picList from '../images/list.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">A bit about me</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <p>
            In 2017 I began learning some basic HTML and CSS, more out of
            curiosity than anything else, and the curiosity didn’t stop there.
            There’s always something just around the corner that fuels my
            interest, and I love learning new things everyday.
          </p>
          <p>
            Since then I have worked with a multitude of languages and
            frameworks, such as … [obligatory code logos]
          </p>
          <p>
            My main knowledge base is all things Shopify, thanks to my time
            working for LinedUp, a Shopify Experts agency in St Agnes. I started
            as a junior developer and quickly became familiar with the
            architecture and fluent in their templating language, Liquid. It was
            a great start which cemented the fundamentals and taught me to work
            with a team with a methodical professional approach.{' '}
          </p>
          <p>
            I’m continuing my learning all the time, and just now the flavour of
            the month is JAM (mmmmmm, jam). I have been diving into some Node
            and getting to grips with the backend of things. Namely the MERN
            stack on the back, and JAM on the front.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>

          <h3 className="project-title">Shopping lists</h3>
          <span className="project-image image">
            <img src={picList} alt="Shopping lists" />
          </span>
          <p className="project-description">
            Made with 'Create-React-App' together with a MERN stack backend.
            Users can register or login and hold their own lists which are all
            stored on MongoDB-Atlas.
          </p>
          <ul className="project-points">
            <li>React front-end, with Redux for state management.</li>
            <li>User authentication.</li>
            <li>Mongoose / Express / Node / MongoDB</li>
          </ul>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/SandyWyper/mern-shopping-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa fa-github"></span>
              <p>View the repository</p>
            </a>
            <a
              className="icon"
              href="https://safe-tor-04832.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-laptop" aria-hidden="true"></i>
              <p>Try it</p>
            </a>
          </div>
          <hr />

          <h3 className="project-title">Banner Time</h3>
          <span className="project-image">
            <img src={picBanner} alt="Banner-time screenshot" />
          </span>
          <p className="project-description">
            I created a JQuery plugin that injects sale or announcement banners
            for a scheduled time. Simply include the JavaScript file below your
            JQuery script tag, and the 'Banner' object will be available to
            initiate. Features include:
          </p>
          <ul className="project-points">
            <li>Different messages for mobile and desktop.</li>
            <li>Multiple banners can be sheduled at once.</li>
            <li>Start and finish time for each banner.</li>
            <li>Adjust time zone (UTC relative).</li>
            <li>Customise styles and transitions.</li>
          </ul>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/SandyWyper/Banner-Time"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa fa-github"></span>
              <p>View the repository</p>
            </a>
            <a
              className="icon"
              href="https://codepen.io/SandyWyper/full/yLLGzOx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-codepen" aria-hidden="true"></i>
              <p>View CodePen</p>
            </a>
          </div>
          <hr />
          <h3 className="project-title">Mop-Chop-Shop</h3>
          <span className="project-image image">
            <img src={picHair} alt="" />
          </span>
          <p className="project-description">
            This was an excercise in utilising a range of google APIs. The user
            can enter their location, or share their location to find the 5 best
            'hair-care' businesses nearby. Your resluts will be within 750
            metres and will display address, opening times, phone number,
            website, photos and reviews.
          </p>
          <ul className="project-points">
            <li>
              Utilising the Google Platform - Maps, Places, Geocode,
              Autocomplete APIs
            </li>
            <li>Webpack, Babel, JavaScript modules, Lodash.</li>
          </ul>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/SandyWyper/mop-chop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa fa-github"></span>
              <p>View the repository</p>
            </a>
            <a
              className="icon"
              href="https://sandywyper.github.io/mop-chop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-laptop" aria-hidden="true"></i>
              <p>View live</p>
            </a>
          </div>
          <hr />
          <h3 className="project-title">Roman Numeral Converter</h3>
          <span className="project-image image">
            <img src={picRome} alt="" />
          </span>
          <p className="project-description">
            A Progressive Web App with offline functionality that converts
            numbers to numerals of vice versa. All the logic is written in
            JavaScript, and will guide the user to enter a valid roman numeral
            based on their input. This uses Service Workers and can be installed
            on your homescreen. It should look, feel and function like a native
            app.
          </p>
          <ul className="project-points">
            <li>HTML / CSS / JavaScript</li>
            <li>A PWA with offline functionality.</li>
          </ul>
          <div className="project-links">
            <a
              className="icon"
              href="https://github.com/SandyWyper/Roman-Numeral-PWA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa fa-github"></span>
              <p>View the repository</p>
            </a>
            <a
              className="icon"
              href="https://sandywyper.github.io/Roman-Numeral-PWA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-laptop" aria-hidden="true"></i>
              <p>View live</p>
            </a>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Coriculum Vitae</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <h3>Skills</h3>
          <p>
            Started learning web development in 2017, and have accelerated my
            learning ever since. Experienced working with a multitude of
            languages and frameworks, with expert level knowledge and
            understanding of the Shopify ecosystem. Able to work with existing
            code bases and a variety of development environments, I can provide
            solutions to problems while ensuring my code is clean and easy to
            maintain.
          </p>
          <h3>Employment</h3>
          <h5>Junior Developer / LinedUp / May 2019 - March 2020</h5>
          <ul>
            <li>Shopify Experts</li>
            <li>Bespoke international e-commerce websites</li>
            <li>
              Extensive knowledge of Shopify and Liquid templating language
            </li>
            <li>
              Took frequently used solutions and made into reusable components
              with thorough documentation.
            </li>
          </ul>
          <h3>Education</h3>
          <p>2018 - FreeCodeCamp.org</p>
          <h4>
            Javascript Algorithms and Data Structures -{' '}
            <a href="" target="_blank" rel="noopener noreferrer">
              Certificate
            </a>
          </h4>
          <p>
            I have also completed countless other tutorials and courses on
            FreeCodeCamp, Code Academy, YouTube, etc. These can be a great
            introduction, but I learn the most by implementing tech in side
            projects or better still, professionally. I always have a couple of
            side projects on the go.
          </p>
          <p>2003 - Dundee University</p>
          <h4>Architecture - BSc</h4>
          Although I chose not to pursue a career in architecture, I left
          university with a wide range of transferable skills; working to a
          deadline, computer aided drawing and presentation, design
          consideration relating to site and brief.
          <p>Full C.V. and references available upon request.</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="post"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/sandy-wyper-6507611a7/"
                className="icon fa-linkedin-square"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sandypants4life/"
                className="icon fa-instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SandyWyper"
                className="icon fa-github"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
