import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import parse from "html-react-parser";
import html from "../content/dataPrivacy.html";

import styles from 'src/assets/jss/nextjs-material-kit/pages/imprintPage'
import HeaderLinks from '../src/components/Header/HeaderLinks'
import Header from '../src/components/Header/Header'
import GridItem from '../src/components/Grid/GridItem'
import GridContainer from '../src/components/Grid/GridContainer'
import { loadContentWithLocale, loadContent } from '../src/helpers/loadContent'

export const getStaticProps = async ({ locale }) => {
  const loadContentWithLocaleSet = loadContentWithLocale(locale)

  return {
    props: {
      headerData: await loadContentWithLocaleSet('content/header.json'),
      contentData: await loadContent('content/privacy.json')
    }
  }
}

const dashboardRoutes = []

const useStyles = makeStyles(styles)
const Imprint = ({
  contentData: { title, backgroundImage, content },
  headerData
}) => {
  const classes = useStyles()
  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: 'url(' + backgroundImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      <Header
        color="transparent"
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
            <h1 className={classes.subtitle}>{title}</h1>
            <br />
            <br />
            <div className="container-fluid pt-5">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-sm align-self-center">
                  <div className="text-dark"> {parse(html)} </div>
                </div>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

export default Imprint
