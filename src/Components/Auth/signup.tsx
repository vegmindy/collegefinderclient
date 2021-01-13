import React from 'react';  
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import SignUpIndex from './signupIndex';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '12em',
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

const SignUp = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>SIGN UP</h1>
                <SignUpIndex updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default SignUp;