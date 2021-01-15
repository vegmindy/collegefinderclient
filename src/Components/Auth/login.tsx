// // // // import React from 'react';
// // // // import {createStyles, makeStyles} from '@material-ui/core/styles';
// // // // import {Container} from '@material-ui/core';
// // // // import LoginIndex from './loginIndex';

// // // // const useStyles = makeStyles(() =>
// // // //     createStyles({
// // // //         container: {
// // // //             marginTop: '12em',
// // // //             backgroundColor: 'white',
// // // //             display: 'flex',
// // // //             justifyContent: 'center',
// // // //             alignContent: 'center',
// // // //             height: '100%'
// // // //         }
// // // //     }),
// // // // );

// // // // interface Props {
// // // //     updateToken: (newToken: string) => void
// // // // }

// // // // const Login =(props: Props)=>{
// // // //     const classes = useStyles();

// // // //     return(
// // // //         <Container className={classes.container}>
// // // //             <div>
// // // //                 <h1>LOG IN</h1>
// // // //                 <LoginIndex updateToken={props.updateToken} />
// // // //             </div>
// // // //         </Container>
// // // //     )
// // // // }

// // // // export default Login;


// // // import React from 'react';
// // // import APIURL from '../../helpers/environment';
// // // import { 
// // //     AppBar,
// // //     Button, 
// // //     // Container,  
// // //     Dialog, 
// // //     DialogActions, 
// // //     DialogContent, 
// // //     DialogTitle, 
// // //     TextField,
// // //     /*Typography*/ 
// // // } from '@material-ui/core';

// // // type Props = {
// // //     login: boolean,
// // //     updateToken: (newToken: string) => void,
// // //     // loginHandle: () => void
// // //     toggle: () => void
// // // }

// // // type State = {
// // //     email: string,
// // //     password: string,
// // //     handleopen: boolean
// // // }

// // // export default class Login extends React.Component<Props, State> {
// // //     constructor(props: Props) {
// // //         super(props);
// // //         this.state = {
// // //             email: '',
// // //             password: '',
// // //             handleopen: false
// // //         }
// // //     }

// // //     handleSubmit = (event: any) => {
// // //         event.preventDefault();
// // //         fetch(`${APIURL}/user/login`, {
// // //             method: 'POST',
// // //             body: JSON.stringify({
// // //                 email: this.state.email,
// // //                 password: this.state.password
// // //             }),
// // //             headers: new Headers({
// // //                 'Content-Type': 'application/json',
// // //             }),
// // //         })
// // //             .then((res) => res.json())
// // //             .then(data => {
// // //                 console.log(data)
// // //                 this.props.updateToken(data.token);
// // //                 this.handleClose();
// // //             });
// // //     }

// // //     handleOpen = () => {
// // //         this.setState({
// // //             handleopen: true,
// // //         })
// // //     };

// // //     handleClose = () => {
// // //         this.setState({
// // //             handleopen: false,
// // //         });
// // //     };

// // //     setEmail(event: string) {
// // //         this.setState({
// // //             email: (event)
// // //         })
// // //     }
// // //     setPassword(event: string) {
// // //         this.setState({
// // //             password: (event)
// // //         })
// // //     }

// // //     render() {
// // //         return (
// // //             <div>
// // //                 <Button onClick={this.handleOpen} id="LoginButton" variant="outlined">
// // //                     <strong>Login</strong>
// // //                 </Button>
// // //                 <Dialog open={this.state.handleopen} onClose={this.handleClose}>
// // //                     <DialogTitle /*id="dialogTitle"*/ id="form-dialog-title">
// // //                         <strong>Login</strong>
// // //                     </DialogTitle>
// // //                     <DialogContent id="Login">
// // //                         <TextField
// // //                             autoFocus
// // //                             margin="dense"
// // //                             label="Email"
// // //                             type="text"
// // //                             fullWidth
// // //                             onChange={(e) => this.setEmail(e.target.value)}
// // //                         />
// // //                         <TextField
// // //                             autoFocus
// // //                             margin="dense"
// // //                             label="Password"
// // //                             type="password"
// // //                             fullWidth
// // //                             onChange={(e) => this.setPassword(e.target.value)}
// // //                         />
// // //                     </DialogContent>
// // //                     <DialogActions id="Loginbtn">
// // //                         <Button onClick={this.handleSubmit} id="btn">
// // //                             <strong>Login</strong>
// // //                         </Button>
// // //                     </DialogActions>
// // //                 </Dialog>
// // //             </div>
// // //         )
// // //     }
// // // }

// // import React from 'react';
// // import {createStyles, makeStyles} from '@material-ui/core/styles';
// // import {Container} from '@material-ui/core';
// // import LoginIndex from './loginIndex';

// // const useStyles = makeStyles(() =>
// //     createStyles({
// //         container: {
// //             marginTop: '12em',
// //             backgroundColor: 'white',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignContent: 'center',
// //             height: '100%'
// //         }
// //     }),
// // );

// // interface Props {
// //     updateToken: (newToken: string) => void
// // }

// // const Login =(props: Props)=>{
// //     const classes = useStyles();

// //     return(
// //         <Container className={classes.container}>
// //             <div>
// //                 <h1>LOG IN</h1>
// //                 <LoginIndex updateToken={props.updateToken} />
// //             </div>
// //         </Container>
// //     )
// // }

// // export default Login;


// import React from 'react';
// import APIURL from '../../helpers/environment';
// import {
//     AppBar,
//     Button,
//     Dialog,
//     DialogActions,
//     DialogContent,
//     DialogTitle,
//     TextField,
// } from '@material-ui/core';

// type Props = {
//     login: boolean,
//     updateToken: (newToken: string) => void,
//     // loginHandle: () => void
//     toggle: () => void
// }

// type State = {
//     username: string,
//     password: string,
//     handleopen: boolean
// }

// export default class Login extends React.Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             handleopen: false
//         }
//     }

//     handleSubmit = (event: any) => {
//         event.preventDefault();
//         fetch(`${APIURL}/user/login`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 username: this.state.username,
//                 password: this.state.password
//             }),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//             }),
//         })
//             .then((res) => res.json())
//             .then(data => {
//                 console.log(data)
//                 this.props.updateToken(data.token);
//                 this.handleClose();
//             });
//     }

//     handleOpen = () => {
//         this.setState({
//             handleopen: true,
//         })
//     };

//     handleClose = () => {
//         this.setState({
//             handleopen: false,
//         });
//     };

//     setUsername(event: string) {
//         this.setState({
//             username: (event)
//         })
//     }
//     setPassword(event: string) {
//         this.setState({
//             password: (event)
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Button onClick={this.handleOpen} id="LoginButton" variant="outlined">
//                     <strong>Login</strong>
//                 </Button>
//                 <Dialog open={this.state.handleopen} onClose={this.handleClose}>
//                     <DialogTitle /*id="dialogTitle"*/ id="form-dialog-title">
//                         <strong>Login</strong>
//                     </DialogTitle>
//                     <DialogContent id="Login">
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             label="Username"
//                             type="text"
//                             fullWidth
//                             onChange={(e) => this.setUsername(e.target.value)}
//                         />
//                         <TextField
//                             autoFocus
//                             margin="dense"
//                             label="Password"
//                             type="password"
//                             fullWidth
//                             onChange={(e) => this.setPassword(e.target.value)}
//                         />
//                     </DialogContent>
//                     <DialogActions id="Loginbtn">
//                         <Button onClick={this.handleSubmit} id="btn">
//                             <strong>Login</strong>
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         )
//     }
// }



import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import LoginIndex from './loginIndex';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '12em',
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