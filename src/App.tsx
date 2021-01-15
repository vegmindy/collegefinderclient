// // // // import React from 'react';
// // // // import './App.css';

// // // // import Home from './Components/Home';
// // // // import Auth from './Components/Auth/Auth';

// // // // // type Props = {
// // // // //     token: string | null
// // // // // }

// // // // // export default class App extends React.Component<{}, Props> {
// // // // //     constructor(props: any) {
// // // // //         super(props);
// // // // //         this.state = {
// // // // //             token: ''
// // // // //         }
// // // // //     }

// // // // //     componentDidMount() {
// // // // //         if (localStorage.getItem('token')) {
// // // // //             this.setState({
// // // // //                 token: localStorage.getItem('token')
// // // // //             })
// // // // //         }
// // // // //     }

// // // // //     updateToken = (newToken: string) => {
// // // // //         localStorage.setItem('token', newToken);
// // // // //         this.setState({
// // // // //             token: newToken
// // // // //         });
// // // // //     }

// // // // //     logout = () => {
// // // // //         localStorage.clear();
// // // // //         this.setState({
// // // // //             token: ''
// // // // //         })
// // // // //     }

// // // // //     viewConductor = () => {
// // // // //         return !this.state.token ? (
// // // // //             <div>
// // // // //                 <Auth updateToken={this.updateToken.bind(this)} />
// // // // //             </div>
// // // // //         ) : (
// // // // //                 <Home clickLogout={this.logout.bind(this)} token={this.state.token} />
// // // // //             );
// // // // //     };


// // // // //     render() {
// // // // //         return (
// // // // //             <div>
// // // // //                 {this.viewConductor()}
// // // // //                 {/* <Auth updateToken={this.updateToken.bind(this)} /> */}
// // // // //             </div>
// // // // //         );
// // // // //     }
// // // // // }


// // // // type Props = {
// // // //   token: string | null
// // // // }

// // // // export default class App extends React.Component<{}, Props> {
// // // //   constructor(props: Props) {
// // // //       super(props);
// // // //       this.state = {
// // // //           token: ''
// // // //       }
// // // //   }

// // // //   componentDidMount() {
// // // //       if (localStorage.getItem('token')) {
// // // //           this.setState({
// // // //               token: localStorage.getItem('token')
// // // //           })
// // // //       }
// // // //   }

// // // //   updateToken = (newToken: string) => {
// // // //       localStorage.setItem('token', newToken);
// // // //       this.setState({
// // // //           token: newToken
// // // //       });
// // // //   }

// // // //   logout = () => {
// // // //       localStorage.clear();
// // // //       this.setState({
// // // //           token: ''
// // // //       })
// // // //   }

// // // //   viewConductor = () => {
// // // //       return !this.state.token ? (
// // // //           <div>
// // // //               <Auth updateToken={this.updateToken.bind(this)} />
// // // //           </div>
// // // //       ) : (
// // // //               <Home clickLogout={this.logout.bind(this)} token={this.state.token} />)
// // // //   };


// // // //   render() {
// // // //       return (
// // // //           <div>
// // // //               {this.viewConductor()}
// // // //           </div>
// // // //       );
// // // //   }
// // // // }


// // // // import React from 'react';
// // // // import AppIndex from './AppIndex';

// // // // function App() {
// // // //   return (
// // // //     <React.Fragment>
// // // //       <AppIndex />
// // // //     </React.Fragment>
// // // //   );
// // // // }

// // // // export default App;


// // // import React from 'react';
// // // import './App.css';

// // // import Home from './Components/Home';
// // // import Auth from './Components/Auth/Auth';

// // // type Props = {
// // //     token: string | null
// // // }

// // // export default class App extends React.Component<{}, Props> {
// // //     constructor(props: Props) {
// // //         super(props);
// // //         this.state = {
// // //             token: ''
// // //         }
// // //     }

// // //     componentDidMount() {
// // //         if (localStorage.getItem('token')) {
// // //             this.setState({
// // //                 token: localStorage.getItem('token')
// // //             })
// // //         }
// // //     }

// // //     updateToken = (newToken: string) => {
// // //         localStorage.setItem('token', newToken);
// // //         this.setState({
// // //             token: newToken
// // //         });
// // //     }

// // //     logout = () => {
// // //         localStorage.clear();
// // //         this.setState({
// // //             token: ''
// // //         })
// // //     }

// // //     clearToken = () => {
// // //       localStorage.clear();
// // //       this.setState({
// // //         token: "",
// // //       });
// // //     }

// // //     viewConductor = () => {
// // //         return !this.state.token ? (
// // //             <div>
// // //                 <Auth updateToken={this.updateToken.bind(this)} clearToken={this.clearToken} />
// // //             </div>
// // //         ) : (
// // //                 <Home clickLogout={this.logout.bind(this)} token={this.state.token} />)
// // //     };


// // //     render() {
// // //         return (
// // //             <div>
// // //                 {this.viewConductor()}
// // //             </div>
// // //         );
// // //     }
// // // }


// // import React, { Component } from 'react';
// // import Main from './Components/index';


// // // type AppState = {
// // //     token: string
// // //     // schoolsUpdate: any
// // // }

// // export default class AppIndex extends Component {

// //     state = {
// //         token: ""
// //     }

// //     componentWillMount() {
// //         if (localStorage.getItem('token')) {
// //             this.setState({
// //                 token: localStorage.getItem('token')
// //             })
// //         }
// //         // console.log(this.state.token)
// //     }


// //     // componentDidMount() {
// //     //     console.log(this.state.token)
// //     // }


// //     updateToken = (newToken: string) => {
// //         localStorage.setItem('token', newToken)
// //         this.setState({
// //             token: newToken
// //         })
// //     }

// //     clearToken = () => {
// //         localStorage.clear();
// //         this.setState({
// //             token: ''
// //         })
// //     }

// //     render() {
// //         return (
// //             <div className='app'>
// //                 <Main updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} />
// //             </div>
// //         )
// //     }
// // }

// import React from 'react';
// import './App.css';

// import Home from './Components/Home';
// import Auth from './Components/Auth/Auth';

// type Props = {
//   token: string | null
// }



// export default class App extends React.Component<{}, Props> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       token: ''
//     }
//   }

//   componentDidMount() {
//     if (localStorage.getItem('token')) {
//       this.setState({
//         token: localStorage.getItem('token')
//       })
//     }
//   }

//   updateToken = (newToken: string) => {
//     localStorage.setItem('token', newToken);
//     this.setState({
//       token: newToken
//     });
//   }

//   clearToken = () => {
//     localStorage.clear();
//     this.setState({
//       token: "",
//     });
//   }

//   logout = () => {
//     localStorage.clear();
//     this.setState({
//       token: ''
//     })
//   }

//   viewConductor = () => {
//     return !this.state.token ? (
//       <div>
//         <Auth updateToken={this.updateToken.bind(this)} />
//       </div>
//     ) : (
//         <Home clickLogout={this.logout.bind(this)} token={this.state.token} />)
//   };


//   render() {
//     return (
//       <div>
//         {this.viewConductor()}
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import Main from './Components/index';


// type AppState = {
//     token: string
//     // schoolsUpdate: any
// }

export default class AppIndex extends Component {

    state = {
        token: ""
    }

    componentWillMount() {
        if (localStorage.getItem('token')) {
            this.setState({
                token: localStorage.getItem('token')
            })
        }
        // console.log(this.state.token)
    }


    // componentDidMount() {
    //     console.log(this.state.token)
    // }


    updateToken = (newToken: string) => {
        localStorage.setItem('token', newToken)
        this.setState({
            token: newToken
        })
    }

    clearToken = () => {
        localStorage.clear();
        this.setState({
            token: ''
        })
    }

    render() {
        return (
            <div className='app'>
                <Main updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} />
            </div>
        )
    }
}