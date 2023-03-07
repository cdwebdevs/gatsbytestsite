// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby-plugin-modal-routing"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { HeroSection, Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';


// Step 2: Define your component
const PorfolioPage = () => {
  return ( 
    <Page>
    <Layout pageTitle="Web Developer Portfolio">
    <Link to={`../../webmdportfolio.htm`} asModal>Page 2 in Modal</Link>

    <p className="intro__about--drop">Partial listing of Sites </p>
      <Animation type="fadeUp">
      <Section className="port">
        <div className="port__grid">
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/showtimetmb.jpg"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Showtime</h4>
              <p className="port-item__subtitle">Popular series: Billions, Dexter,...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/shoplace.jpg"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Shoplace</h4>
              <p className="port-item__subtitle"> Is the one stop shop for everything...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/bloomtmb.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Bloomingdales</h4>
              <p className="port-item__subtitle">Like No Other Store in the world...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/webmd.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Web MD</h4>
              <p className="port-item__subtitle">Leading provider of health information services..
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/pradaxa.jpg"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Pradaxa</h4>
              <p className="port-item__subtitle">Pharmaceutical based websites..
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/orencia.jpg"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Orencia</h4>
              <p className="port-item__subtitle">Pharmaceutical based websites..
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/lrf.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Lymphoma</h4>
              <p className="port-item__subtitle">Information about Lymphoma to patients..
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/ncldtmb.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">NCLD</h4>
              <p className="port-item__subtitle">National Center of Learning Disabilities...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/sgwhiskeytmb.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">La Grouse</h4>
              <p className="port-item__subtitle">Scottish Whiskey Distributors...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/miamibarnestmb.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Barnes Int</h4>
              <p className="port-item__subtitle">Comprehensive real estate database driven site...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/cotro.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Cotro</h4>
              <p className="port-item__subtitle">Fireplace and radiators with design...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
          <div className="port-item port--display"> 
            <a className="fancybox fancybox.ajax" href="bloomportfolio.htm">
              <StaticImage alt="" src="../images/portfoliotmb/artistbabysitter.png"/>
            </a> 
            <div className="port-item__caption promo__body promo__copy" >
              <h4 className="port-item__title">Day Care</h4>
              <p className="port-item__subtitle">Tutoring and babysitting...
                <a className="port-item__link fancybox fancybox.ajax" href="bloomportfolio.htm">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Animation>
    </Layout>
    </Page>
  )
}
export const Head = () => <Seo title="Portfolio" />

// Step 3: Export your component
export default PorfolioPage