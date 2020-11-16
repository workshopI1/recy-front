import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {background} from "../../shared/colors";
import logo from '../../shared/IMGBIN_logo-recycling-symbol-reclaimed-water-computer-icons-png_wVrpy3Xp.png'

const useStyles = makeStyles((theme) =>({
    navBar : {
        background : background
    },
    img:{
        height: '50px',
        background: 'white',
        borderRadius: '50%',
        margin: 'auto',
    }
}))

const HomeAppBar = () => {

    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
                <img src={logo} alt={'a'}/>
            </Toolbar>
        </AppBar>
    )
}

export default HomeAppBar;