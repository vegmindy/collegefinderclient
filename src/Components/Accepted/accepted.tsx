// import React, { Component, FormEvent, SyntheticEvent } from "react";

// interface AuthState{
//     schoolID: number,
//     schoolName: string,
//     userID: number,
//     inState: boolean,
//     accepted: boolean,
//     pros: string,
//     cons: string,
//     notes: string,
//     top: boolean
// }

// interface AuthProps{
//     handleFormInput: any
//     value: any
// }

// class Accepted extends React.Component<AuthProps, AuthState> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             schoolID: 0,
//             userID: 0,
//             schoolName: '',
//             inState: true,
//             accepted: true,
//             pros: '',
//             cons: '',
//             notes: '',
//             top: false
//         };

//         this.handleFormInput = this.handleFormInput.bind(this);
//     }
//         handleFormInput(e: FormEvent) {
//             e.preventDefault();
//             fetch("http://localhost:3000/accepted/addschool", {
//                 method: 'POST',
//                 body: JSON.stringify({school: {schoolID: this.state.schoolID, userID: this.state.userID, schoolName: this.state.schoolName, inState: this.state.inState, accepted: this.state.accepted, pros: this.state.pros, cons: this.state.cons, notes: this.state.notes, top: this.state.top}}),
//                 headers: new Headers({
//                     'Content-Type': 'application/json'
//                 })
//             }) .then((response) => response.json()
//             ) .then ((data) => {
//                 console.log(data)
//             }) .catch (( error ) =>
//                 console.log(error)
//             ) 
//         }

//     render() {
//         return(
//             <div>
//                 <p>WHY ISN"T THIS SHOWING???</p>
//             </div>
//         )
//     }
// }

// export default Accepted

import React from 'react';  
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import AcceptedIndex from './acceptedIndex';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '4em',
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
                <h1>Add school</h1>
                <AcceptedIndex updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default SignUp;