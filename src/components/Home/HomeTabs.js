import React from 'react'
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CropFreeIcon from '@material-ui/icons/CropFree';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
});

const HomeTabs = () => {

    const classes = useStyles();


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs example"
            >
                <Tab icon={<HomeIcon />} aria-label="phone" />
                <Tab icon={<CropFreeIcon />} aria-label="favorite" />
                <Tab icon={<ListAltIcon />} aria-label="person" />
            </Tabs>
        </Paper>
    )
}

export default HomeTabs;