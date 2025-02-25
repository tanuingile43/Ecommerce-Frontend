import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import Order_Summery from './Order_Summery';
import Delivery_Address from './Delivery_Address';

const steps = ['Login', 'Delivery Address', 'Order Summery', 'Payment'];

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const location = useLocation()

  const querySearch = new URLSearchParams(location.search)

  const step = querySearch.get('step')


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };





  return (
    <div className='bg-white rounded-md p-5'>
      <h2 className='text-2xl font-bold pb-8 '>Checkout</h2>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
            </Box>
          </React.Fragment>
        ) : (
          <>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

            </Box>
            <div className='mt-10'>
              {
                (step == 2 ? <Delivery_Address /> : <Order_Summery />)
              }
            </div>
          </>
        )}
      </Box>
    </div>
  );
}

export default Checkout