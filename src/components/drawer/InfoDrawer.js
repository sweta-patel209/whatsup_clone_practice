import React from 'react'
import { Drawer, makeStyles, Typography } from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'

//components
import Profile from './Profile';

const useStyle = makeStyles({
    header:{
        background:'#00bfa5',
        height:97,
        color:'#ffffff',
        display:'flex',
        '& > *':{
            marginTop:'auto',
            padding:15,
            fontWeight:600
        }
    },
    component:{
        background:'#ededed',
        height:'89%'
    }
})

const InfoDrawer = ({open,setOpen}) => {
    const classes = useStyle()

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Drawer open={open} onClose={handleClose}>
                <div className={classes.header}>
                    <ArrowBack onClick={handleClose} />
                    <Typography>Profile</Typography>
                </div>
                <div className={classes.component}>
                    <Profile />
                </div>
            </Drawer>
        </div>
    )
}

export default InfoDrawer
