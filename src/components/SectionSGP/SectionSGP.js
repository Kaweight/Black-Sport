import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SGPCard from './SGPCard/SGPCard';
import SGPInformation from '../../static/SGPInformation';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function SectionSGP() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SGPCard SGPInfo={SGPInformation[0]} />
      <SGPCard SGPInfo={SGPInformation[0]} />
    </div>
  )
}