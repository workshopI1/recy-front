import React, {useState} from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import AddWaste from "./AddWaste";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import {primary} from "../../shared/colors";


const useStyles = makeStyles({
    card:{
        margin:'5px'
    },
    button:{
        margin:'5px',
        backgroundColor:primary,
        color:'white',
        fontWeight:'bold'
    }
})
const Error = (props) => {

    const [open,setOpen] = useState(false);
    const classes = useStyles();
console.log(props.code)
    return(
        <>
            <Card className={classes.card}>
                <Typography>Nous n'avons pas réussi à identifier le matériau</Typography>
                <Typography>Réesayer en prenant la photo de plus près ou avec un fond blanc</Typography>
                {props.code !== 'Materiau non reconnu' ? <Button variant='contained' onClick={() => setOpen(true)} className={classes.button}>Ajouter le déchet</Button> : ''}
            </Card>

            <AddWaste
                code={props.code}
                open={open}
                setOpen={() => setOpen(false)}
            />
        </>
    )
}

export default Error;