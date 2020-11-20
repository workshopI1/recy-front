import React from 'react'
import HomeAppBar from "../Home/HomeAppBar";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import HomeIcon from "@material-ui/icons/Home";
import {makeStyles} from "@material-ui/styles";
import {secondary} from "../../shared/colors";

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
})

const Result = (props) => {

    const {result}=props;
    const {code} = props;
    const classes = useStyles();
    console.log(result)

    return (
        <>
            <Card className={classes.card}>
                <Typography variant='h4'>{result.name ? result.name : result.material} :</Typography>
                <Divider/>
                <div className={classes.paper}>
                    <DeleteIcon className={classes.yellow} style={{fontSize:80}}/>
                    Poubelle jaune : {result.trash === 'jaune' ? result.material : 'Rien'}
                </div>
                <div className={classes.paper}>
                    <DeleteIcon className={classes.grey} style={{fontSize:80}}/>
                    A jeter : {result.trash === 'noir' ? result.material : 'Rien'}
                </div>
                <div className={classes.paper}>
                    <DeleteIcon className={classes.green} style={{fontSize:80}}/>
                    Container à verre : {result.trash === 'vert' ? result.material : 'Rien'}
                </div>
            </Card>
            <Typography>Code trouvé : {code}</Typography>
        </>
    )
}

export default Result;