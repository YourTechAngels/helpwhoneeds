import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#9370db",
    },
}));

const AppNavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Help Who Needs
                    </Typography>
                    <Button color="inherit" component={Link} to={"/"}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to={"/about"}>
                        About
                    </Button>
                    <Button color="inherit" component={Link} to={"/login"}>
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppNavBar;
