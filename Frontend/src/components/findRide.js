import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FindRide() {

    

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Find a ride
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            id="source"
            name="source"
            label="Source"
            fullWidth
            autoComplete="Source"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="destination"
            name="destination"
            label="Car Destination"
            fullWidth
            autoComplete="Car Type"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="carType"
            name="carType"
            label="Car Type"
            fullWidth
            autoComplete="Car Type"
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pickupDate"
            name="pickupDate"
            label="Pick-up date"
            fullWidth
            autoComplete="Pick-up date"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="time"
            name="time"
            label="Time"
            fullWidth
            autoComplete="Time"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dropoffDate"
            name="dropoffDate"
            label="Drop-off date"
            fullWidth
            autoComplete="Drop-off date"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="time"
            name="time"
            label="Time"
            fullWidth
            autoComplete="Time"
            variant="standard"
          />
        </Grid> */}
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