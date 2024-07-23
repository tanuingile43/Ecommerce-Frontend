import React, { useEffect } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();





    const handleSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField required id='firstName' name='firstName' label="First Name" fullWidth autoComplete='given-name' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required id='lastName' name='lastName' label="Last Name" fullWidth autoComplete='given-name' />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField required id='mobile' name='mobile' label="Your Number" fullWidth autoComplete='number' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField required type='password' id='password' name='password' label="Your Password" fullWidth autoComplete='password' />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField required type='email' id='email' name='email' label="Your Email" fullWidth autoComplete='email' />
                    </Grid>
                    <Grid item xs={12} >
                        <Button type='submit'
                            className=' w-full'
                            variant='contained'
                            size='large'
                            sx={{ padding: ".8rem 0", bgcolor: "#9155fd" }}

                        >Sign Up</Button>
                    </Grid>
                </Grid>

            </form>

            <div className="flex justify-center flex-col items-center">
                <div className='py-3 flex items-center'>
                    <p>If You have an already account
                        <Button className='ml-5' size="small" onClick={() => navigate('/login')}>Login</Button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup