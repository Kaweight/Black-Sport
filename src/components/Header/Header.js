import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  appbar: {
    background: 'none',
    fontFamily: 'Nunito',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    color: '#ffffff',
    flexGrow: '1',
  },
  icon: {
    color: '#C4E538',
    fontSize: '2rem',
  },
  container: {
    textAlign: 'center',
  },
  containerTitle: {
    color: '#ffffff',
    fontFamily: 'Nunito',
    fontSize: '3rem',
  },
  goDown: {
    color: '#C4E538',
    fontSize: '3rem',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, [])
  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>Speedway</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={45}
      >
        <div className={classes.container}>
          <h1 className={classes.containerTitle}>
            lorem ipsum dolor
      </h1>
          <Scroll to='infoCards' smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
