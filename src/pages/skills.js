import * as React from 'react'
import { Component } from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import skillSetData from "../../content/data/skillsetdata.json"
import { StaticImage } from 'gatsby-plugin-image'

import { HeroSection, Page, Section, Animation } from 'gatsby-theme-portfolio-minimal';

const SkillSetBlock =(props)=> { 
  const pathstring=props.path;
  const block = skillSetData[pathstring].map ((data, index) => {
    return (
      <div className="skills__set">
        <img className="skills__icon" src={`../../skills-images/${data.url}`}/>       
        <div className="skills__label">{data.name}</div>
      </div>    
    )
    })
  return   <div className="skills__container">{block}</div>  
}

const SkillsPage = () => {
  return (   
    <Page>     
    <Layout pageTitle="Technical Skills"> 
    <p className="intro__about--drop">Growing list of web technoglogies that I have used at work </p> 
    <Animation type="fadeUp">     
      <section id="skills" className="skills">      
        <h2> Web Development</h2>
        <SkillSetBlock path={"content"}/>
        <h2> Graphic Design</h2>
        <SkillSetBlock path={"grahicdesign"}/>
        <h2> Video Editing</h2>
        <SkillSetBlock path={"video"}/>
      </section>
      </Animation> 
    </Layout>      
    </Page>
  )
}
  
  export const Head = () => <Seo title="Home Page" />
  
  export default SkillsPage