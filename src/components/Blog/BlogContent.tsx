import React from 'react';
import { Box, Typography } from '@mui/material';

const BlogContent = ({ blog }:any) => {
  return (
    <Box>
      <Typography>{blog.content}</Typography>
    </Box>
  );
};

export default BlogContent;
