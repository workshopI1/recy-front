import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {background} from "../../shared/colors";
import logo from '../../shared/IMGBIN_logo-recycling-symbol-reclaimed-water-computer-icons-png_wVrpy3Xp.png'
import {useHistory} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles((theme) =>({
    navBar : {
        background : background,
        position:'relative'
    },
    img:{
        height: '50px',
        background: 'white',
        borderRadius: '50%',
        margin: 'auto',
    },
    back:{
        position:'absolute',
        left:'10px',
        top:'50%',
        transform:'translateY(-50%)',
        color:'white'
    }
}))

const HomeAppBar = () => {
    const classes = useStyles();

    const history = useHistory();

        console.log(history)
    const handleBack = () => {
        history.goBack();
    }

    return(
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
                {history.location.pathname !== '/home' ?
                    <IconButton onClick={handleBack} className={classes.back}>
                        <ArrowBackIcon/>
                    </IconButton>
                    : null}
                <img className={classes.img} src={logo} alt={'a'}/>
            </Toolbar>
        </AppBar>
    )
}

export default HomeAppBar;