/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Carousel from 'react-elastic-carousel';
import CardSlider from './CardSlider';
import '../App.css';
import { makeStyles, createStyles } from '@mui/styles';

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
export default function Slider({ windowWidth, Unit }: any) {
  const classes = useStyles();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const dataCard = [
    {
      title: 'một hai ba bốn năm sáu nghi đi',
      image:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Bird',
      image:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Bali, Indonesia',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Goč, Serbia',
      image:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'San Francisco – Oakland Bay Bridge, United States',
      image:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Bird',
      image:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Bali, Indonesia',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Goč, Serbia',
      image:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Bali, Indonesia',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Goč, Serbia',
      image:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'San Francisco – Oakland Bay Bridge, United States',
      image:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Bird',
      image:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Bali, Indonesia',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
    {
      title: 'Goč, Serbia',
      image:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      content:
        'Để giới hạn nội dung hiển thị chỉ đến 20 từ, bạn có thể sử dụng một hàm để cắt chuỗi nội dung và chỉ lấy 20 từ đầu tiên. Dưới đây là cách bạn có thể thực hiện điều này:',
    },
  ];

  return (
    <div className={classes.div}>
      <h2 className={classes.h2} style={{ marginBottom: '40px' }}>
        {Unit}
      </h2>
      <Carousel
        breakPoints={breakPoints}
        renderPagination={() => (
          <div style={{ textAlign: 'center' }}>{/* Bỏ thanh số thứ tự */}</div>
        )}
      >
        {dataCard.map((cardData, index) => (
          <CardSlider endpoint={''} key={index} {...cardData} />
        ))}
      </Carousel>
    </div>
  );
}