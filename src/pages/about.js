// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby-plugin-modal-routing"
import ConditionalLayout from "../components/ConditionalLayout"
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
    <ConditionalLayout pageTitle="About Me">
    <Link to="/page-2/" asModal>Go to page 2 modal</Link>
    <Link to="/page-3/" asModal>Go to page 3 modal</Link>
      <p>Hi cccc thhhere! I'm the proud creator of this site, which I built with Gatsby.</p>

    </ConditionalLayout>
    </Page>
  )
}
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage