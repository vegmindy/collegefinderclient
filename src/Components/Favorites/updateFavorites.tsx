import React from 'react';  
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import UpdateFavoritesIndex from './updateFavoritesIndex';

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
    // updateToken: (newToken: string) => void
    token: string
}

const UpdateFavorites = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>Update school</h1>
                {/* <UpdateFavoritesIndex token={props.token} /> */}
            </div>
        </Container>
    )
}

export default UpdateFavorites;