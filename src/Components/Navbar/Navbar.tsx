// // // import React from 'react';
// // // import {
// // //     AppBar,
// // //     Toolbar,
// // //     Typography,
// // //     ButtonGroup,
// // //     Button,
// // //     IconButton
// // // } from '@material-ui/core';

// // // type Props = {
// // //     onClick: () => void;
// // //     token: string;
// // // };

// // // export default class Navbar extends React.Component<Props> {
// // //     constructor(props: Props) {
// // //         super(props);
// // //     }

// // //     handleOpenReg = () => {
// // //         this.setState({
// // //             signup: true,
// // //         });
// // //     };

// // //     handleOpenLog = () => {
// // //         this.setState({
// // //             login: true,
// // //         });
// // //     };

// // //     HandleCloseReg = () => {
// // //         this.setState({
// // //             signup: false,
// // //         });
// // //     };

// // //     handleCloseLog = () => {
// // //         this.setState({
// // //             login: false,
// // //         });
// // //     };

// // //     render() {
// // //         return (
// // //             <div className="container">
// // //                 <AppBar position="static">
// // //                 <Typography className="root" variant="h5">College Finder</Typography>
// // //                     <Toolbar className="root">
// // //                         <ButtonGroup>
// // //                         <Button variant="outlined" color="inherit" onClick={this.props.onClick}>Logout</Button>
// // //                         </ButtonGroup>
// // //                     </Toolbar>
// // //                 </AppBar>
// // //             </div>
// // //         );
// // //     }
// // // }


// // import React from 'react';
// // import { createStyles, makeStyles } from '@material-ui/core/styles'
// // import { AppBar, Toolbar } from '@material-ui/core';
// // import Grid from '@material-ui/core/Grid';
// // import Auth from '../Auth/Auth';
// // import { Link } from 'react-router-dom';
// // // import AddAccepted from '../Accepted/addAcceptedIndex'


// // // const useStyles = makeStyles(() =>
// // //     createStyles({
// // //         loginButton: {
// // //             display: 'flex',
// // //             justifyContent: 'flex-end'
// // //         }
// // //     }),
// // // );

// // interface Props {
// //     clearToken:() => void
// //     token: string
// // }

// // const NavbBar = (props: Props) => {
// //     // const classes = useStyles();

// //     return (
// //         <AppBar position='fixed'>
// //             <Toolbar>
// //                 <Grid container spacing={3}>
// //                     {/* <Grid item xs>
// //                         <Link to='home'>Home</Link>
// //                     </Grid> */}
// //                     <Grid item xs={6}></Grid>
// //                     {/* <Grid item xs >
// //                         <Auth clearToken={props.clearToken} />
// //                     </Grid> */}
// //                     <Grid item xs>
// //                         <Link to='/accepted/addschool'>Add Accepted</Link>
// //                     </Grid>
// //                     <Grid item xs>
// //                         <Link to='/schools/all'>View all schools</Link>
// //                     </Grid>
// //                     <Grid item xs>
// //                         <Link to='/accepted/myaccepted'>View all accepted</Link>
// //                     </Grid>
// //                     <Grid item xs>
// //                         <Link to='/favorites/addschool'>Add Favorites</Link>
// //                     </Grid>
// //                     <Grid item xs>
// //                         <Link to='/favorites/myfavorites'>View all favorites</Link>
// //                     </Grid>
// //                 </Grid>
// //             </Toolbar>
// //         </AppBar>
// //         // <div>
// //         //     <Auth clearToken={props.clearToken} />
// //         //     <Link to='/accepted/addschool'>Add Accepted</Link>
// //         //     <Link to='/schools/all'>View all schools</Link>
// //         //     <Link to='/accepted/myaccepted'>View all accepted</Link>
// //         // </div>
// //         // <p>nav bar goes here</p>
// //     )
// // }

// // export default NavbBar;


// import React from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     ButtonGroup,
//     Button,
//     IconButton
// } from '@material-ui/core';

// import './navbar.css'

// import Register from '../Auth/signup';
// import Login from '../Auth/login';

// type Props = {
//     onClick: () => void;
//     token: string;
//     // updateToken: (newToken: string) => void;
// };

// export default class Navbar extends React.Component<Props> {
//     constructor(props: Props) {
//         super(props);
//     }

//     handleOpenReg = () => {
//         this.setState({
//             register: true,
//         });
//     };

//     handleOpenLog = () => {
//         this.setState({
//             login: true,
//         });
//     };

//     HandleCloseReg = () => {
//         this.setState({
//             register: false,
//         });
//     };

//     handleCloseLog = () => {
//         this.setState({
//             login: false,
//         });
//     };

//     render() {
//         return (
//             <div className="container">
//                 <AppBar position="static">
//                 <Typography className="root" variant="h5">College Finder</Typography>
//                     <Toolbar className="root">
//                         <ButtonGroup>
//                         <Button id="logout" variant="outlined" color="inherit" onClick={this.props.onClick}>Logout</Button>
//                         </ButtonGroup>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         );
//     }
// }

import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Auth from '../Auth/Auth';
import { Link } from 'react-router-dom';
// import AddAccepted from '../Accepted/addAcceptedIndex'


// const useStyles = makeStyles(() =>
//     createStyles({
//         loginButton: {
//             display: 'flex',
//             justifyContent: 'flex-end'
//         }
//     }),
// );

interface Props {
    clearToken:() => void
    token: string
}

const NavbBar = (props: Props) => {
    // const classes = useStyles();

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Grid container spacing={3}>
                    {/* <Grid item xs>
                        <Link to='home'>Home</Link>
                    </Grid> */}
                    <Grid item xs={6}></Grid>
                    <Grid item xs >
                        <Auth clearToken={props.clearToken} />
                    </Grid>
                    <Grid item xs>
                        <Link to='/accepted/addschool'>Add Accepted</Link>
                    </Grid>
                    <Grid item xs>
                        <Link to='/schools/all'>View all schools</Link>
                    </Grid>
                    <Grid item xs>
                        <Link to='/accepted/myaccepted'>View all accepted</Link>
                    </Grid>
                    <Grid item xs>
                        <Link to='/favorites/addschool'>Add Favorites</Link>
                    </Grid>
                    <Grid item xs>
                        <Link to='/favorites/myfavorites'>View all favorites</Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        // <div>
        //     <Auth clearToken={props.clearToken} />
        //     <Link to='/accepted/addschool'>Add Accepted</Link>
        //     <Link to='/schools/all'>View all schools</Link>
        //     <Link to='/accepted/myaccepted'>View all accepted</Link>
        // </div>
        // <p>nav bar goes here</p>
    )
}

export default NavbBar;