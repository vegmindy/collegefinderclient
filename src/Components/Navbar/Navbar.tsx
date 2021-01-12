import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Auth from '../Auth/Auth';
import { Link } from 'react-router-dom';
import AddAccepted from '../Accepted/addAcceptedIndex'


const useStyles = makeStyles(() =>
    createStyles({
        loginButton: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }),
);

interface Props {
    clearToken:() => void
    token: string
}

const NavbBar = (props: Props) => {
    const classes = useStyles();

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Link to='home'>Home</Link>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs className={classes.loginButton}>
                        <Auth clearToken={props.clearToken} />
                    </Grid>
                    <Grid item xs>
                        <Link to='/accepted/addschool'>Add Accepted</Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        // <p>nav bar goes here</p>
    )
}

export default NavbBar;