// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby-plugin-modal-routing"

import Layout from '../components/layout'
import Seo from '../components/seo'

import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection

} from 'gatsby-theme-portfolio-minimal';

// Step 2: Define your component
const AboutPage = () => {
  return ( 
    <Page>...
    <Layout pageTitle="About Me">
      <p>Hi cccc thhhere! I'm the proud creator of this site, which I built with Gatsby.</p>

    </Layout>
    </Page>
  )
}
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage