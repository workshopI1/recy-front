import React from 'react';
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


const useStyles = makeStyles({
    card : {
      margin:'10px',
        padding:'10px'
    },
    paper:{
        textAlign:'left',
        margin:'0 20px 0 20px',
        display:'flex',
        alignItems:'center'
    },
    yellow : {
        color:'#d6be36',
    },
    grey : {
        color:'#4f4f4f'
    },
    green:{
      color:'#49ad49'
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
})
const Recycling = (props) => {

    const {code} = props.location.state;
    code && fetch(`http://localhost:5000/recycling/get/${code}`).then(res => console.log(res));

    const result = {
        name:'Bouteille de jus Innocent',
        recycl:'Bouteille'
    }

    const history = useHistory();
    const handleClick = (route) => {
        history.push(route)
    }
    const classes = useStyles();
    return (
        <>
            <HomeAppBar/>
            <Card className={classes.card}>
                <Typography variant='h4'>{result.name} :</Typography>
                <Divider/>
                <div className={classes.paper}>
                    <DeleteIcon className={classes.yellow} style={{fontSize:80}}/>
                    Poubelle jaune : {result.recycl}
                </div>
                <div className={classes.paper}>
                    <DeleteIcon className={classes.grey} style={{fontSize:80}}/>
                    A jeter : {result.recycl}
                </div>
                <div className={classes.paper}>
                    <DeleteIcon className={classes.green} style={{fontSize:80}}/>
                    Container à verre : {result.recycl}
                </div>
            </Card>
            <Typography>Code trouvé : {code}</Typography>
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