import React,{useEffect,useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import {AccountContext} from '../../contextApi/AccountProvider'

//components
import {getUsers} from '../../service/api';
import Conversation from './Conversation';

const useStyles = makeStyles({
    component:{
        height:'90vh',
        overflow:'overlay'
    }
})
const Conversations = (props) => {
    const classes = useStyles()
    const [users,setUsers] = useState([]);
    const {account} = useContext(AccountContext)
    useEffect(() => {
       const fetchData = async() => {
         let data =  await getUsers();
         console.log(data)
         
         const filteredData = data.data.filter(user=> user.name.toLowerCase().includes(props.text.toLowerCase()));
         setUsers(filteredData)
       }
       fetchData();
    }, [props.text])
    return (
        <div className={classes.component}>
           
           {users.map(user=>(
               user.googleId !== account.googleId &&
               <Conversation user={user} />
           ))}
        </div>
    )
}

export default Conversations
