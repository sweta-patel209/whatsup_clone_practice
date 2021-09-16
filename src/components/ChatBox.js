import React from 'react'
import { Dialog, withStyles, makeStyles } from '@material-ui/core'

//component
import Menu from './menu/Menu'
//CSS override 
const style = {
    dialogPaper:{
        height:'96%',
        width:'91%',       
        boxShadow:'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden'
    }
}

const useStyles = makeStyles({
    component:{
        display:'flex'
    },
    left:{
        width:380
    },
    right:{
        borderLeft:'1px solid rgba(0,0,0,0.14)'
    }
})

const ChatBox = ({classes}) => {
    const classname = useStyles()
    return (
        <Dialog 
        open={true}
        classes={{paperScrollPaper:classes.dialogPaper}}
        BackdropProps={{style:{background:'unset'}}}>
            <div className={classname.component}>
                <div className={classname.left}>
                    <Menu />
                </div>
                <div className={classname.right}>
                    hiiii
                </div>
            </div>
            
        </Dialog>
    )
}
export default withStyles(style)(ChatBox);
