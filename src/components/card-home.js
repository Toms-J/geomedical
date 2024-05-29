import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCardHome(props) {
    const {imgUrl, title} = props;
  return (
    <Card sx={{ minWidth: 345, boxShadow: 'none' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum dolor sit amet. Qui consectetur consequuntur et eius numquam eos blanditiis ducimus. Ut delectus quia vel iusto architecto est exercitationem nesciunt ex expedita quisquam est animi nesciunt quo mollitia eaque.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
