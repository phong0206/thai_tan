/* eslint-disable react/self-closing-comp */

import '../App.css';
import * as React from 'react';
import Header from '../components/Home/Header';
import InfoBarBlog from '../components/Blog/InfoBarBlog';
import Footer from '../components/Home/Footer';
import { Container, Box, Grid } from '@mui/material';
import BlogContent from '../components/Blog/BlogContent';
import BlogRelated from '../components/Blog/BlogRelated';
import OutstandingService from '../components/Blog/OutstandingService';
import Info from '../components/Home/Info';
import ScrollTopButton from '../components/Home/ScrollTopButton';
import { ButtonContact } from './Home';
import { makeStyles, createStyles } from '@mui/styles';
import ShareButton from '../components/Blog/ShareButton';
import { useParams } from 'react-router-dom';
import * as api from '../apis/api';


function DetailBlog() {
  let { slug } = useParams();

  const [blog, setBlog] = React.useState(null);

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.getDetailBlog(slug as string);
        if (response.status === 200) {
          setBlog(response.data.detail);
        }
      } catch (error) {
        console.error('Error fetching blog', error);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }
  console.log(blog);

  return (
    <div className="App">
      <Header />
      <Info />
      <InfoBarBlog blog={blog} />
      <ScrollTopButton />
      <ButtonContact />
    
      <Footer />
    </div>
  );
}

export default DetailBlog;
