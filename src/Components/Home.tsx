import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '5em',
            backgroundColor: 'white',
            display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
        }
    }),
);

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>Search</h1>
            </div>
        </Container>
    )
}

export default Home;