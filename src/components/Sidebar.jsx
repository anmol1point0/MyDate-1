import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,  Toolbar} from '@material-ui/core';
import "../styles/Sidebar.css"
import {Avatar} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  
    
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
      fontSize: '1.5rem',
      color: 'Black',
      paddingTop: '10px',
    },
   
  }));


export default function Sidebar() {
    const classes = useStyles();

    return (
        <div className="sidebar">
            <div className="header">
                <Avatar className={classes.avatar} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"/> 
                <div className={classes.root} id="header">
                    <AppBar className={classes.appbar} elevation={0}>
                        <Toolbar className={classes.appbarWrapper}>
                            <h1 className={classes.appbarTitle}>
                                My Profile
                            </h1>
                        </Toolbar>
                    </AppBar>
                    </div>
            </div>
        </div>
    )
}
