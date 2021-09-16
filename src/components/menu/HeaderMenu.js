import React,{useState, useContext} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GoogleLogin, {GoogleLogout} from 'react-google-login';
import {makeStyles} from '@material-ui/core'
//context API
import {AccountContext} from '../../contextApi/AccountProvider';

//components
import {clientId } from './../../constants/data';
import InfoDrawer from '../drawer/InfoDrawer';

const useStyle = makeStyles({
    menuitem:{
        fontSize:14,
        padding:'15px 60px 5px 24px',
        color:'#4a4a4a'
    },
    logout:{
        border:'none !important',
        boxShadow:'none !important',
        '& > *':{
            padding:'0px !important'
        }

    }
})

const HeaderMenu = () => {
    const classes = useStyle()
    const [open,setOpen] = useState(false)
    const [openDrawer,setOpenDrawer]= useState(false)
    const {setAccount} = useContext(AccountContext)
    

    const handleClose = () => {
        setOpen(false)
        
    }

    const handleDrawer = () => {
        setOpenDrawer(true)
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget)
       
    }

    const onLogoutSuccess = () => {
        alert("You have been logged out")
        console.clear();
        setAccount('')
    }

    
    return (
<>
        <MoreVertIcon onClick={handleClick} />
        <Menu
            
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'center'

            }}
            transformOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
        >
            <MenuItem className={classes.menuitem} onClick={()=>{handleClose();handleDrawer()}}>Profile</MenuItem>
            <MenuItem className={classes.menuitem} onClick={handleClose}>
                <GoogleLogout                
                clientId={clientId}
                        buttonText="Logout"
                        isSignedIn={true}
                        onLogoutSuccess={onLogoutSuccess}
                        className={classes.logout}
                        >

                </GoogleLogout>
            </MenuItem>
            
        </Menu>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
       
    )
}

export default HeaderMenu
