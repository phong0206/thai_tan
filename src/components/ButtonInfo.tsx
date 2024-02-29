import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles, createStyles } from '@mui/styles';

interface Props {
  bottom?: number;
  color?: string;
  Icon?: JSX.Element;
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    button: {
      position: 'fixed',
      zIndex: 1000,
      width: 1,
      height: 53,
      borderRadius: 50,
      padding: '5px',
      minWidth: '55px',
      left: 20,
      [theme.breakpoints.down('lg')]: {
        // 1280px
        left: 40,
      },
      [theme.breakpoints.down('md')]: {
        // 960px
        left: 30,
      },
      [theme.breakpoints.down('sm')]: {
        // 600px
        left: 5,
      },
    },
  })
);

export default function ButtonInfo({ bottom, Icon }: Props) {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="contained"
      sx={{
        bottom: bottom,
      }}
    >
      {Icon}
    </Button>
  );
}
