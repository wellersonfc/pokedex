import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function PokemonCard( {name, image, types}) {
  return (
    <Card sx={{ maxWidth: 345,margin:"0.5em"}}>
      <CardMedia
        sx={{ height: 160,  }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        {types.map((type, key) => (
          <Button size="small">{type.type.name}</Button>
        ))}
      </CardActions>
    </Card>
  );
}