import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id:number)=> void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }


    return (

        <div className={classes.someClass}>
            <div className={classes.item}>{props.affair.name}</div>
            <div className={classes.item}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={classes.item}>X</button>
        </div>
    )
}

export default Affair
