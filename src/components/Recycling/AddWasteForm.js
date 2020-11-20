import React, {useEffect, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/styles/makeStyles";
import {secondary} from "../../shared/colors";
import Button from "@material-ui/core/Button";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    form:{
        display:'flex',
        flexDirection:'column',
        height:'100%'
    },
    formContent:{
        flex:'1 0 auto'
    },
    submit:{
        color:'white',
        flexShrink:0,
        width:'unset',
        margin:'5px auto 5px auto'
    },
    icon:{
        color:secondary
    },
    input:{
        margin:'10px 5% 10px 5%',
        width:'90%'
    }
}));

const AddWasteForm = (props) => {

    const [materials,setMaterials] = useState()

    useEffect(() => {
        axios.get(`https://recy-back-prod.herokuapp.com//materials`)
            .then(res => {
                const item = res.data.map((m) => <MenuItem value={m[0]}>{m[1]}</MenuItem>)
                setMaterials(item)
            })
    },[props])

    const {
        values: {name, material},
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isValid,
        setFieldTouched,
        submit
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    const classes = useStyles();

    return(
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formContent}>

            <TextField
            className={classes.input}
            name='name'
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            label='Nom du déchet'
            value={name}
            onBlur={handleBlur}
            onChange={handleChange}
            />
            <Select
                className={classes.input}
                name='material'
                helperText={touched.material ? errors.material : ''}
                error={touched.material && Boolean(errors.material)}
                label='Type de déchet'
                value={material}
                onBlur={handleBlur}
                onChange={handleChange}>
                {materials ? materials : null}
                {/*<MenuItem value='1'>Plastique</MenuItem>*/}
            </Select>
            </div>

            <div>
                <Button
                    type='submit'
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    disabled={!isValid}>
                    Enregistrer
                </Button>
            </div>
        </form>

    )
}

export default AddWasteForm;