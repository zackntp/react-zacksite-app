import React from 'react'
import { AppBar,Toolbar,Typography,Box,Avatar,TextField } from '@mui/material'
import { FormControl,FormControlLabel,RadioGroup,Radio,Button,Stack } from '@mui/material'
import CastleIcon from '@mui/icons-material/Castle';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function LoginUi() {
  return (
  <>
  <AppBar position='static' sx={{backgroundColor:'#049156'}}>
    <Toolbar>
        <Link to={'/'}>
        <CastleIcon sx={{
            color:'yellow',
            fontSize:'30px'
            
        }}/>
        </Link>
        <Typography sx={{
            ml:'10px',
            flexGrow:'1'
        }}>
            Z Site by DTI-SAU
        </Typography>
        <Typography sx={{
            mr:'10px',
            textDecoration:'none',
            color:'white'
        }} component={Link} to='/login'>
            Login
        </Typography>
        <Typography component ={Link} to ='/contact'sx={{
            mr:'10px',
            textDecoration:'none',
            color:'white'
        }}>
            Contact
        </Typography>
        <Typography component={Link} to ='/about' sx={{
            textDecoration:'none',
            color:'white'
        }}>
            AboutUs
        </Typography>
    </Toolbar>
  </AppBar>
    
<Box sx={{
    width:'70%',
    mx:'auto',
    mt:'50px',
    boxShadow:'1',
    px:'40px',  
    pb:'40px'
}}>
<Avatar src={logo} sx={{
    mx:'auto',
    mt:'20px',
    width:'100px',
    height:'100px'
}}></Avatar>
 <Typography sx={{
    textAlign:'center',
    mt:'20px',
    fontSize:'20px',
    fontWeight:'bold'
 }}>
    เข้าใช้งานระบบ
 </Typography>

 <Typography sx={{
    fontSize:'16px',
 }}>
ชื่อผู้ใช้
 </Typography>
 <TextField size='small' fullWidth></TextField>
 <Typography sx={{
    fontSize:'16px',
    mt:'20px'
 }}>
รหัสผ่าน
 </Typography>
 <TextField size='small' fullWidth type='password'></TextField>
 <FormControl>
    <RadioGroup>
        <FormControlLabel value="สมาชิกทั่วไป" control={<Radio/>} label="สมาชิกทั่วไป"></FormControlLabel>
        <FormControlLabel value="Admin" control={<Radio/>} label="Admin"></FormControlLabel>
    </RadioGroup>
 </FormControl>
 <Button varaint = 'contained' fullWidth sx={{my:'20px',backgroundColor:'#049156'}}>
    <Typography sx={{color:'white'}}>Login</Typography>
 </Button>
 <Stack direction={'row'} sx={{
    display:'flex',
    justifyContent:'center'
    
 }}>
 <Typography sx={{
    fontSize:'16px',
 }}>
ยังไม่มีบัญชี
 </Typography>
 <Typography sx={{
    fontSize:'16px',
    ml:1,
    color:'red'
 }}>
ลงทะเบียน
 </Typography>
 </Stack>
 
</Box>

  </>
  )
}

export default LoginUi