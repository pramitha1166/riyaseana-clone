import React from 'react'
import {Grid, FormControl, InputLabel, Select, MenuItem, makeStyles, Button, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    root: {
        marginTop: '20px'
    }
}))

function SearchTool() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any Make</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Bajaj</MenuItem>
                            <MenuItem value={"toyota"}>Toyota</MenuItem>
                            <MenuItem value={"bently"}>Bently</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any Type</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Car</MenuItem>
                            <MenuItem value={"toyota"}>Van</MenuItem>
                            <MenuItem value={"bently"}>Bike</MenuItem>
                            <MenuItem value={"bently"}>Van</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                       <TextField label="Model" />
                    </FormControl>
                </Grid> <Grid item xs>
                <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any Condition</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Antique</MenuItem>
                            <MenuItem value={"toyota"}>Brand New</MenuItem>
                            <MenuItem value={"bently"}>Registered</MenuItem>
                            <MenuItem value={"bently"}>Unregistered</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> 
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any City</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Kandy</MenuItem>
                            <MenuItem value={"toyota"}>Colombo</MenuItem>
                            <MenuItem value={"bently"}>Jaffna</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> 
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any City</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Kandy</MenuItem>
                            <MenuItem value={"toyota"}>Colombo</MenuItem>
                            <MenuItem value={"bently"}>Jaffna</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> 
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any City</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Kandy</MenuItem>
                            <MenuItem value={"toyota"}>Colombo</MenuItem>
                            <MenuItem value={"bently"}>Jaffna</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> 
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any City</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Kandy</MenuItem>
                            <MenuItem value={"toyota"}>Colombo</MenuItem>
                            <MenuItem value={"bently"}>Jaffna</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> 
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any City</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Kandy</MenuItem>
                            <MenuItem value={"toyota"}>Colombo</MenuItem>
                            <MenuItem value={"bently"}>Jaffna</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> 
                <Grid item xs>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="select-age-label">Any City</InputLabel>
                        <Select
                            labelId="select-age-label"
                            id="select-age"
                        >
                            <MenuItem value={"bajaj"}>Kandy</MenuItem>
                            <MenuItem value={"toyota"}>Colombo</MenuItem>
                            <MenuItem value={"bently"}>Jaffna</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> 
            </Grid>
            <Grid container alignContent="center">
                <Grid item xs></Grid>
                <Grid item><Button style={{backgroundColor: 'blue',color: 'white',marginTop: "20px"}}><SearchIcon />Search Vehicle</Button></Grid>
                <Grid item xs></Grid>
            </Grid>
        </div>
    )
}

export default SearchTool
