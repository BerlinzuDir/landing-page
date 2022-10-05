import React from 'react'
import Image from 'next/image'
import GridContainer from "../Grid/GridContainer";
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import styles from "src/assets/jss/nextjs-material-kit/components/infoElementWithIconHorrizontal"
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles(styles)

export const InfoElementWithIconHorrizontal = (props) => {
    const classes = useStyles()
    const imageClasses = classNames(
        classes.imgFluid,
        classes.imgCentered,
        classes.imgRoundedCircle
    )
    return (
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={6} md={3}>
                    <div className={classes.title}>
                        <Image className={imageClasses} src={props.image} width={150} height={150}/>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={6} md={9}>
                    <div>
                        <h3 className={classes.title}>{props.title}</h3>
                    </div>
                    <p className={classes.description}>
                        {props.description}
                    </p>
                </GridItem>
            </GridContainer>
        </div>
    )
}

InfoElementWithIconHorrizontal.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}