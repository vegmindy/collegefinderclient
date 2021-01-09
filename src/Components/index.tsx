import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbBar from './Navbar/Navbar';


import SignUp from './Auth/signup'
import Home from './Home';
import Login from './Auth/login';
import Accepted from './Accepted/accepted'


const useStyles = makeStyles(()=>
    createStyles({
        mainDiv: {
            backgroundColor: 'white',
        }
    })
)

interface Props {
    updateToken:(newToken: string) =>void,
    clearToken:() => void,
    token: string | null
}

const Main = (props: Props) => {
    const classes = useStyles();

    return (
            <React.Fragment>
                <Router>
                    <div className={classes.mainDiv}>
                     <NavbBar clearToken={props.clearToken} />
                    <Switch>
                        <Route exact path='/home' render={()=>(<Home />)} />
                        <Route exact path='/signup' render={()=>(<SignUp updateToken={props.updateToken} />)} />
                        <Route exact path='/login' render={()=>(<Login updateToken={props.updateToken} />)} />
                        <Route exact path='/accepted/addschool' render={()=>(<Accepted updateToken={props.updateToken} />)} />
                    </Switch>
                    </div>
                </Router>
            </React.Fragment>
    )
}

export default Main;