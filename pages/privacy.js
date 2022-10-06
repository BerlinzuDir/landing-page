import React from 'react'

import classNames from 'classnames'
import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'

import styles from 'src/assets/jss/nextjs-material-kit/pages/imprintPage'
import HeaderLinks from '../src/components/Header/HeaderLinks'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import GridItem from '../src/components/Grid/GridItem'
import GridContainer from '../src/components/Grid/GridContainer'
import { loadContentWithLocale, loadContent } from '../src/helpers/loadContent'
import dataPrivacyTXT from '../content/dataPrivacy'

export const getStaticProps = async ({ locale }) => {
  const loadContentWithLocaleSet = loadContentWithLocale(locale)

  return {
    props: {
      headerData: await loadContentWithLocaleSet('content/header.json'),
      contentData: await loadContent('content/privacy.json'),
      footerData: await loadContentWithLocaleSet('content/footer.json')
    }
  }
}

const dashboardRoutes = []

const useStyles = makeStyles(styles)
const Imprint = ({
  contentData: { title, backgroundImage, content },
  headerData,
  footerData
}) => {
  const classes = useStyles()
  return (
    <div>
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
      <div className={classNames(classes.main, classes.mainRaised)}>

        <div className={classes.container}>
          <div className={'height: 100px'} />
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.subtitle}>{title}</h1>
              <br />
              <br />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-1"></div>
                  <div className="col-sm align-self-center">
                    <ReactMarkdown className={classes.content}>
                      {dataPrivacyTXT}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer {...footerData} />
    </div>
  )
}

export default Imprint
