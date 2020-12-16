import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'

import styles from 'src/assets/jss/nextjs-material-kit/pages/imprintPage'
import * as loadJsonFile from 'load-json-file'
import HeaderLinks from '../src/components/Header/HeaderLinks'
import Header from '../src/components/Header/Header'
import GridItem from '../src/components/Grid/GridItem'
import GridContainer from '../src/components/Grid/GridContainer'

export const getStaticProps = async () => {
  const content = await loadJsonFile('content/imprint.json')
  return { props: { ...content } }
}

const dashboardRoutes = []

const useStyles = makeStyles(styles)
const Imprint = ({
  backgroundImage,
  organizationName,
  organizationAddress,
  email
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
        brand="Lieber Zusammen"
        rightLinks={<HeaderLinks />}
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
            <h1 className={classes.title}>Imprint</h1>
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
  )
}

export default Imprint
