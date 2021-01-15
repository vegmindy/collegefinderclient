// // import { createStyles, makeStyles } from '@material-ui/core/styles'
// // import { Container } from '@material-ui/core'

// // const useStyles = makeStyles(() =>
// //     createStyles({
// //         container: {
// //             marginTop: '5em',
// //             backgroundColor: 'white',
// //             display: 'flex',
// //                 justifyContent: 'center',
// //                 alignContent: 'center',
// //         }
// //     }),
// // );

// // const Home = () => {
// //     const classes = useStyles();

// //     return (
// //         <Container className={classes.container}>
// //             {/* <div>
// //                 <h1>Search</h1>
// //             </div> */}
// //             <div>
// //             <p>Prolly gonna cry here soon send help</p>
                
// //             </div>
// //         </Container>
// //     )
// // }

// // export default Home;


// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// import Navbar from './Navbar/navbar';
// import AcceptedDisplay from './Accepted/acceptedDisplay';
// // import WishlistIndex from './Wishlist/WishlistIndex';

// type Props = {
//     clickLogout: () => void;
//     token: string;
// }

// export default class Home extends React.Component<Props> {
//     render() {
//         return (
//             <div className="container">
//                 <Navbar onClick={this.props.clickLogout} token={this.props.token} />
//                 <AcceptedDisplay token={this.props.token} />
//                 {/* <WishlistIndex token={this.props.token} /> */}
//             </div>
//         );
//     }
// }


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
            {/* <div>
                <h1>Search</h1>
            </div> */}
            <div>
            <p>Prolly gonna cry here soon send help</p>
                
            </div>
        </Container>
    )
}

export default Home;