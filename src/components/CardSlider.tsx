/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css';

interface Props {
  endpoint: string;
  title: string;
  image: string;
  content?: string;
}
export default function CardSlider(props: Props) {
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
    navigate(props.endpoint); // Replace '/your-link' with the link you want to redirect to
  };
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={handleClick} component="div">
        <CardMedia
          component="img"
          height="210"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {shortenContent(props.title, 5)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content ? shortenContent(props.content, 30) : ''}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
