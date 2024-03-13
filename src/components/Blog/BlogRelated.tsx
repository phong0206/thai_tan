import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      marginTop: '35px',
      width: '100% !important',
    },
    title: {
      fontWeight: 'bold !important',
      fontFamily: 'Times New Roman !important',
    },
    row: {
      height: '20px !important',
    },
    cell: {
      whiteSpace: 'nowrap !important',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '6px !important',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
    services: {
      fontFamily: 'Muli, Arial, sans-serif !important',
      fontSize: '1.1rem !important',
      [theme.breakpoints.down('lg')]: {
        // 960px
        fontSize: '0.9rem !important',
      },
      '&:hover': {
        color: '#FF6600 !important',
      },
    },
  })
);

const BlogRelated = () => {
  const classes = useStyles();

  return (
    <Table className={classes.root}>
      <TableHead>
        <TableRow className={classes.row}>
          <TableCell colSpan={2} align="center" sx={{ padding: '8px' }}>
            <Typography variant="h5" className={classes.title}>
              Bài Viết Liên Quan
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[
          'Giấy chứng nhận đăng ký kinh doanh',
          'Giấy chứng nhận đăng ký đầu tư',
          'Giấy phép lao động',
          'Visa, thẻ tạm trú',
          'Giấy phép khác',
          'Dịch vụ tư vấn',
        ].map((service, index) => (
          <TableRow key={index} className={classes.row}>
            <TableCell className={classes.cell}>
              <a href="#" className={classes.link}>
                <Typography className={classes.services}>
                  • &ensp; {service}
                </Typography>
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlogRelated;
