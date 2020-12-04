import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SGPCard from './SGPCard/SGPCard';
import SGPInformation from '../../static/SGPInformation';
import useWindowPosition from '../../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
}));

export default function SectionSGP() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id='infoCards'>
      <SGPCard SGPInfo={SGPInformation[0]} checked={checked} />
      <SGPCard SGPInfo={SGPInformation[0]} checked={checked} />
    </div>
  )
}