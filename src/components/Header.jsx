import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,  Toolbar, Collapse, Button } from '@material-ui/core';
import { Modal } from './Modal';
import { signout } from "../helpers/auth";
import {Link} from 'react-router-dom';

//import { toast } from 'react-toastify';

//toast.configure()


const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    
    background: 'linear-gradient(0deg, transparent, #111)',
    
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    fontSize: '2rem',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  contain: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '7rem',
  },
  button: {
    borderRadius: '12px',
  },
  span:{
    marginLeft: '10px'
  },

  
}));
export default function Header() {


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            MyDate.
          </h1>
          <Link to = {"/main"}>Next page</Link>
          
          <Button className={classes.button} variant="contained" color="secondary" 
                  onClick={openModal}>Login
              </Button> 
              <Modal showModal={showModal} setShowModal={setShowModal} />
        
          <span className={classes.span}> <Button className={classes.button} variant="contained" color="secondary" 
                  onClick={() => {
                    signout(() => {
                      alert("Bye Bye .... !")
                     // toast.error("signout success")
                    });
                  }}>Logout
              </Button>
          </span>
          

        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.contain}>
          <h1 className={classes.title}>
            Let's find you a match<br/>
            <Button className={classes.button} variant="contained" color="secondary" 
                  onClick={openModal}>Create Account
              </Button> 
              <Modal showModal={showModal} setShowModal={setShowModal} />
          </h1>
        </div>
        <div>
        </div>
      </Collapse>
    </div>
   
  );
}

