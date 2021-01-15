// // import React from 'react'
// // import {Link} from 'react-router-dom';
// // import {Button} from '@material-ui/core';

// // interface Props {
// //     clearToken:() => void
// // }

// // const Auth = (props: Props) => {
// //     return (
// //         <div>
// //             <div>
// //                 <Link to='/login'><Button>LOG IN</Button></Link>
// //                 <Link to='/signup'><Button>SIGN UP</Button></Link>
// //                 <Button onClick={props.clearToken}>LOG OUT</Button>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Auth;


// // import React from 'react';

// // import Login from './login';
// // import Signup from './signup';

// // type Props = {
// //     updateToken: (newToken: string) => void;
// // };

// // type State = {
// //     login: boolean;
// // }

// // export default class Auth extends React.Component<Props, State> {
// //     constructor(props: any) {
// //         super(props);
// //         this.state = {
// //             login: true,
// //         };
// //     }

// //     // loginHandle() {
// //     //     this.setState({
// //     //         login: !this.state.login,
// //     //     });
// //     // }

// //     toggle = () => {
// //         this.setState({
// //             login: !this.state.login
// //         })
// //     }

// //     render() {

// //         return (
// //             <div className="container">
// //                     <Login
// //                         login={this.state.login}
// //                         toggle={this.toggle.bind(this)}
// //                         updateToken={this.props.updateToken}/>
// //                         <Signup
// //                             login={this.state.login}
// //                             toggle={this.toggle.bind(this)}
// //                             updateToken={this.props.updateToken}/>
// //             </div>
// //         )
// //     }
// // }

// // import React from 'react'
// // import {Link} from 'react-router-dom';
// // import {Button} from '@material-ui/core';

// // interface Props {
// //     clearToken:() => void
// //     updateToken: (newToken: string) => void
// // }

// // const Auth = (props: Props) => {
// //     return (
// //         <div>
// //             <div>
// //                 <Link to='/login'><Button>LOG IN</Button></Link>
// //                 <Link to='/signup'><Button>SIGN UP</Button></Link>
// //                 <Button onClick={props.clearToken}>LOG OUT</Button>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Auth;

// import React from 'react';
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     Modal,
// } from '@material-ui/core';

// import Login from './login';
// import Signup from './signup';

// type Props = {
//     updateToken: (newToken: string) => void;
// };

// type State = {
//     login: boolean;
//     handleopen: boolean;
// }

// export default class Auth extends React.Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             login: true,
//             handleopen: false,
//         };
//     }

//     // loginHandle() {
//     //     this.setState({
//     //         login: !this.state.login,
//     //     });
//     // }

//     toggle = () => {
//         this.setState({
//             login: !this.state.login
//         })
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

//     render() {
//         return (
//             <div className="container">
//                 <Dialog open={true}>
//                     <DialogTitle id="form-dialog-title">
//                         <strong>College Finder</strong>
//                     </DialogTitle>
//                     <DialogContent>
//                         <DialogTitle>
//                             <Login
//                                 login={this.state.login}
//                                 toggle={this.toggle.bind(this)}
//                                 updateToken={this.props.updateToken} />
//                         </DialogTitle>
//                     </DialogContent>
//                     <DialogContent>
//                         <DialogTitle>
//                             <Signup
//                                 login={this.state.login}
//                                 toggle={this.toggle.bind(this)}
//                                 updateToken={this.props.updateToken} />
//                         </DialogTitle>
//                     </DialogContent>
//                 </Dialog>
//             </div>
//         );
//     }
// }


import React from 'react'
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

interface Props {
    clearToken:() => void
}

const Auth = (props: Props) => {
    return (
        <div>
            <div>
                <Link to='/login'><Button>LOG IN</Button></Link>
                <Link to='/signup'><Button>SIGN UP</Button></Link>
                <Button onClick={props.clearToken}>LOG OUT</Button>
            </div>
        </div>
    )
}

export default Auth;