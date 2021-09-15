import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  studentForm: {
    padding: "20px 10px",
    flexGrow: 1,
  },
}));


const Add = () => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);
  const submitForm = () => {
    // document.forms[0].
    let data = new FormData(document.forms[0]);
    axios.post('http://localhost:3000/students/', data)
      .then(() => setSubmitted(true))
      .catch(err => console.log(err))
  }
  return (
    <React.Fragment>
      <form className={classes.studentForm} autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField id="name" label="Name" type="text" fullWidth margin="normal" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField id="phone" label="Phone" type="tel" fullWidth margin="normal" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField id="email" label="Email" type="email" fullWidth margin="normal" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField id="city" label="City" type="text" fullWidth margin="normal" variant="outlined" />
          </Grid>
          <Grid item>
            <RadioGroup aria-label="gender" name="gender" style={{ whiteSpace: "nowrap" }}>
              <FormControlLabel value="female" control={<Radio />} label="Female" color="primary" />
              <FormControlLabel value="male" control={<Radio />} label="Male" color="primary" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Button variant="contained" color="primary" onClick={submitForm}>
              Add student
            </Button>
          </Grid>
        </Grid>
      </form>
      {
        submitted ? <Redirect to="/" /> : null
      }
    </React.Fragment>
  )
}

export default Add;