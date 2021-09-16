import React,{useContext} from 'react';
import { AccountContext } from '../../contextApi/AccountProvider';
import {makeStyles, Typography} from '@material-ui/core';
import { SportsRugbySharp } from '@material-ui/icons';

const useStyle=makeStyles({
    imageContainer:{
        display:'flex',
        justifyContent:'center'
    },
    image:{
        width:200,
        height:200,
        borderRadius:'50%',
        padding:'18px 0'
    },
    nameContainer:{
        background:'#ffffff',
        padding:'12px 30px 2px',
        boxShadow:'0 1px 3px rgba(0,0,0, 0.08)',
        '& :first-child':{
            fontSize:14,
            color:'#009688'
        },
        '& :last-child':{
           
            color:'#4a4a4a',
            margin:'14px 0'
        }
    },
    description:{
        padding:'10px 20px 28px 30px',
        '& > *':{
            fontSize:12,
            color: 'rgba(0,0,0,0.45)'
        }
    }
})

const Profile = () => {
    const {account} = useContext(AccountContext)
    const classes = useStyle()
    return (
        <>
            <div className={classes.imageContainer}>
                <img src={account.imageUrl} className={classes.image}/>
            </div>
            <div className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </div>
            <div className={classes.description}>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </div>
            <div className={classes.nameContainer}>
            <Typography>About</Typography>
                <Typography>Eat, Sleep, Code and Repeat</Typography>
            </div>
        </>
    )
}

export default Profile
