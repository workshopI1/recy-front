import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import HomeAppBar from "../Home/HomeAppBar";
import DeleteIcon from '@material-ui/icons/Delete';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";
import ReplayIcon from '@material-ui/icons/Replay';
import Divider from "@material-ui/core/Divider";
import HomeIcon from '@material-ui/icons/Home';
import Button from "@material-ui/core/Button";
import {secondary} from "../../shared/colors";
import {useHistory} from 'react-router-dom'
import Result from "./Result";
import Error from "./Error";
import axios from 'axios'

const useStyles = makeStyles({
    buttonDiv:{
        display:'flex',
        justifyContent:'space-around'
    },
    button:{
        width:'45%',
        backgroundColor:secondary,
        color:'white'
    }
})
const Recycling = (props) => {

    const {code} = props.location.state;

    const [result,setResult] = useState('')
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/barcode/${code}`)
            .then(res => {
                if(res.data !== 'Erreur'){
                    setResult(res.data)
                }
            });
    },[code])

    console.log(result)
    // axios.get(`http://127.0.0.1:5000/barcode/${code}`)
    //     .then(res => setResult(res.data));

    // code && fetch(`http://127.0.0.1:5000/barcode/${code}`).then(res => console.log(res));

    // const result = {
    //     name:'Bouteille de jus Innocent',
    //     recycl:'Bouteille'
    // }
    // const result = ''

    const history = useHistory();
    const handleClick = (route) => {
        history.push(route)
    }
    const classes = useStyles();
    return (
        <>
            <HomeAppBar/>
            {result ? <Result result={result} code={code}/> : <Error code={code}/>}
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

export default Recycling;