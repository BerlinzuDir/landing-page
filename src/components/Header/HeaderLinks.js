/*eslint-disable*/
import React from 'react'
import Link from 'next/link'

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import Icon from '@material-ui/core/Icon'

// @material-ui/icons
import { Apps } from '@material-ui/icons'

// core components
import CustomDropdown from 'src/components/CustomDropdown/CustomDropdown.js'
import Button from 'src/components/CustomButtons/Button.js'

import styles from 'src/assets/jss/nextjs-material-kit/components/headerLinksStyle.js'
import LocaleSwitcher from '../LocaleSwitcher'

const useStyles = makeStyles(styles)

export default function HeaderLinks(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>

        <ListItem className={classes.listItem}>
            <Link href="/faq" passHref>
                <Button href="/faq" color="transparent" className={classes.navLink}>
                    <Icon className={classes.icons}>help</Icon> {props.faq}
                </Button>
            </Link>
        </ListItem>
      <ListItem className={classes.listItem}>
        <LocaleSwitcher />
      </ListItem>
    </List>
  )
}
