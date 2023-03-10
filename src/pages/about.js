// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby-plugin-modal-routing"

import MainLayout from '../components/MainLayout'
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

    <MainLayout pageTitle="About mMe">
      <p>Hi cccc thhhere! I'm the proud creator of this site, which I built with Gatsby.</p>

    </MainLayout>
 
  )
}
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage