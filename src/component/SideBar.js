import React from 'react';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
       height: "100%",
       width: "260px",
       position: "fixed",   
       backgroundColor: "black",
       marginTop: "50px"
    },
    logo: {
        marginLeft: "10px",
        marginTop: "10px"
    }
})



function SideBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <img src="https://riyasewana.com/images/logo.png" alt="Logo" className={classes.logo}/>
        </div>
    )
}

export default SideBar
