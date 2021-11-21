import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Card } from '@mui/material';

const CarDetails = props => {

  const {car, setCar} = props;

  const handleFormChange = (e,field) => {
    setCar({
      ...car,
      [field]: e.target.value,
    })
    console.log(e.target.value);
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add car details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="carNumber"
            name="carNumber"
            label="Car Number"
            fullWidth
            autoComplete="Car Type"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'carId')}
            defaultValue={car ? car.carId: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="carModel"
            name="carModel"
            label="Car Model"
            fullWidth
            autoComplete="Car Model"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'model')}
            defaultValue={car ? car.model: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="chargesPerDay"
            name="chargesPerDay"
            label="Your expected charges: $"
            fullWidth
            autoComplete="Your expected charges: $"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'chargesPerDay')}
            defaultValue={car ? car.chargePerDay: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="mileage"
            name="Mileage"
            label="Mileage of you car"
            fullWidth
            autoComplete="Mileage of you car"
            variant="standard"
            onChange={(e)=>handleFormChange(e,'mieleage')}
            defaultValue={car ? car.mileage: ''}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="I confirm that I am 21 years old or over."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CarDetails;