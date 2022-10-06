import React from 'react'
import Collapse from 'rc-collapse'
import styles from '../../assets/jss/nextjs-material-kit/components/FAQCard'
import { makeStyles } from '@material-ui/core/styles'
import ReactMarkdown from 'react-markdown'
import 'rc-collapse/assets/index.css';

const Panel = Collapse.Panel
const useClasses = makeStyles(styles)

export const FAQSection = (props) => {
    const classes = useClasses()
    return (
        <div>
            <h2 className={classes.title}>{props.title}</h2>
            <h4 className={classes.subtitle}>{props.subtitle}</h4>
            <Collapse accordion={false} style={{backgroundColor: 'white', borderRadius: '10px'}} >
                {props.entries.map(({ title, description }) => (
                    <Panel
                        header={title}
                        headerClass={classes.title}
                        className={classes.description}
                        style={{cursor:'pointer', backgroundColor:'white'}}
                        showArrow={false}
                    >
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </Panel>
                ))}
            </Collapse>
        </div>
    )
}
