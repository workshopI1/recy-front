import React from 'react';
import Typography from "@material-ui/core/Typography";
import HomeAppBar from "../Home/HomeAppBar";

const Recycling = (props) => {

    const {code} = props.location.state
    return (
        <>
            <HomeAppBar/>
            <Typography>Code trouvé : {code}</Typography>
            <Typography>Recyclage : WIP</Typography>
        </>
    )
}

export default Recycling;