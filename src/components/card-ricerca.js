import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import '../medico-competente.png'

export default function ActionAreaCardRicerca() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="https://st2.depositphotos.com/1743476/5738/i/450/depositphotos_57385697-stock-photo-confident-mature-doctor.jpg"
          alt="immagine di copertina"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mario Rossi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Provincia:</strong> Treviso <br/>
            <strong>Professione:</strong> Osteopata <br/>
            Lorem ipsum dolor sit amet. Sed sunt expedita et nihil sint et quos aperiam est alias dicta qui fuga vitae? Ut optio distinctio rem eius ullam et tempora quasi. Aut delectus tempora 33 deleniti rerum eos totam ipsam quo velit pariatur vel quibusdam molestiae qui tempore suscipit.
          </Typography>
          <Button variant="contained" sx={{width: '100%', marginTop: '10px'}}>Prenota visita</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
