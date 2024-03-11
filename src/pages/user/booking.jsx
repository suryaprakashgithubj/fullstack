import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EventBookingPage = () => {
  const labelStyle = {
    fontFamily: 'sans-serif',
    marginBottom: '8px',
  };

  const textFieldStyle = {
    marginBottom: '20px',
    marginTop: '20px',
    fontFamily: 'sans-serif', // Ensure sans-serif font
  };

  const inputStyle = {
    backgroundColor: 'white',
    fontFamily: 'sans-serif', // Ensure sans-serif font
  };

  const buttonStyle = {
    backgroundColor: '#093A3E', // Background color for the button
    color: 'white', // Text color for the button
  };

  const backgroundStyle = {
    backgroundImage: "url('/src/assets/images/277719.jpg')", // Background image URL
    backgroundSize: 'cover', // Ensure the background image covers the entire background
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Added to center vertically
  };

  const formContainerStyle = {
    backgroundColor: '#F5F5F5',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginTop: '50px', // Added to create space between header and form
    marginBottom: '100px', // Added marginBottom to create space below the form
  };

  const headingStyle = {
    fontFamily: 'sans-serif',
    marginBottom: '20px',
    fontSize: '50px',
    fontWeight: 700,
    color: 'white',
    marginTop: '100px', // Added margin to the top
  };

  return (
    <div style={backgroundStyle}>
      <p style={headingStyle}>Book your corporate events here!!</p>
      <div style={formContainerStyle}>
        <Formik
          initialValues={{
            eventName: '',
            numberOfGuests: '',
            budget: '',
            foodPreferences: ''
          }}
          validationSchema={Yup.object({
            eventName: Yup.string().required('Event Name is required'),
            numberOfGuests: Yup.number().required('Number of Guests is required').positive().integer(),
            budget: Yup.number().required('Budget is required').positive(),
            // foodPreferences: Yup.string().required('Food Preferences is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="eventName" style={labelStyle}>Event Name</label>
              <Field
                name="eventName"
                type="text"
                as={TextField}
                variant="outlined"
                fullWidth
                style={textFieldStyle}
                inputProps={{ style: inputStyle }}
              />
              <ErrorMessage name="eventName" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="numberOfGuests" style={labelStyle}>Number of Guests</label>
              <Field
                name="numberOfGuests"
                type="number"
                as={TextField}
                variant="outlined"
                fullWidth
                style={textFieldStyle}
                inputProps={{ style: inputStyle }}
              />
              <ErrorMessage name="numberOfGuests" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="budget" style={labelStyle}>Budget</label>
              <Field
                name="budget"
                type="number"
                as={TextField}
                variant="outlined"
                fullWidth
                style={textFieldStyle}
                inputProps={{ style: inputStyle }}
              />
              <ErrorMessage name="budget" component="div" style={{ color: 'red' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="foodPreferences" style={labelStyle}>Food Preferences</label>
              <Field
                name="foodPreferences"
                as={FormControl}
                variant="outlined"
                fullWidth
                style={textFieldStyle}
                inputProps={{ style: inputStyle }}
              >
                <Select>
                  <MenuItem value="veg">Veg</MenuItem>
                  <MenuItem value="non-veg">Non-Veg</MenuItem>
                </Select>
              </Field>
              <ErrorMessage name="foodPreferences" component="div" style={{ color: 'red' }} />
            </div>
            <Button variant="contained" color="primary" type="submit" style={buttonStyle}>
              Book Event
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EventBookingPage;
