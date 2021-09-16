import React,{useContext, useState} from 'react';
import {makeStyles, Drawer} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
//context api import
import {AccountContext} from '../../contextApi/AccountProvider';
//components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../drawer/InfoDrawer';
const useStyles = makeStyles({
    header:{
        height:35,
        background:'#ededed',
        padding:'10px 15px',
        display:'flex',
        alignItems:'center'
    },
    image:{
        height:35,
        width:37,
        borderRadius:'50%'
    },
    icons:{
        marginLeft:'auto',
        '& > *':{
            marginLeft:2,
            padding:8,
            color:'#919191'
        },
        '& :first-child': {
            fontSize:22,
            marginRight:8,
            marginTop:5            
        }
    }
})

const Header = () => {
    const classes = useStyles()
    const {account} = useContext(AccountContext)
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(true)
    }
   
    return (
        <>
        <div className={classes.header}>
            <img src={account.imageUrl} onClick={toggleDrawer} className={classes.image}/>
            <div className={classes.icons}>
                <ChatIcon />
                <HeaderMenu />
            </div>
        </div>
        <InfoDrawer open={open} setOpen={setOpen}/>
        </>
    )
}

export default Header
