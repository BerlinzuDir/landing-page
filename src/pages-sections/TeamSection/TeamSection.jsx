import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {InfoElementWithIconHorrizontal} from "../../components/InfoElementWithIconHorrizontal";
import {Grid} from "@material-ui/core";
import styles from 'src/assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'



const useStyles = makeStyles(styles)

export const TeamSection = (props) => {
    const peopleComponents = props.people.map( (person, index) => <Person id={index} {...person}/>)
    const classes = useStyles()
    return(
        <div>
        <h2 className={classes.title}>{props.title}</h2>
        <Grid container direction="row" justify="center">
            {peopleComponents}
        </Grid>
        </div>
    )
}

const Person = (props) => {
    return (
        <Grid item>
            <InfoElementWithIconHorrizontal {...props}/>
        </Grid>
    )
}
