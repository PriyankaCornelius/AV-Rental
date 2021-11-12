import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CarDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add car details
      </Typography>
      <Grid container spacing={3}>
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
        <Grid item xs={12}>
          <TextField
            id="carModel"
            name="carModel"
            label="Car Model"
            fullWidth
            autoComplete="Car Model"
            variant="standard"
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