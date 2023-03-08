// Step 1: Import React
import * as React from 'react'
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
const ContactPage = () => {
  return ( 
    <Page>...
    <Layout pageTitle="Contact Me">
        <p className="intro__about--drop">Drop me a line if you want to reach out. You can email me or connect via Linkedln </p>
        <section class="contact">

				<article class="contact__card">
					<div class="contact__card--description">
						<span class="contact__card--category"><u>Email</u></span>
						<h4 class="contact__card--title">Reach out to email me <a href="mailto:cdwebdevs@gmail.com"> cdwebdevs at gmail.com</a></h4>
					</div>
				</article>
				<article class="contact__card">
					<div class="contact__card--description">
						<span class="contact__card--category"><u>Linkedln</u></span>
						<h4 class="contact__card--title">Connect with me on <a href="https://www.linkedin.com/in/caroline-d-33494b266/">Linkedln </a></h4>
					</div>
				</article>


        </section>
    </Layout>
    </Page>
  )
}
export const Head = () => <Seo title="Contact" />

// Step 3: Export your component
export default ContactPage