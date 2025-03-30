import React from 'react'
import { Box,Typography,Avatar,Button } from '@mui/material'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function HomeUi() {
  return (
    <>
    <Box sx={{
        display:'flex',
        height:'100vh'
    }}>
    <Box sx={{
        width:'80%',
        boxShadow:'2',
        mx:'auto',
        my:'auto'

        }}>
        <Avatar src={logo} sx={{mx:'auto'}}/>
        <Typography variant='h5' sx={{
            fontWeight:'bold', 
            color:'#160471',
            textAlign:'center',
            mt:'20px'}}>
            welcome to 
        </Typography>
        <Typography sx={{
            fontSize:'25px',
            fontWeight:'bold', 
            color:'mdfac00',
            textAlign:'center',
            mb:'50px'}}>
            Z Site By DTI-SAU
        </Typography>
            
        <Button component={Link} to='/login' variant='contained' sx={{
            mb:'30px',
            display:'block',
            mx:'auto',
            width:'200px',
            backgroundColor:'#FE00CB',
            textAlign:'center'
        }}>
           Go to Login Page
        </Button>
    </Box>
    </Box>
   
    </>
  )
}

export default HomeUi