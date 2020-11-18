import React from 'react';
import Typography from "@material-ui/core/Typography";
import HomeAppBar from "../Home/HomeAppBar";
import DeleteIcon from '@material-ui/icons/Delete';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";


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
    }
})
const Recycling = (props) => {

    const {code} = props.location.state;
    code && fetch(`http://localhost:5000/recycling/get/${code}`).then(res => console.log(res));

    const result = {
        name:'Bouteille de jus Innocent',
        recycl:'Bouteille'
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
                {/*<Typography>A recycler dans : {result.recycl}</Typography>*/}
            </Card>
            <Typography>Code trouvé : {code}</Typography>
        </>
    )
}

export default Recycling;