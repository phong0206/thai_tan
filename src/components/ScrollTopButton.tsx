import React, { useState } from 'react';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../App.css';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    button: {
      width: 0,
      height: 40,
      position: 'fixed',
      bottom: 60,
      right: 30,
      zIndex: 1000,
      minWidth: '55px',
      backgroundColor: '#114272',
    },
    spanText: {
      color: 'white',
    },
    griditem: { marginTop: '12px' },
  })
);
export default function ScrollTopButton({ threshold = 100 }) {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Button
        onClick={handleClick}
        style={{
          visibility: trigger ? 'visible' : 'hidden',
        }}
        className={classes.button}
        variant="contained"
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Zoom>
  );
}
