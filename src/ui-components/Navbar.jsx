import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'rgb(69, 86, 124)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/EmployeeAPP'} style={{color: 'white', textDecoration:'none'}}>Employee Cred App</Link>
          </Typography>
          <Button color="inherit"><Link to={'/EmployeeAPP'} style={{color: 'white', textDecoration:'none'}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/detail'} style={{color: 'white', textDecoration:'none'}}>Employees</Link></Button>
          <Button color="inherit"><Link to={'/add'} style={{color: 'white', textDecoration:'none'}}>Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar