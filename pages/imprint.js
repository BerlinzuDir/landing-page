import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'

import styles from 'src/assets/jss/nextjs-material-kit/pages/imprintPage'
import * as loadJsonFile from 'load-json-file'

import Footer from '../src/components/Footer/Footer'
import HeaderLinks from '../src/components/Header/HeaderLinks'
import Header from '../src/components/Header/Header'
import GridItem from '../src/components/Grid/GridItem'
import GridContainer from '../src/components/Grid/GridContainer'
import { loadContentWithLocale } from '../src/helpers/loadContent'

export const getStaticProps = async ({ locale }) => {
  const loadContentWithLocaleSet = loadContentWithLocale(locale)

  return {
    props: {
      headerData: await loadContentWithLocaleSet('content/header.json'),
      contentData: await loadContentWithLocaleSet('content/imprint.json'),
      footerData: await loadContentWithLocaleSet('content/footer.json')
    }
  }
}

const dashboardRoutes = []

const useStyles = makeStyles(styles)
const Imprint = ({
  contentData: {
    title,
    backgroundImage,
    organizationName,
    organizationAddress,
    email
  },
  headerData,
  footerData,
}) => {
  const classes = useStyles()
  return (
    <div>
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: 'url(' + backgroundImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <Header
        color="white"
        routes={dashboardRoutes}
        logo={headerData.logo}
        rightLinks={<HeaderLinks {...headerData} />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      />
      <div className={classes.container}>
        <div className={'height: 100px'} />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>{title}</h1>
            <br />
            <br />
            <h2 className={classes.subtitle}>{organizationName}</h2>
            <br />
            <ReactMarkdown className={classes.content}>
              {organizationAddress}
            </ReactMarkdown>
            <br />
            <a className={classes.email} href={`mailto: ${email}`}>
              {email}
            </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    <Footer {...footerData} />
    </div>
  )
}

export default Imprint
