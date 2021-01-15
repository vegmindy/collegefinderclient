// // import React from 'react';
// // import APIURL from '../../helpers/environment';
// // import {
// //     Button,
// //     Dialog,
// //     DialogActions,
// //     DialogContent,
// //     DialogTitle,
// //     TextField,
// // } from '@material-ui/core';

// // type Props = {
// //     login: boolean,
// //     updateToken: (newToken: string) => void,
// //     toggle: () => void
// // }

// // type State = {
// //     firstName: string,
// //     lastName: string,
// //     email: string,
// //     password: string,
// //     currentState: string,
// //     role: string
// //     handleopen: boolean,
// // }

// // export default class Signup extends React.Component<Props, State> {
// //     constructor(props: Props) {
// //         super(props);
// //         this.state = {
// //             firstName: '',
// //             lastName: '',
// //             email: '',
// //             password: '',
// //             currentState: '',
// //             role: '',
// //             handleopen: false,
// //         }
// //     }

// //     handleSubmit = (event: any) => {
// //         event.preventDefault();
// //         fetch(`${APIURL}/user/signup`, {
// //             method: 'POST',
// //             body: JSON.stringify({
// //                 firstName: this.state.firstName,
// //                 lastName: this.state.lastName,
// //                 email: this.state.email,
// //                 password: this.state.password,
// //                 currentState: this.state.currentState,
// //                 role: this.state.role
// //             }),
// //             headers: new Headers({
// //                 'Content-Type': 'application/json',
// //             }),
// //         })
// //             .then((res) => res.json())
// //             .then(data => {
// //                 console.log(data)
// //                 this.handleClose();
// //                 this.props.updateToken(data.token)
// //             })
// //     }

// //     handleOpen = () => {
// //         this.setState({
// //             handleopen: true,
// //         })
// //     };

// //     handleClose = () => {
// //         this.setState({
// //             handleopen: false,
// //         });
// //     };

// //     setFirstName(e: string) {
// //         this.setState({
// //             firstName: (e)
// //         })
// //     }

// //     setLastName(e: string) {
// //         this.setState({
// //             lastName: (e)
// //         })
// //     }

// //     setEmail(e: string) {
// //         this.setState({
// //             email: (e)
// //         })
// //     }

// //     setPassword(e: string) {
// //         this.setState({
// //             password: (e)
// //         })
// //     }

// //     setCurrentState(e: string) {
// //         this.setState({
// //             currentState: (e)
// //         })
// //     }

// //     setRole(e: string) {
// //         this.setState({
// //             role: (e)
// //         })
// //     }


// //     render() {
// //         return (
// //             <div>
// //                 <Button onClick={this.handleOpen} id="SignupButton" variant="outlined">
// //                     <strong>Sign Up</strong>
// //                 </Button>
// //                 <Dialog open={this.state.handleopen} onClose={this.handleClose}>
// //                     <DialogTitle id="dialogTitle">
// //                         <strong>Sign Up</strong>
// //                     </DialogTitle>
// //                     <DialogContent id="Signup">
// //                         <TextField
// //                             autoFocus
// //                             margin="dense"
// //                             label="First Name"
// //                             type="text"
// //                             fullWidth
// //                             onChange={(e) => this.setFirstName(e.target.value)}
// //                         />
// //                         <TextField
// //                             autoFocus
// //                             margin="dense"
// //                             label="Last Name"
// //                             type="text"
// //                             fullWidth
// //                             onChange={(e) => this.setLastName(e.target.value)}
// //                         />
// //                         <TextField
// //                             autoFocus
// //                             margin="dense"
// //                             label="Email"
// //                             type="text"
// //                             fullWidth
// //                             onChange={(e) => this.setEmail(e.target.value)}
// //                         />
// //                         <TextField
// //                             autoFocus
// //                             margin="dense"
// //                             label="Password"
// //                             type="password"
// //                             fullWidth
// //                             onChange={(e) => this.setPassword(e.target.value)}
// //                         />
// //                         <TextField
// //                             autoFocus
// //                             margin="dense"
// //                             label="Current state"
// //                             type="text"
// //                             fullWidth
// //                             onChange={(e) => this.setCurrentState(e.target.value)}
// //                         />
// //                         <TextField
// //                             autoFocus
// //                             margin="dense"
// //                             label="Role"
// //                             type="text"
// //                             fullWidth
// //                             onChange={(e) => this.setRole(e.target.value)}
// //                         />
// //                     </DialogContent>
// //                     <DialogActions id="Signupbtn">
// //                         <Button onClick={this.handleSubmit} id="btn">
// //                             <strong>Sign Up</strong>
// //                         </Button>
// //                     </DialogActions>
// //                 </Dialog>
// //             </div>
// //         )
// //     }
// // }

// // import React from 'react';  
// // import { createStyles, makeStyles } from '@material-ui/core/styles'
// // import { Container } from '@material-ui/core'
// // import SignUpIndex from './signupIndex';

// // const useStyles = makeStyles(() =>
// //     createStyles({
// //         container: {
// //             marginTop: '12em',
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

// // const SignUp = (props: Props) => {
// //     const classes = useStyles();

// //     return (
// //         <Container className={classes.container}>
// //             <div>
// //                 <h1>SIGN UP</h1>
// //                 <SignUpIndex updateToken={props.updateToken} />
// //             </div>
// //         </Container>
// //     )
// // }

// // export default SignUp;


// import React from 'react';
// import APIURL from '../../helpers/environment';
// import {
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
//     toggle: () => void
// }

// type State = {
//     username: string,
//     email: string,
//     password: string,
//     // role: string,
//     handleopen: boolean,
// }

// export default class Register extends React.Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             username: '',
//             email: '',
//             password: '',
//             // role: '',
//             handleopen: false,
//         }
//     }

//     handleSubmit = (event: any) => {
//         event.preventDefault();
//         fetch(`${APIURL}/user/signup`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 username: this.state.username,
//                 email: this.state.email,
//                 password: this.state.password,
//                 // role: this.state.role,
//             }),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//             }),
//         })
//             .then((res) => res.json())
//             .then(data => {
//                 console.log(data)
//                 this.handleClose();
//                 this.props.updateToken(data.token)
//             })
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
//     setEmail(event: string) {
//         this.setState({
//             email: (event)
//         })
//     }
//     setPassword(event: string) {
//         this.setState({
//             password: (event)
//         })
//     }

//     // setRole(event: string) {
//     //     this.setState({
//     //         role: (event),
//     //     })
//     // }

//     render() {
//         return (
//             <div>
//                 <Button onClick={this.handleOpen} id="RegisterButton" variant="outlined">
//                     <strong>Sign Up</strong>
//                 </Button>
//                 <Dialog open={this.state.handleopen} onClose={this.handleClose}>
//                     <DialogTitle id="dialogTitle">
//                         <strong>Sign Up</strong>
//                     </DialogTitle>
//                     <DialogContent id="Register">
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
//                             label="Email"
//                             type="text"
//                             fullWidth
//                             onChange={(e) => this.setEmail(e.target.value)}
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
//                     <DialogActions id="Registerbtn">
//                         <Button onClick={this.handleSubmit} id="btn">
//                             <strong>Sign Up</strong>
//                         </Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         )
//     }
// }


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