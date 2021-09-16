import React,{useContext} from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core'

//component
import Login from './account/Login';
import ChatBox from './ChatBox';
import {AccountContext} from './../contextApi/AccountProvider'

const useStyle = makeStyles({
    loginHeader: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    header:{
        height:115,
        background: '#128c7e',
        boxShadow: 'none'
    },
    component:{
        background:'#DCDCDC',
        height:'100vh'
    }
})
const Messenger = () => {
    const classes = useStyle()
    const {account} = useContext(AccountContext)
    return (
        <div className={classes.component}>
        <AppBar className={account ? classes.header : classes.loginHeader}>
            <Toolbar>

            </Toolbar>
        </AppBar>
        { account ? <ChatBox/> : <Login />}
        </div>
    )
}

export default Messenger
