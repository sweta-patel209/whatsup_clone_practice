import React,{useContext} from 'react';
import {Dialog, withStyles, Typography, makeStyles, List, ListItem} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';


//context API folder
import {AccountContext} from '../../contextApi/AccountProvider';

//components
import {clientId} from '../../constants/data';
import { addUser } from '../../service/api';

const useStyle =makeStyles({
    component:{
       display:'flex'
    },
    left:{
       
        padding:'56px 0 56px 56px'
       
    },
    right:{
    
    },
    qrcode:{
     height:264,
     width:264,
     padding:'50px 0 0 200px'
    },
    title:{
        fontSize:26,
        marginBottom:25,
        color:'#525252',
        fontWeight:300
    },
    list:{
        '& > *':{
            fontSize:18,
            padding:0,
            marginTop:15,
            lineHeight:'28px',
            color:'#4a4a4a'
        }
    }

})

//CSS override 
const style = {
    dialogPaper:{
        height:'96%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden'
    }
}


const Login = ({classes}) => {
    const classname = useStyle();
    const {account,setAccount} = useContext(AccountContext)
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    //you have to create google id
    

    const onLoginSuccess = async (res) =>{
      //  console.log(res)
      //  console.log('login successfull')
        console.log(res.profileObj)
        setAccount(res.profileObj)
         await addUser(res.profileObj);
    }
    const onLoginFailure = () => {
        console.log('login failed')
        
    }
    return (
        <Dialog 
        open={true}
        classes={{paperScrollPaper:classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}>
           <div className={classname.component}>
               <div className={classname.left}>
                    <Typography className={classname.title} >To use WhatsApp on your computer</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
               </div>
               <div style={{position:'relative'}}>
                   <img src={qrurl} className={classname.qrcode} />
                    <div style={{position:'absolute',left:'65%',top:'50%'}}>
                        <GoogleLogin 
                        clientId={clientId}
                        buttonText=""
                        isSignedIn={true}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}                    
                        cookiePolicy={'single_host_origin'}/>
                    </div>
               </div>

           </div>
        </Dialog>
    )
}

export default withStyles(style)(Login)
