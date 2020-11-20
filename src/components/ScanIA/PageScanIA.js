import React, {useEffect, useState} from 'react'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import HomeAppBar from "../Home/HomeAppBar";
import axios from 'axios'
import Result from "../Recycling/Result";
import Error from "../Recycling/Error";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import HomeIcon from "@material-ui/icons/Home";
import {secondary} from "../../shared/colors";
import {useHistory} from 'react-router-dom'



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
    buttonDiv:{
        display:'flex',
        justifyContent:'space-around'
    },
    button:{
        width:'45%',
        backgroundColor:secondary,
        color:'white'
    }
}));

const PageScanIA = (props) => {
    const classes = useStyles();
    const {source}=props.location.state;
    const {base64}=props.location.state;

    const [result,setResult]=useState('')

    const code = 'aucun'
    useEffect(() => {
        const test = base64.slice(22)
        axios.post(`http://localhost:5000/detect`,{data:test})
            .then(res=>{
                if(res.data !== 'Erreur'){
                    setResult(res.data)
                }
            })
    },[base64])

    const history = useHistory();

    const handleClick = (route) => {
        history.push(route)
    }

    return(
        <>
            <HomeAppBar/>
        {source &&
        <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
            <img src={source} alt={"snap"} className={classes.img}></img>
        </Box>}

            {result && result !== 'Materiau non reconnu' ? <Result result={result} code={code}/> : <Error code={result}/>}
            <div className={classes.buttonDiv}>
                <Button className={classes.button} onClick={() => handleClick('/scan')}>
                    Scanner un autre produit <ReplayIcon/>
                </Button>
                <Button className={classes.button} onClick={() => handleClick('/home')}>
                    <HomeIcon/> Retour à l'accueil
                </Button>
            </div>
        </>
    )
}

export default PageScanIA;