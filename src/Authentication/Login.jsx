import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login } from '../State/Auth/Action'
const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = {
            password: data.get('password'),
            email: data.get('email'),
        }

        dispatch(login(userData))


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField required type='email' id='email' name='email' label="Your Email" fullWidth autoComplete='email' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required type='password' id='password' name='password' label="Your Password" fullWidth autoComplete='password' />
                    </Grid>

                    <Grid item xs={12} >
                        <Button type='submit'
                            className=' w-full'
                            variant='contained'
                            size='large'
                            sx={{ padding: ".8rem 0", bgcolor: "#9155fd" }}

                        >Sign In</Button>
                    </Grid>
                </Grid>

            </form>

            <div className="flex justify-center flex-col items-center">
                <div className='py-3 flex items-center'>
                    <p>If You don't have an account
                        <Button className='ml-5' size="small" onClick={() => navigate('/signup')}>Register</Button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login