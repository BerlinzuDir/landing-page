import React from 'react'
import { InfoElementWithIcon } from '../../components/InfoElementWithIcon/InfoElementWithIcon'
import { Grid } from '@material-ui/core'
import styles from '../../assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

const useStyles = makeStyles(styles)

export const InfoElementsSection = (props) => {
    const classes = useStyles()
    const peopleComponents = props.people.map((person, index) => (
        <Person id={index} {...person} />
    ))
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>{props.title}</h2>
            <h4 className={classes.subtitle}>{props.subtitle}</h4>
            <Grid container direction="row" justify="center">
                {peopleComponents}
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

const Person = (props) => {
    return (
        <Grid item>
            <InfoElementWithIcon {...props} />
        </Grid>
    )
}
