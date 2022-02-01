import React from 'react'
import classes from './Message.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type propsType={
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div className={classes.container}>
        <div className={classes.nav}>
            <div><img src={props.avatar}/></div></div>
            <div className={classes.messageBlue}>
                <div> {props.name}</div>
                <div> {props.message}</div>
                <div> {props.time}  </div>
                <textarea></textarea>
                <SuperButton>Send</SuperButton>

            </div>
        </div>
    )
}

export default Message
