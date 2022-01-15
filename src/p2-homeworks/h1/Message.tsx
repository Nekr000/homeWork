import React from 'react'
import classes from './Message.module.css';


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
                <button>Send</button>

            </div>
        </div>
    )
}

export default Message
