import React from 'react';
import {makeStyles, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyle= makeStyles((theme)=>({
    component:{
        background:'#f6f6f6',
        height:43,
        display:'flex',
        alignItems:'center'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor:'#ffffff' ,
        margin:'0 13px',
        width: '100%',
        
      },
      searchIcon: {
        color:'#919191',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center'        
      },
      inputRoot: {
       width:'100%'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        fontSize:14,
        height:15,
        // vertical padding + font size from searchIcon
        paddingLeft: 45,
        transition: theme.transitions.create('width'),
        width: '100%'
        
      },
}))

const Search = (props) => {
    const classes = useStyle()
    return (
        <div className={classes.component}>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon fontSize="small" />
            </div>
            <InputBase
              placeholder="Search or Start a new chat"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>props.setText(e.target.value)}
             />         
            
            </div>
        </div>
    )
}

export default Search
