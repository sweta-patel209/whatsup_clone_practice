import React from 'react';
import {Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    component:{
        display:'flex',
        height:40,
        padding:'13px 0',
        cursor:'pointer'
    },
    displayPicture:{
        width:50,
        height:50,
        borderRadius:'50%',
        padding:'0 14px'
    }
})

const Conversation = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.component}>
            <div>
                <img src={props.user?.imageUrl} className={classes.displayPicture} alt="display-picture" />
            </div>
            <div>
                <Typography>{props.user?.name}</Typography>
            </div>
        </div>
    )
}

export default Conversation
