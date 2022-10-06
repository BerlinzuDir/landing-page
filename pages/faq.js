import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'

import Header from 'src/components/Header/Header.js'
import Footer from 'src/components/Footer/Footer.js'
import HeaderLinks from 'src/components/Header/HeaderLinks.js'

import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPage.js'
import ContactSection from 'src/pages-sections/ContactSection/ContactSection.js'
import { loadContentWithLocale } from '../src/helpers/loadContent'
import { FAQSection } from '../src/pages-sections/FAQSection/FAQSection'
const dashboardRoutes = []

const useStyles = makeStyles(styles)

export async function getStaticProps(context) {
    const loadContentWithLocaleSet = loadContentWithLocale(context.locale)
    return {
        props: {
            headerData: await loadContentWithLocaleSet('content/header.json'),
            footerData: await loadContentWithLocaleSet('content/footer.json'),
            contactData: await loadContentWithLocaleSet('content/contact.json'),
            faqData: await loadContentWithLocaleSet('content/faq.json'),
        },
    }
}

export default function LandingPage(props) {
    const classes = useStyles()
    const { ...rest } = props
    return (
        <div>
            <Header
                color="white"
                routes={dashboardRoutes}
                logo={props.headerData.logo}
                rightLinks={<HeaderLinks {...props.headerData} />}
                fixed
                {...rest}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div id="about" className={classes.section}>
                        <FAQSection {...props.faqData} />
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
