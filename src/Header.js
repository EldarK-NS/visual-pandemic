import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {  Link } from 'react-router-dom'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>             
                    <Typography variant="h6" style={appNameStyle}>
                        Covid19 stats
                 </Typography>
                    <Button color="inherit" component={Link} to="/">Summary</Button>
                    <Button color="inherit" component={Link} to="/detailed">Detail</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
// rfce - быстрое создание

const appNameStyle = {
    flexGrow: 1
}