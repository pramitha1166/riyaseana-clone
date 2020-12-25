import React from 'react'
import {AppBar, Toolbar, Grid, IconButton, Badge, InputBase, makeStyles, Avatar, Button, Menu, MenuItem, Icon, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions} from "@material-ui/core";
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import AddVehicleForm from './AddVehicleForm';

const useClasses = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1c1d21',
    },
    customizeToolbar: {
        minHeight: '50px'
    },
    makeWhite: {
        color: '#fff'
    },
    buttonCollapse: {
        [theme.breakpoints.down("sm")]: {
            display: ""
        }
    },
    button: {
        margin: theme.spacing(1),
    },
}))

function Header() {

    const [open, setOpen] = React.useState(false);  

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }

    const classes = useClasses();

    const [anchorE1, setAnchorE1] = React.useState(null);

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorE1(null);
      };

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.customizeToolbar}>
                <Grid container>
                    <Grid item style={{marginTop: '15px'}}>
                        <img src="https://riyasewana.com/images/logo.png"/>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item className={classes.buttonCollapse}>
                        <Button
                            variant="contained"
                            color="error"
                            className={classes.button}
                        >
                           Sign Up Now
                        </Button>

                        <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                            <DialogTitle>Post a Add</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Hello now you can sell your add fast
                                </DialogContentText>
                                <AddVehicleForm />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClickClose} color="secondary">
                                    Cancel
                                </Button>
                                <Button onClick={handleClose} color="primary">
                                    Add
                                </Button>
                            </DialogActions>
                        </Dialog>


                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<AddBoxIcon />}
                            onClick={handleClickOpen}
                        >
                            Post Add Free
                        </Button>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationIcon fontSize="small" className={classes.makeWhite}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="primary">
                                <ChatIcon fontSize="small" className={classes.makeWhite}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </IconButton>
                        <IconButton onClick={handleClick}>
                                <ArrowDropDownIcon fontSize="small" className={classes.makeWhite}/>
                        </IconButton>
                        <Menu 
                        id="simple-menu"
                        anchorEl={anchorE1}
                        keepMounted
                        open={Boolean(anchorE1)}
                        onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} style={{fontSize: "15px", color: "gray"}}><PersonIcon style={{marginRight: '5px'}} fontSize="small"/>Profile</MenuItem>
                            <MenuItem onClick={handleClose} style={{fontSize: "15px", color: "gray"}}><AccountCircleIcon style={{marginRight: '5px'}} fontSize="small"/>My Account</MenuItem>
                            <MenuItem onClick={handleClose} style={{fontSize: "15px", color: "gray"}}><EditIcon style={{marginRight: '5px'}} fontSize="small"/>Edit My Add</MenuItem>
                            <MenuItem onClick={handleClose} style={{fontSize: "15px", color: "gray"}}><PowerSettingsNewIcon style={{marginRight: '5px'}} fontSize="small"/>Logout</MenuItem>
                        </Menu>
                        <IconButton onClick={handleClick} style={{display: "none"}}>
                                <ArrowDropDownIcon fontSize="small" className={classes.makeWhite}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
