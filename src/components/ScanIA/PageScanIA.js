import React from 'react'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import HomeAppBar from "../Home/HomeAppBar";


const useStyles = makeStyles((theme) => ({
    imgBox: {
        maxWidth: "80%",
        maxHeight: "80%",
        margin: "10px"
    },
    img: {
        height: "inherit",
        maxWidth: "inherit",
    },
}));

const PageScanIA = (props) => {
    const classes = useStyles();
    const {source}=props.location.state;
    console.log(source)
    return(
        <>
            <HomeAppBar/>
        {source &&
        <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
            <img src={source} alt={"snap"} className={classes.img}></img>
        </Box>}
        </>
    )
}

export default PageScanIA;