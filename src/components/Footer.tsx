/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Box } from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      fontSize: '1.3rem',
      fontFamily: 'Times New Roman',
      marginBottom: '1rem',
    },
  })
);
export default function Footer() {
  const classes = useStyles();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
        p: 6,
        fontFamily: 'Times New Roman',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Typography
              className={classes.header}
              color="text.primary"
              gutterBottom
            >
              Công Ty TNHH Tư Vấn Đầu Tư Thái Tân
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <BusinessIcon fontSize="small" />
              41 Chu Van An, Bac Ninh, Vietnam
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <EmailIcon fontSize="small" />
              Email: Taixininvest.co.ltd@gmail.com
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <SmartphoneIcon fontSize="small" />
              Phone: +84 37 474 9871
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              className={classes.header}
              color="text.primary"
              gutterBottom
            >
              Dịch Vụ Nổi Bật
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <a href="">Giấy phép trang thiết bị y tế</a>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <a href="">Tư vấn doanh nghiệp</a>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <a href="">Giấy phép phòng khám</a>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <a href="">Sở hữu trí tuệ</a>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <a href="">Dịch vụ khác</a>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <a href="">Tư vấn</a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={classes.header}
              color="text.primary"
              gutterBottom
            >
              Kết Nối Với Chúng Tô1
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
