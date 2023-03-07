// Step 1: Import React
import * as React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection

} from 'gatsby-theme-portfolio-minimal';
import {Jsicon} from '../assets/jsicon.svg';
import "../styles/index.scss"


const IndexPage = () => {
  return (

    <Page>
   
    <Layout pageTitle="About Me">
      <section className="intro">
        <div className ="intro__about">
          <p>Welcome,</p>
          <p className="intro__about--drop">I’m a  professional expert well versed in web development, design, 
            multimedia production and Internet Technology. </p>
          <p>Developed/programmed numerous websites in HTML, CSS and incorporated Javascript and JQuery.</p>
          <p>My BS degree in Computer Science has developed my technical ability to pick up programming languages quite easily. </p>
          <p>Take a look at my portfolio to view my full matrix of skills. </p>
          <p>I'm making this by following the Gahtsby Tutorial.</p>
          <p>Developed/programmed numerous websites in HTML, CSS and incorporated Javascript and JQuery.</p>
          <p>My BS degree in Computer Science has developed my technical ability to pick up programming languages quite easily. </p>
          <p>Take a look at my portfolio to view my full matrix of skills. </p>
          <p>I'm making this by following the Gahtsby Tutorial.</p>
        </div>
        <div className="intro__img">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          /> 
          <img src={`../../image1.jpg`}/>
        </div>
      </section>
      <section id="skills" className="skills">
        <h1> Skills</h1>
        <h2> Web Development</h2>
        <div className="skills__container">
          <div className="skills__set">
            <img src="../images/sass.png"></img>
            <div className="skills__icon"><StaticImage alt="Sass" src="../images/sass.png"/></div>
            <div className="skills__label">Sass</div>
          </div>
          <div className="skills__set">
            <div className="skills__icon"><StaticImage alt="Sass" src="../images/javascript.gif"/></div>
            <div className="skills__label">Javascript</div>
          </div>  
          <div className="skills__set">
            <div className="skills__icon"><StaticImage alt="Sass" src="../images/react.svg"/></div>
            <div className="skills__label">Javascript</div>
          </div>  
          <div className="skills__set">
            <div className="skills__icon"><StaticImage alt="Sass" src="../images/vue-js.svg"/></div>
            <div className="skills__label">Javascript</div>
          </div>  
          <div className="skills__set">
            <div className="skills__icon"><StaticImage alt="Sass" src="../images/javascript.gif"/></div>
            <div className="skills__label">Javascript</div>
          </div>  
          <div className="skills__set">
            <div className="skills__icon"><StaticImage alt="Sass" src="../images/javascript.gif"/></div>
            <div className="skills__label">Javascript</div>
          </div>  
        </div>
      </section>
    </Layout>
    
    </Page>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage