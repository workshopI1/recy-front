import React from 'react'
import * as Yup from 'yup';
import AddWasteForm from "./AddWasteForm";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Formik} from "formik";
import axios from 'axios'

const AddWaste = (props) => {

    const AddWasteSchema = Yup.object().shape({
        name:Yup.string()
            .required('Ce champ est requis'),
        material:Yup.string()
            .required('Ce champ est requis'),
    })

    const values = {
        name:'',
        material:''
    }

    const submit = (values) => {
        axios.post(`http://localhost:5000/add/Waste/`,{name:values.name,id_material:+values.material,barcode:props.code})
            .then(res=> console.log(res))
    }

    return(
        <Dialog open={props.open}>
            <DialogTitle>
                <IconButton onClick={() => props.setOpen()}>
                    <ArrowBackIcon/>
                </IconButton>
                Ajout d'un déchet
            </DialogTitle>

            <Formik
                render={props => <AddWasteForm {...props}/>}
                initialValues={values}
                validationSchema={AddWasteSchema}
                onSubmit={(v) => submit(v)}/>
        </Dialog>
    )
}

export default AddWaste;