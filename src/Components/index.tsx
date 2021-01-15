// import React from 'react'
// import {createStyles, makeStyles} from '@material-ui/core/styles';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import NavBar from './Navbar/navbar';


// import SignUp from './Auth/signup'
// import Home from './Home';
// import Login from './Auth/login';
// // import AddAcceptedIndex from './Accepted/addAccepted'
// // import Favorites from './Favorites/addFavorites'
// import SchoolSearch from './Schools/schools'
// import AcceptedDisplay from './Accepted/acceptedDisplay'
// // import FavoritesDisplay from './Favorites/favoritesDisplay'



// const useStyles = makeStyles(()=>
//     createStyles({
//         mainDiv: {
//             backgroundColor: 'white',
//         }
//     })
// )

// interface Props {
//     updateToken:(newToken: string) =>void,
//     clearToken:() => void,
//     token: string 
// }

// const Main = (props: Props) => {
//     const classes = useStyles();

//     return (
//             <React.Fragment>
//                 <Router>
//                     <div className={classes.mainDiv}>
//                      {/* <NavBar token={props.token} clearToken={props.clearToken} /> */}
//                     <Switch>
//                         <Route exact path='/home' render={()=>(<Home />)} />
//                         {/* <Route exact path='/signup' render={()=>(<SignUp updateToken={props.updateToken} />)} /> */}
//                         {/* <Route exact path='/login' render={()=>(<Login updateToken={props.updateToken} />)} /> */}
//                         {/* <Route exact path='/accepted/addschool' render={()=>(<AddAcceptedIndex token={props.token} />)} /> */}
//                         {/* <Route exact path='/favorites/addschool' render={()=>(<Favorites token={props.token} />)} /> */}
//                         <Route exact path='/schools/all' render={()=>(<SchoolSearch token={props.token}  /> )}/>
//                         <Route exact path='/accepted/myaccepted' render={()=>(<AcceptedDisplay token={props.token}/> )} />
//                         {/* <Route exact path='/favorites/myfavorites' render={()=>(<FavoritesDisplay token={props.token}/> )} /> */}
//                         {/* <Route exact path='/accepted/myaccepted' render={()=>(<AcceptedDisplay token={props.token}/> )} /> */}

//                     </Switch>
//                     </div>
//                 </Router>
//             </React.Fragment>
//     )
// }

// export default Main;

// export {}



import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Navbar/navbar';


import SignUp from './Auth/signup'
import Home from './Home';
import Login from './Auth/login';
import AddAcceptedIndex from './Accepted/addAccepted'
import Favorites from './Favorites/addFavorites'
import SchoolSearch from './Schools/schools'
import AcceptedDisplay from './Accepted/acceptedDisplay'
import FavoritesDisplay from './Favorites/favoritesDisplay'



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
    token: string 
}

const Main = (props: Props) => {
    const classes = useStyles();

    return (
            <React.Fragment>
                <Router>
                    <div className={classes.mainDiv}>
                     <NavBar token={props.token} clearToken={props.clearToken} />
                    <Switch>
                        <Route exact path='/home' render={()=>(<Home />)} />
                        <Route exact path='/signup' render={()=>(<SignUp updateToken={props.updateToken} />)} />
                        <Route exact path='/login' render={()=>(<Login updateToken={props.updateToken} />)} />
                        <Route exact path='/accepted/addschool' render={()=>(<AddAcceptedIndex token={props.token} />)} />
                        <Route exact path='/favorites/addschool' render={()=>(<Favorites token={props.token} />)} />
                        <Route exact path='/schools/all' render={()=>(<SchoolSearch token={props.token}  /> )}/>
                        <Route exact path='/accepted/myaccepted' render={()=>(<AcceptedDisplay token={props.token}/> )} />
                        <Route exact path='/favorites/myfavorites' render={()=>(<FavoritesDisplay token={props.token}/> )} />
                        <Route exact path='/accepted/myaccepted' render={()=>(<AcceptedDisplay token={props.token}/> )} />

                    </Switch>
                    </div>
                </Router>
            </React.Fragment>
    )
}

export default Main;