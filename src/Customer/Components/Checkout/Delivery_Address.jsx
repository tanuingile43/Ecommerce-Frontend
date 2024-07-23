import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'

const Delivery_Address = () => {

  return (
    <div className='px-5   lg:px-10'>
      <Grid container spacing={4}>
    
        <Grid item xs={12} lg={12}>
          <Box className="border border-0-md shadow-md p-5">
            <form >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required id='firstName' name='firstName' label='First Name' fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='lastName' name='lastName' label='Last Name' fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} >
                  <TextField required multiline rows={3} id='address' name='address' label='Enter Address' fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='city' name='city' label='City' fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='state' name='state' label='State/Province/Region' fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='zip' name='zip' label='Zip Code/Postal Code' fullWidth autoComplete='shipping postal code' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id='phoneNumber' name='phoneNumber' label='Phone Number' fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12}>
                  <TextField required id='email' name='email' label='Email' fullWidth autoComplete='given-name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type='submit' variant='contained' sx={{ px: '2rem', py: '.7rem', bgcolor: "#9155fd" }} >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
export default Delivery_Address