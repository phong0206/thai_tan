/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Carousel from 'react-elastic-carousel';
import CardSlider from './CardSlider';
import '../../App.css';
import { makeStyles, createStyles } from '@mui/styles';
import * as api from '../../apis/api';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    div: {
      marginBottom: '60px',
      marginInline: '18vh',

      [theme.breakpoints.down('lg')]: {
        // 1280px
        marginInline: '8vw',
      },
      [theme.breakpoints.down('md')]: {
        // 960px
        marginInline: '3vw',
      },
      [theme.breakpoints.down('sm')]: {
        // 600px
        marginInline: '5px',
      },
    },
    h2: {
      marginBottom: '40px',
    },
  })
);

interface Props {
  categoryName: string; // Thay đổi type nếu cần
  categoryId: string;
}

export default function Slider({ categoryName, categoryId }: Props) {
  const classes = useStyles();
  const [slide, setSlide] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlogsByUnit = async () => {
      try {
        const response = await api.getBlogByCategoryId(categoryId);
        console.log(response.data.blogsWithPathImages);
        if (response.status === 200) {
          setSlide(response.data.blogsWithPathImages);
        }
      } catch (error) {
        console.error('Error fetching blogs by unit', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogsByUnit();
  }, [categoryId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className={classes.div}>
      <h2 className={classes.h2}>{categoryName}</h2>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay={true}
        autoPlaySpeed={3000}
        renderPagination={() => (
          <div style={{ textAlign: 'center' }}>{/* Bỏ thanh số thứ tự */}</div>
        )}
      >
        {slide.map((slide, index) => (
          <CardSlider key={index} {...slide} />
        ))}
      </Carousel>
    </div>
  );
}
