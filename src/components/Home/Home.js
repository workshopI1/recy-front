import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import HomeAppBar from "./HomeAppBar";
import HomeTabs from "./HomeTabs";
import ContentList from "./Content/ContentList";
import CameraHandler from '../cameraHandler/CameraHandler'
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    tabs : {
        position:'absolute',
        bottom:'0',
        width:'100%',
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
    const history = useHistory();
    return(
        <div>
            <HomeAppBar/>
            <ContentList/>
            {/*<CameraHandler/>*/}
            <div className={classes.tabs}>

            <HomeTabs />
            </div>
        </div>
    )
}

export default Home;