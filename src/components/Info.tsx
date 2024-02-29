import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';

interface Props {
  content?: string;
  windowWidth?: number;
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    gridInfo: {
      backgroundColor: '#032234',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      fontSize: '24px',
      height: '90px',
      [theme.breakpoints.down('lg')]: {
        // 1280px
        marginTop: '40px',
        fontSize: '24px',
        height: '90px',
      },
      [theme.breakpoints.down('md')]: {
        // 960px
        marginTop: '26px',
        fontSize: '19px',
        height: '80px',
      },
      [theme.breakpoints.down('sm')]: {
        // 600px
        marginTop: '-25px',
        fontSize: '16px',
        height: '120px',
      },
    },
    spanText: {
      color: 'white',
      marginLeft: '9rem',
      [theme.breakpoints.down('lg')]: {
        // 1280px
        marginLeft: '60px',
      },
      [theme.breakpoints.down('md')]: {
        // 960px
        marginLeft: '50px',
      },
      [theme.breakpoints.down('sm')]: {
        // 600px
        marginLeft: '15px',
      },
    },
    griditem: { marginTop: '14px' },
  })
);

function Text({ content }: Props) {
  const classes = useStyles();
  return <span className={classes.spanText}>{content}</span>;
}
export default function Info({ windowWidth }: Props) {
  const classes = useStyles({ windowWidth });

  return (
    <Grid container spacing={2} className={classes.gridInfo}>
      {windowWidth && windowWidth >= 768 ? (
        <>
          <Grid item xs={6} className={classes.griditem}>
            <Text
              content="Email: vanphong02062002@gmail.com"
            />
          </Grid>
          <Grid item xs={6} className={classes.griditem}>
            <Text
              content="Hotline: 0326603593 - 0976333871"
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sx={{ marginTop: '15px' }}>
            <Text
              content="Email: vanphong02062002@gmail.com"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '-35px' }}>
            <Text
              content="Hotline: 0326603593 - 0976333871"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
