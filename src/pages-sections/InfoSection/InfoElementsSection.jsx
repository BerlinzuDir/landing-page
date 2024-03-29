import React from 'react'
import { InfoElementWithIcon } from '../../components/InfoElementWithIcon/InfoElementWithIcon'
import { Grid } from '@material-ui/core'
import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

const useStyles = makeStyles(styles)

export const InfoElementsSection = (props) => {
    const classes = useStyles()
    const infoElements = props.infoElements.map((infoContent, index) => (
        <InfoElement id={index} {...infoContent} />
    ))
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>{props.title}</h2>
            <h5 className={classes.subtitle}>{props.subtitle}</h5>
            <Grid container direction="row" justify="center">
                {infoElements}
            </Grid>
            <div className={classes.description}>
                {props.faqText}{' '}
                <Link href={'/faq'} passHref>
                    <a>{props.faqLink}</a>
                </Link>
            </div>
            <div className={classes.description}>
                {props.contactText}{' '}
                <Link href={'#contact'} passHref>
                    <a>{props.contactLink}</a>
                </Link>
            </div>
        </div>
    )
}

const InfoElement = (props) => {
    return (
        <Grid item>
            <InfoElementWithIcon {...props} />
        </Grid>
    )
}
