import React from 'react'
import classNames from 'classnames'
import {makeStyles} from '@material-ui/core/styles'

import Header from 'src/components/Header/Header.js'
import Footer from 'src/components/Footer/Footer.js'
import HeaderLinks from 'src/components/Header/HeaderLinks.js'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPage.js'
import ContactSection from 'src/pages-sections/ContactSection/ContactSection.js'
import AboutSection from 'src/pages-sections/AboutSection/AboutSection.js'


import HeroSection from '../src/pages-sections/HeroSection/HeroSection'
import {loadContentWithLocale} from '../src/helpers/loadContent'
import {TeamSection} from "../src/pages-sections/TeamSection/TeamSection";
import {InfoElementsSection} from "../src/pages-sections/InfoSection/InfoElementsSection";

const dashboardRoutes = []

const useStyles = makeStyles(styles)

export async function getStaticProps(context) {
  const loadContentWithLocaleSet = loadContentWithLocale(context.locale)
  return {
    props: {
        heroData: await loadContentWithLocaleSet('content/hero.json'),
        headerData: await loadContentWithLocaleSet('content/header.json'),
        footerData: await loadContentWithLocaleSet('content/footer.json'),
        teamData: await loadContentWithLocaleSet('content/team.json'),
        visionData: await loadContentWithLocaleSet('content/vision.json'),
        contactData: await loadContentWithLocaleSet('content/contact.json'),
        infoData: await loadContentWithLocaleSet('content/info.json')
    }
  }
}

export default function LandingPage(props) {
  const classes = useStyles()
  const { ...rest } = props
  console.log(props.headerData)
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        logo={props.headerData.logo}
        rightLinks={<HeaderLinks {...props.headerData} />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white'
        }}
        {...rest}
      />
      <HeroSection {...props.heroData} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div id="about" className={classes.section}>
            <InfoElementsSection {...props.infoData}/>
            <AboutSection {...props.visionData}/>
          </div>
          <div id="team">
              <TeamSection {...props.teamData}/>
          </div>
          <div id="contact">
            <ContactSection {...props.contactData} />
          </div>
        </div>
      </div>
      <Footer {...props.footerData} />

      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  )
}
