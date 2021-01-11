import React from 'react';  
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import AddFavoritesIndex from './addFavoritesIndex';

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
    token: string | null
}

const AddFavorites = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>Add school</h1>
                <AddFavoritesIndex token={props.token} />
            </div>
        </Container>
    )
}

export default AddFavorites;