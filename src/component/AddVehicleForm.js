import { FormGroup, makeStyles, TextField, MenuItem, Select, InputLabel, FormControl, Button, Input } from '@material-ui/core'
import React from 'react';
import $ from "jquery";

const useStyle = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    btnFileUpload: {
        
    }
}));

function readImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#image-view').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$("#image-file").change(function() {
    readImage(this);
});

function AddVehicleForm() {

    const classes = useStyle();


    return (
        <div>
            <form>
                <FormGroup>
                    <FormControl className={classes.formControl}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="image-file"
                        multiple
                        type="file"
                        style={{display: "none"}}
                    />
                    <label htmlFor="image-file">
                        <Button variant="contained" color="primary" component="span">
                        Upload
                        </Button>
                    </label>
                    <img src="#" id="image-view" alt="vehicle image"/>       
                    </FormControl>
                    <FormControl className={classes.formControl}>    
                        <TextField 
                            label="Model"
                            margin="normal"/>
                    </FormControl>
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
                    </FormControl> <FormControl className={classes.formControl}>
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
                </FormGroup>
                
            </form>
        </div>
    )
}

export default AddVehicleForm
