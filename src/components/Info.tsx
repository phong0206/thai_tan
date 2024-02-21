import { Grid } from '@mui/material';
import React from 'react';

function Text({ content, windowWidth }: any) {
  return (
    <span
      style={{
        color: 'white',
        marginInline: windowWidth > 600 ? '17vh' : 0,
      }}
    >
      {content}
    </span>
  );
}

export default function Info({ windowWidth }: any) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#032234',
        fontSize: windowWidth > 600 ? '16px' : '13px',
        height: windowWidth > 600 ? '80px': '70px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {windowWidth >= 1100 ? (
        <>
          <Grid item xs={6}>
            <Text
              windowWidth={windowWidth}
              content="Email: vanphong02062002@gmail.com"
            />
          </Grid>
          <Grid item xs={6}>
            <Text
              windowWidth={windowWidth}
              content="Hotline: 0326603593 - 0976333871"
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sx={{ marginTop: '5px' }}>
            <Text
              windowWidth={windowWidth}
              content="Email: vanphong02062002@gmail.com"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '-15px' }}>
            <Text windowWidth={windowWidth} content="Hotline: 0326603593" />
          </Grid>
        </>
      )}
    </Grid>
  );
}
