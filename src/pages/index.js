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
import "../styles/index.scss"


const IndexPage = () => {
  return (

    <Page>
   
    <Layout pageTitle="About Me">
      <section className="intro">
        <div className ="intro__about">
          <p>Welcome,</p>
          <p className="intro__about--drop">I am an experienced IT professional in the field of Web Technology working over 10 years as a web developer with a degree in computer science. </p><p>I have broad based experience in working and communicating effectively with various technical teams, create, marketing and product teams to implement and architect solutions in developing fully functional web applications and websites..</p>
        </div>
        <div className="intro__img">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          /> 
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