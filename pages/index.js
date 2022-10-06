import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import Footer from '../src/components/Footer/Footer'
import HeaderLinks from '../src/components/Header/HeaderLinks'

import styles from '../src/assets/jss/nextjs-material-kit/pages/landingPage'
import ContactSection from '../src/pages-sections/ContactSection/ContactSection'
import AboutSection from '../src/pages-sections/AboutSection/AboutSection'

import HeroSection from '../src/pages-sections/HeroSection/HeroSection'
import { loadContentWithLocale } from '../src/helpers/loadContent'
import { TeamSection } from '../src/pages-sections/TeamSection/TeamSection'
import { InfoElementsSection } from '../src/pages-sections/InfoSection/InfoElementsSection'
import Header from '../src/components/Header/Header'

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
            infoData: await loadContentWithLocaleSet('content/info.json'),
        },
    }
}

export default function LandingPage(props) {
    const classes = useStyles()
    const { ...rest } = props
    return (
        <div>
        <div>
            <Header
                color="white"
                routes={dashboardRoutes}
                logo={props.headerData.logo}
                logoWhite={props.headerData.logoWhite}
                rightLinks={<HeaderLinks {...props.headerData} />}
                fixed
                changeColorOnScroll={{
                    height: 0,
                    color: 'white',
                }}
                {...rest}
            />
            <HeroSection {...props.heroData} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div id="about" className={classes.section}>
                        <InfoElementsSection {...props.infoData} />
                        <AboutSection {...props.visionData} />
                    </div>
                    <div id="team">
                        <TeamSection {...props.teamData} />
                    </div>
                    <div id="contact">
                        <ContactSection {...props.contactData} />
                    </div>
                </div>
            </div>

        </div>
        <Footer {...props.footerData} />

        </div>
    )
}
