import React from 'react'
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
    card : {
        width: '45%',
height: '100px',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
    }
})

const Item = (props) => {

    const classes = useStyles();

    return(
        <Card className={classes.card}>
            {props.item.icon}
            {props.item.name}
        </Card>
    )
}

export default Item;