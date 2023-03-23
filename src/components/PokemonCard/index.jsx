import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../pages/style.scss";


export default function PokemonCard( {name, image, types}) {
  return (
    <Card sx={{ maxWidth: 345,margin:"0.5em", padding:'1.2em', justifyContent: 'center', boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
      <CardMedia
        sx={{  width: '90%', height: '12em' }}
        image={image}
        title="green iguana"
      />
      <CardContent sx={{ justifyContent: 'center', textAlign: 'center', textTransform:'capitalize'}}>
        <Typography gutterBottom variant="h5" component="div" justifyContent="space-between">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center'}}>
        {types.map((type, key) => (
          <Button size="small" className={`color-type-${type.type.name}`} >{type.type.name}</Button>
        ))}
      </CardActions>
    </Card>
  );
}