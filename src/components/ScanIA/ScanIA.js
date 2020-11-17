import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import HomeAppBar from "../Home/HomeAppBar";
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        textAlign: 'center',
    },
    imgBox: {
        maxWidth: "80%",
        maxHeight: "80%",
        margin: "10px"
    },
    img: {
        height: "inherit",
        maxWidth: "inherit",
    },
    input: {
        display: "none"
    }
}));
const ScanIA = () => {
    const classes = useStyles();
    const [source, setSource] = useState("");
    const history = useHistory();
    const handleCapture = (target) => {
        if (target.files) {
            if (target.files.length !== 0) {
                const file = target.files[0];
                let imgBase64 = ''
                getBase64(file,(result) => {
                    imgBase64 = result;
                    const newUrl = URL.createObjectURL(file);
                    setSource(newUrl);
                    history.push({
                        pathname:'/scanIA',
                        state:{source : newUrl}
                    })
                })
            }
        }
    };

    const getBase64 = (file, cb)  => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
            reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    return (
        <div className={classes.root}>
            {/*<HomeAppBar/>*/}
            <Grid container>
                <Grid item xs={12}>
                    <h5>Pas de code barre ? Scanner directement votre produit</h5>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                        capture="environment"
                        onChange={(e) => handleCapture(e.target)}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >
                            <PhotoCameraRoundedIcon fontSize="large" color="primary" />
                        </IconButton>
                    </label>
                </Grid>
            </Grid>
        </div>
    );
}
export default ScanIA;