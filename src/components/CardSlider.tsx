/* eslint-disable react/button-has-type */
/* eslint-disable prefer-template */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css'
export default function CardSlider({ endpoint, title, image, content }: any) {
  const navigate = useNavigate();
  const shortenContent = (str: string, maxWords: number) => {
    const words = str.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return str;
  };
  const handleClick = () => {
    // Handle click event to redirect to a different link
    navigate(endpoint); // Replace '/your-link' with the link you want to redirect to
  };
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={handleClick} component="div">
        <CardMedia
          component="img"
          height="210"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {shortenContent(title, 5)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortenContent(content, 30)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
