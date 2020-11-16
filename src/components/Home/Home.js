import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import HomeAppBar from "./HomeAppBar";
import HomeTabs from "./HomeTabs";
import ContentList from "./Content/ContentList";

const useStyles = makeStyles((theme) => ({
    tabs : {
        position:'absolute',
        bottom:'0',
        width:'100%',
        // height:'100%'
    }
    // container : {
    //     display: 'inline-block',
    //     position: 'relative',
    //     width: '100%',
    //     paddingBottom: '100%',
    //     verticalAlign: 'middle',
    //     overflow: 'hidden',
    // },
    // svg : {
    //     display: 'inline-block',
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    // }
}));

const Home = () => {

    const classes = useStyles();
    return(
        <div>
            <HomeAppBar/>
            <ContentList/>
            <div className={classes.tabs}>

            <HomeTabs />
            </div>
        </div>
    )
}

export default Home;