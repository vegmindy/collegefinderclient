import React from 'react';  
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import AddAcceptedIndex from './addAcceptedIndex';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '4em',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
        }
    }),
);

interface Props {
    // updateToken: (newToken: string) => void
    token: string
}

const AddAccepted = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>Add school</h1>
                <AddAcceptedIndex token={props.token} />
            </div>
        </Container>
    )
}

export default AddAccepted;