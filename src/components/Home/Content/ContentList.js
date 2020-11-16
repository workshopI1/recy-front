import React from 'react'
import CropFreeIcon from '@material-ui/icons/CropFree';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import Item from "./Item";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    list :{
        display:'flex',
        margin:'auto',
        justifyContent:'space-around',
        marginTop:'10px'
    },
    typo:{
        marginTop:'10px',
        marginLeft:'20px',
        textAlign:'left'
    },
    divider:{
        margin:'10px'
    }
})

const ContentList = () => {

    const classes = useStyles();
    const itemList = [{name:'Scanner',icon:<CropFreeIcon/>},{name:'Mes déchets',icon: <DeleteSweepIcon/>}];
    return(
        <>
            <Typography variant='h4' className={classes.typo}>Acceuil</Typography>
            <div className={classes.list}>
                {itemList.map(i => <Item item={i}/>)}
            </div>

            <Divider className={classes.divider}/>
            <Typography variant='h4' className={classes.typo}>Astuces</Typography>

        </>
    )
}

export default ContentList;