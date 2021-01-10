import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import LoginIndex from './loginIndex';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '4em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
        }
    }),
);

interface Props {
    updateToken: (newToken: string) => void
}

const Login =(props: Props)=>{
    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <div>
                <h1>LOG IN</h1>
                <LoginIndex updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default Login;